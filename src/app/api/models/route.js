import { NextResponse } from 'next/server';
import { list } from '@vercel/blob';

export async function GET() {
  const message = await list({
    token: process.env.BLOB_READ_WRITE_TOKEN,
    prefix: 'main_media/',
  });
  return NextResponse.json(message);
}
