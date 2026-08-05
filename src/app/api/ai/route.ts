/**
 * 贝瑞AI销售顾问 — API 路由 V2.0
 * 连接 berry_api.py (ChromaDB RAG + 身份规则 + LiteLLM)
 *
 * 升级内容:
 * - 后端: Hermes(61364) → berry_api(8000) with RAG
 * - System Prompt: 通用光学 → 贝瑞6条身份规则
 * - 新增: 线索采集端点 POST /api/lead
 */

import { NextRequest, NextResponse } from 'next/server';

const BERRY_API_URL = process.env.BERRY_API_URL || 'http://127.0.0.1:8000';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const message = body?.message;
    const lang = body?.lang ?? 'zh';

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    const response = await fetch(`${BERRY_API_URL}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, lang }),
    });

    if (!response.ok) {
      throw new Error(`Backend responded with ${response.status}`);
    }

    const data = await response.json();

    return NextResponse.json({
      reply: data.reply,
      mode: data.mode,
      sources: data.sources,
    });
  } catch (error) {
    console.error('[Berry AI] Error:', error);
    return NextResponse.json(
      {
        error: 'Service temporarily unavailable',
        reply: '抱歉，AI服务暂时不可用。请拨打 13708083785 直接咨询。',
      },
      { status: 503 }
    );
  }
}
