/**
 * Berry Optics - AI Assistant API Route
 * Connects to Hermes backend for the floating AI chat widget.
 * Source: design-spec.md Section 4.4 - AI Assistant Widget
 *
 * This is API routing logic only — no visual code.
 */

import { NextRequest, NextResponse } from 'next/server';

const HERMES_BACKEND_URL = process.env.HERMES_BACKEND_URL || 'http://127.0.0.1:61364';
const HERMES_MODEL = process.env.HERMES_MODEL || 'doubao-seed-2-1-pro-260628';

export async function POST(request: NextRequest) {
  let lang = 'zh';

  try {
    const body = await request.json();
    const message = body?.message;
    lang = body?.lang ?? 'zh';

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    const response = await fetch(`${HERMES_BACKEND_URL}/v1/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: HERMES_MODEL,
        messages: [
          {
            role: 'system',
            content:
              lang === 'zh'
                ? '你是 Berry Optics 的 AI 助手。回答关于光学产品、精密加工、镀膜技术和质量控制的问题。保持专业、简洁、友好。如果用户的问题超出光学领域，请礼貌引导回光学话题。'
                : 'You are the Berry Optics AI Assistant. Answer questions about optical products, precision machining, coating technology, and quality control. Be professional, concise, and friendly. If a question is outside optics, politely guide back to optical topics.',
          },
          { role: 'user', content: message },
        ],
        max_tokens: 1024,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      throw new Error(`Backend responded with ${response.status}`);
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || 'No response';

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('[AI Assistant] Error:', error);
    return NextResponse.json(
      {
        error: 'Service temporarily unavailable',
        reply: lang === 'zh'
          ? '抱歉，服务暂时不可用，请稍后再试。'
          : 'Sorry, the service is temporarily unavailable. Please try again later.',
      },
      { status: 503 }
    );
  }
}
