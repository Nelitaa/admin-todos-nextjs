import prisma from '@/lib/prisma';
import { create } from 'domain';
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) { 

  await prisma.todo.deleteMany();

  await prisma.todo.createMany({
    data: [
      { description: 'Learn how to use Next.js to build a fullstack app', completed: true },
      { description: 'Learn how to use Prisma with Next.js' },
      { description: 'Learn how to use Vercel for deployment' },
    ]
  });
  
// Use this to create a new todo item
//   const todo = await prisma.todo.create({
//     data: {
//       description: 'Learn how to use Next.js to build a fullstack app', 
//       completed: true 
//     }
//   });

//   console.log(todo);

  return NextResponse.json({ message: 'Seed data has been added to the database.' });
}