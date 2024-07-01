import prisma from '@/lib/prisma';
import { create } from 'domain';
import { NextResponse, NextRequest } from 'next/server'
import bcrypt from 'bcryptjs';

export async function GET(request: Request) { 

  await prisma.todo.deleteMany();
  await prisma.user.deleteMany();

  const user = await prisma.user.create({
    data: {
      email: 'nela@test.com',
      password: bcrypt.hashSync('123456'),
      roles: ['admin', 'client', 'super-user'],
      Todo: {
        create: [
          { description: 'Learn how to use Next.js to build a fullstack app', completed: true },
          { description: 'Learn how to use Prisma with Next.js' },
          { description: 'Learn how to use Vercel for deployment' },
        ]
      }
    }
  });

  // await prisma.todo.createMany({
  //   data: [
  //     { description: 'Learn how to use Next.js to build a fullstack app', completed: true },
  //     { description: 'Learn how to use Prisma with Next.js' },
  //     { description: 'Learn how to use Vercel for deployment' },
  //   ]
  // });
  
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