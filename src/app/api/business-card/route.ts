import { supabase } from '@/lib/supabaseClient';
import { NextRequest, NextResponse } from 'next/server';

// GET: Fetch all business cards
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    const endpoint = searchParams.get('endpoint');
    let query: any = supabase.from('businesscard').select('*');
    if (id) {
      query = supabase.from('businesscard').select().eq('id', id).single();
    }
    if (endpoint) {
      query = supabase
        .from('businesscard')
        .select()
        .eq('endpoint', endpoint)
        .single();
    }

    const { data, error } = await query;

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 500 });
  }
}

// POST: Create a new business card
export async function POST(req: NextRequest) {
  const body = await req.json();

  const { data, error } = await supabase
    .from('businesscard')
    .insert([body])
    .select(); // returns inserted rows

  if (error)
    return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json(data);
}

// DELETE: Delete business card by id
export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'Missing ID' }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('businesscard')
    .delete()
    .eq('id', id);

  if (error)
    return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json({ message: 'Deleted successfully', data });
}

// PATCH: Update business card by id
export async function PATCH(req: NextRequest) {
  const body = await req.json();
  const { id, ...updates } = body;

  if (!id) {
    return NextResponse.json({ error: 'Missing ID' }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('businesscard')
    .update(updates)
    .eq('id', id)
    .select();

  if (error)
    return NextResponse.json({ error: error.message }, { status: 400 });
  return NextResponse.json(data);
}
