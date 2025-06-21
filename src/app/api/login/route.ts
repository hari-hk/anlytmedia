import { supabase } from '@/lib/supabaseClient';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();
    // Validate payload
    if (!payload || !payload.email || !payload.password) {
      return NextResponse.json(
        { error: 'Email and password are required.' },
        { status: 400 }
      );
    }

    const { data, error } = await supabase.auth.signInWithPassword(payload);
    if (error) {
      return NextResponse.json(
        { error: error.message || 'Authentication failed.' },
        { status: 401 }
      );
    }

    if (!data?.session) {
      return NextResponse.json(
        { error: 'No session available.' },
        { status: 500 }
      );
    }

    const { error: sessionError } = await supabase.auth.setSession({
      access_token: data?.session?.access_token,
      refresh_token: data?.session?.refresh_token,
    });

    if (sessionError) {
      return NextResponse.json(
        { error: sessionError.message || 'Failed to set session.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ data });
  } catch (err: any) {
    return NextResponse.json(
      { error: err?.message ?? 'Internal server error.' },
      { status: 500 }
    );
  }
}
