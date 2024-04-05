import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) { 
  
  const { searchParams } = new URL(request.url)
  const take = Number(searchParams.get('take') ?? '10');
  const skip = Number(searchParams.get('skip') ?? '0');

  if ( isNaN(take) ) {
    return NextResponse.json({ message: 'Invalid take parameter' }, { status: 400 });
  }

  if ( isNaN(skip) ) {
    return NextResponse.json({ message: 'Invalid skip parameter' }, { status: 400 });
  }

  const todos = await prisma.todo.findMany({
    take: take,
    skip: skip,
  });

  return NextResponse.json( todos );
}

export async function POST(request: Request) {

  const body = await request.json();

  const todo = await prisma.todo.create({ data: body })

  return NextResponse.json(todo);
}