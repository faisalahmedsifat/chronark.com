import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Fetch blogs from the Tensorify API
    const response = await fetch('https://controls.tensorify.io/api/blogs', {
      headers: {
        'Content-Type': 'application/json',
      },
      // Add cache control to avoid stale data
      next: { revalidate: 3600 } // Revalidate every hour
    });

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    const data = await response.json();
    
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      { error: 'Failed to fetch blogs' },
      { status: 500 }
    );
  }
} 