'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export const sleep = async( seconds: number = 0 ) => {
  return new Promise( resolve => {
    setTimeout( () => {
      resolve(true);
     }, seconds * 1000 );
  });
}

export const toggleTodo = async( id: string, completed: boolean ): Promise<Todo> => {
  
  await sleep(3);
  
  const todo = await prisma.todo.findFirst({ where: { id } });
  
  if ( !todo ) {
    throw `Todo with id: ${ id } not found`;
  }

  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: { completed }
  });

  revalidatePath('/dashboard/server-todos');

  return updatedTodo;
}


export const addTodo = async( description: string ) => {
  try {
    const todo = await prisma.todo.create({ data: { description } });
    revalidatePath('/dashboard/server-todos');
    return todo;
  
  } catch (error) {
    return {
      message: 'Error creating todo',
    }
  }
}

export const deleteCompleted = async(): Promise<void> => {
  await prisma.todo.deleteMany({ where: { completed: true } });
  revalidatePath('/dashboard/server-todos');
}