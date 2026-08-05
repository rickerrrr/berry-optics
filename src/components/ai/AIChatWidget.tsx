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

const WELCOME_ZH = '您好，我是贝瑞光电AI顾问。我可以帮您了解精密光学产品、推荐解决方案。请问您需要哪类光学产品？';
const WELCOME_EN = 'Hello, I am the Berry Optics AI advisor. I can help you learn about our precision optical products and solutions. What type of optical products are you looking for?';

const QUICK_QUESTIONS_ZH = [
  '超光滑元件能做多高的精度？',
  '有没有适合半导体检测的光学元件？',
  '如何获取产品报价？',
];

const QUICK_QUESTIONS_EN = [
  'What precision can your ultra-smooth optics achieve?',
  'Do you have optics for semiconductor inspection?',
  'How can I get a quotation?',
];

const HERMES_URL = process.env.NEXT_PUBLIC_HERMES_URL || '';
const HERMES_MODEL = process.env.NEXT_PUBLIC_HERMES_MODEL || 'doubao-seed-2-1-pro-260628';

async function callAI(message: string, lang: string): Promise<string> {
  // Try Next.js API route first (works in dev / Vercel SSR)
  try {
    const resp = await fetch('/api/ai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, lang }),
    });
    if (resp.ok) {
      const data = await resp.json();
      return data.reply || 'No response';
    }
  } catch { /* fall through */ }

  // Fallback: direct Hermes connection (for static export)
  if (HERMES_URL) {
    try {
      const resp = await fetch(`${HERMES_URL}/v1/chat/completions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: HERMES_MODEL,
          messages: [
            {
              role: 'system',
              content: lang === 'zh' 
                ? '你是成都贝瑞光电科技股份有限公司的AI销售顾问。回答关于精密光学产品的问题。保持专业、简洁。如果客户问报价，引导留下联系方式。如果客户问竞品对比，客观描述自身能力不攻击竞品。'
                : 'You are an AI sales advisor for Chengdu Berry Optoelectronics. Answer questions about precision optical products. Keep professional and concise. If asked about pricing, guide to leave contact info. If asked about competitors, describe your capabilities objectively.',
            },
            { role: 'user', content: message },
          ],
          max_tokens: 512,
          temperature: 0.7,
        }),
      });
      const data = await resp.json();
      return data.choices?.[0]?.message?.content || 'No response';
    } catch { /* fall through */ }
  }

  // Final fallback
  return lang === 'zh'
    ? '抱歉，AI助手暂未连接。请通过电话 18180913168 或邮箱 chmk@zzoptic.com 联系我们。'
    : 'Sorry, the AI assistant is currently unavailable. Please contact us at +86 18180913168 or chmk@zzoptic.com.';
}

async function submitLeadToAPI(leadData: LeadData, messages: Message[]) {
  try {
    await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...leadData, conversation: messages, source: 'web_ai' }),
    });
    return true;
  } catch {
    return false;
  }
}

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
  const welcomeMessage = isZh ? WELCOME_ZH : WELCOME_EN;
  const quickQuestions = isZh ? QUICK_QUESTIONS_ZH : QUICK_QUESTIONS_EN;

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

    const reply = await callAI(text, lang);

    setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
    setLoading(false);

    // Show lead form after 3+ exchanges
    if (messages.length >= 2 && !leadSubmitted && !showLeadForm) {
      setTimeout(() => setShowLeadForm(true), 3000);
    }
  };

  const submitLead = async () => {
    if (!leadData.contact && !leadData.company) return;
    await submitLeadToAPI(leadData, messages);
    setLeadSubmitted(true);
    setShowLeadForm(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#0B6CFF] hover:bg-[#0856CC] text-white shadow-lg shadow-[#0B6CFF]/25 flex items-center justify-center transition-all duration-200 hover:scale-105 animate-pulse hover:animate-none"
          aria-label={isZh ? '打开AI助手' : 'Open AI Assistant'}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
          </svg>
        </button>
      )}

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[380px] h-[560px] max-h-[80vh] bg-white rounded-xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-[#0B6CFF] text-white shrink-0">
            <div>
              <h3 className="font-semibold text-sm">{isZh ? '贝瑞光电 AI 顾问' : 'Berry Optics AI Advisor'}</h3>
              <p className="text-xs text-white/70 mt-0.5">{isZh ? '精密光学 · 智能咨询' : 'Precision Optics · Smart Consulting'}</p>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gray-50/50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[88%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-[#0B6CFF] text-white rounded-br-md'
                    : 'bg-white text-gray-800 rounded-bl-md shadow-sm border border-gray-100'
                }`}>
                  <div className="whitespace-pre-wrap">{msg.content}</div>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-white px-4 py-2.5 rounded-2xl rounded-bl-md shadow-sm border border-gray-100">
                  <div className="flex space-x-1.5">
                    <div className="w-2 h-2 bg-[#0B6CFF]/40 rounded-full animate-bounce" style={{animationDelay: '0ms'}}/>
                    <div className="w-2 h-2 bg-[#0B6CFF]/40 rounded-full animate-bounce" style={{animationDelay: '150ms'}}/>
                    <div className="w-2 h-2 bg-[#0B6CFF]/40 rounded-full animate-bounce" style={{animationDelay: '300ms'}}/>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef}/>

            {/* Lead form */}
            {showLeadForm && !leadSubmitted && (
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                <p className="text-sm font-medium text-blue-900 mb-3">
                  {isZh ? '感谢咨询！请留下联系方式，我们的技术专家将为您提供更精准的方案。' : 'Thanks! Leave your contact for a tailored solution from our experts.'}
                </p>
                <div className="space-y-2">
                  <input className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#0B6CFF]/20 focus:border-[#0B6CFF]" placeholder={isZh ? '公司名称' : 'Company'} value={leadData.company} onChange={e => setLeadData(p => ({...p, company: e.target.value}))}/>
                  <input className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#0B6CFF]/20 focus:border-[#0B6CFF]" placeholder={isZh ? '所属行业' : 'Industry'} value={leadData.industry} onChange={e => setLeadData(p => ({...p, industry: e.target.value}))}/>
                  <input className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#0B6CFF]/20 focus:border-[#0B6CFF]" placeholder={isZh ? '应用需求' : 'Requirement'} value={leadData.requirement} onChange={e => setLeadData(p => ({...p, requirement: e.target.value}))}/>
                  <input className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#0B6CFF]/20 focus:border-[#0B6CFF]" placeholder={isZh ? '联系方式(电话/邮箱)' : 'Contact (phone/email)'} value={leadData.contact} onChange={e => setLeadData(p => ({...p, contact: e.target.value}))}/>
                </div>
                <div className="flex space-x-2 mt-3">
                  <button onClick={submitLead} disabled={!leadData.contact && !leadData.company} className="flex-1 px-4 py-2.5 text-sm bg-[#0B6CFF] text-white rounded-lg hover:bg-[#0856CC] disabled:opacity-40 disabled:cursor-not-allowed font-medium transition-colors">{isZh ? '提交' : 'Submit'}</button>
                  <button onClick={() => { setShowLeadForm(false); setLeadSubmitted(true); }} className="px-4 py-2.5 text-sm text-gray-400 hover:text-gray-600 transition-colors">{isZh ? '跳过' : 'Skip'}</button>
                </div>
              </div>
            )}

            {leadSubmitted && (
              <div className="bg-green-50 border border-green-100 rounded-xl p-3.5 text-sm text-green-700">
                {isZh ? '已收到您的信息，专家将在1个工作日内联系您。' : 'We received your info. Our expert will contact you within 1 business day.'}
              </div>
            )}
          </div>

          {/* Quick questions */}
          {messages.length <= 1 && (
            <div className="px-4 py-3 border-t border-gray-100 bg-white shrink-0">
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((q, i) => (
                  <button key={i} onClick={() => sendMessage(q)} className="text-xs px-3 py-1.5 bg-gray-100 hover:bg-[#0B6CFF]/10 hover:text-[#0B6CFF] text-gray-600 rounded-full transition-colors">
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="px-4 py-3 border-t border-gray-100 bg-white shrink-0">
            <div className="flex items-center gap-2">
              <input
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={isZh ? '输入您的问题...' : 'Type your question...'}
                className="flex-1 px-4 py-2.5 text-sm border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0B6CFF]/20 focus:border-[#0B6CFF] focus:bg-white transition-colors"
                disabled={loading}
              />
              <button onClick={() => sendMessage(input)} disabled={loading || !input.trim()} className="px-4 py-2.5 bg-[#0B6CFF] text-white rounded-xl hover:bg-[#0856CC] disabled:opacity-40 disabled:cursor-not-allowed text-sm font-medium transition-colors shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
