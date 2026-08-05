'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface LeadData {
  company: string;
  industry: string;
  requirement: string;
  contact: string;
}

const QUICK_QUESTIONS_ZH = [
  '你们主要做什么产品？',
  '有没有适合半导体行业的光学元件？',
  '产品的精度能达到什么水平？',
];

const QUICK_QUESTIONS_EN = [
  'What products do you offer?',
  'Do you have optics for semiconductor industry?',
  'What precision level can you achieve?',
];

export default function AIChatWidget({ lang = 'zh' }: { lang?: string }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [leadSubmitted, setLeadSubmitted] = useState(false);
  const [leadData, setLeadData] = useState<LeadData>({ company: '', industry: '', requirement: '', contact: '' });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const isZh = lang.startsWith('zh');
  const quickQuestions = isZh ? QUICK_QUESTIONS_ZH : QUICK_QUESTIONS_EN;

  const welcomeMessage = isZh
    ? '您好，我是贝瑞光电AI助手。我可以帮您了解我们的精密光学产品。请问有什么可以帮您？'
    : 'Hello, I am the Berry Optics AI assistant. How can I help you with our precision optical products?';

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([{ role: 'assistant', content: welcomeMessage }]);
    }
  }, [open]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;
    const userMsg: Message = { role: 'user', content: text };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const resp = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, lang }),
      });
      const data = await resp.json();
      setMessages(prev => [...prev, { role: 'assistant', content: data.reply || data.error || 'Error' }]);

      if (data.mode !== 'pricing_bypass' && messages.length > 2 && !leadSubmitted) {
        setTimeout(() => setShowLeadForm(true), 2000);
      }
    } catch {
      setMessages(prev => [...prev, { role: 'assistant', content: isZh ? '抱歉，服务暂时不可用。请拨打 13708083785 咨询。' : 'Sorry, service unavailable. Call +86 13708083785.' }]);
    } finally {
      setLoading(false);
    }
  };

  const submitLead = async () => {
    if (!leadData.contact && !leadData.company) return;
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...leadData,
          conversation: messages,
          source: 'web_ai',
        }),
      });
      setLeadSubmitted(true);
      setShowLeadForm(false);
    } catch {
      // silent fail
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#0B6CFF] hover:bg-[#0856CC] text-white shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105"
          aria-label={isZh ? '打开AI助手' : 'Open AI Assistant'}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
          </svg>
        </button>
      )}

      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[600px] max-h-[80vh] bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-gray-800 bg-[#0B6CFF] text-white">
            <div>
              <h3 className="font-medium text-sm">{isZh ? '贝瑞AI助手' : 'Berry AI Assistant'}</h3>
              <p className="text-xs opacity-75">{isZh ? '基于企业知识库回答' : 'Powered by enterprise knowledge'}</p>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-4 py-2 rounded-lg text-sm ${
                  msg.role === 'user'
                    ? 'bg-[#0B6CFF] text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100'
                }`}>
                  <div className="whitespace-pre-wrap">{msg.content}</div>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0ms'}}/>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '150ms'}}/>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '300ms'}}/>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef}/>

            {showLeadForm && !leadSubmitted && (
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <p className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-3">
                  {isZh ? '感谢咨询！请留下联系方式，我们将为您提供更精准的方案。' : 'Thanks! Leave your contact for a tailored solution.'}
                </p>
                <input className="w-full px-3 py-2 mb-2 text-sm border border-gray-200 dark:border-gray-700 rounded bg-white dark:bg-gray-800" placeholder={isZh ? '公司名称' : 'Company'} value={leadData.company} onChange={e => setLeadData(p => ({...p, company: e.target.value}))}/>
                <input className="w-full px-3 py-2 mb-2 text-sm border border-gray-200 dark:border-gray-700 rounded bg-white dark:bg-gray-800" placeholder={isZh ? '所属行业' : 'Industry'} value={leadData.industry} onChange={e => setLeadData(p => ({...p, industry: e.target.value}))}/>
                <input className="w-full px-3 py-2 mb-2 text-sm border border-gray-200 dark:border-gray-700 rounded bg-white dark:bg-gray-800" placeholder={isZh ? '应用需求' : 'Requirement'} value={leadData.requirement} onChange={e => setLeadData(p => ({...p, requirement: e.target.value}))}/>
                <input className="w-full px-3 py-2 mb-3 text-sm border border-gray-200 dark:border-gray-700 rounded bg-white dark:bg-gray-800" placeholder={isZh ? '联系方式(电话/邮箱)' : 'Contact (phone/email)'} value={leadData.contact} onChange={e => setLeadData(p => ({...p, contact: e.target.value}))}/>
                <div className="flex space-x-2">
                  <button onClick={submitLead} disabled={!leadData.contact && !leadData.company} className="flex-1 px-4 py-2 text-sm bg-[#0B6CFF] text-white rounded-lg hover:bg-[#0856CC] disabled:opacity-50 disabled:cursor-not-allowed">{isZh ? '提交' : 'Submit'}</button>
                  <button onClick={() => { setShowLeadForm(false); setLeadSubmitted(true); }} className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700">{isZh ? '跳过' : 'Skip'}</button>
                </div>
              </div>
            )}
            {leadSubmitted && (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3 text-sm text-green-700 dark:text-green-300">
                {isZh ? '已收到您的信息，我们会尽快联系您。' : 'We received your info. We will contact you soon.'}
              </div>
            )}
          </div>

          {messages.length === 1 && (
            <div className="px-4 py-2 border-t border-gray-100 dark:border-gray-800">
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((q, i) => (
                  <button key={i} onClick={() => sendMessage(q)} className="text-xs px-3 py-1.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full transition-colors">
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="px-4 py-3 border-t border-gray-100 dark:border-gray-800">
            <div className="flex items-center space-x-2">
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={isZh ? '输入您的问题...' : 'Ask a question...'}
                className="flex-1 px-4 py-2 text-sm border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-[#0B6CFF]"
                disabled={loading}
              />
              <button onClick={() => sendMessage(input)} disabled={loading || !input.trim()} className="px-4 py-2 bg-[#0B6CFF] text-white rounded-lg hover:bg-[#0856CC] disabled:opacity-50 disabled:cursor-not-allowed text-sm">
                {isZh ? '发送' : 'Send'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
