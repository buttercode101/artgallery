import { NextResponse } from 'next/server';

export function GET() {
  return NextResponse.json(
    {
      status: 'ok',
      app: 'ark-contemporary-demo',
      timestamp: new Date().toISOString()
    },
    {
      headers: {
        'Cache-Control': 'no-store'
      }
    }
  );
}
