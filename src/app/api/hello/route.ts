import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) { 

  return NextResponse.json({
    message: 'Hello World!',
    method: 'GET'
  })
}

export async function POST(request: Request) { 

  return NextResponse.json({
    message: 'Hello World!',
    method: 'POST'
  })
}