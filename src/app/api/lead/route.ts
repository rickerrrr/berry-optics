/**
 * 客户线索收集 API
 * 转发到 berry_api:8000/api/lead
 */
import { NextRequest, NextResponse } from 'next/server';

const BERRY_API_URL = process.env.BERRY_API_URL || 'http://127.0.0.1:8000';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const response = await fetch(`${BERRY_API_URL}/api/lead`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('[Lead API] Error:', error);
    return NextResponse.json({ error: 'Failed to save lead' }, { status: 500 });
  }
}
