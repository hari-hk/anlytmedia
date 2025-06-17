import { supabase } from '@/lib/supabaseClient';
import { NextResponse } from 'next/server';

// GET: Fetch all business cards for logged-in user
export async function GET() {
  const response = await supabase.from('businesscard').select('*');
  return NextResponse.json(response);
}

// POST: Create a new business card
export async function POST(req) {
  const body = await req.json();
  const { data, error: insertError } = await supabase
    .from('businesscard')
    .insert([
      {
        ...body,
      },
    ]);

  if (insertError)
    return NextResponse.json({ error: insertError.message }, { status: 400 });
  return NextResponse.json(data);
}
