import { Todo } from "@prisma/client";

export const updateTodo = async( id: string, completed: boolean ):Promise<Todo> => {

  const body = { completed };

  const todo = await fetch(`/api/todos/${ id }`, {
    method: 'PUT',
    body: JSON.stringify( body ),
    headers: {
      'Content-Type': 'application/json'
    },
  }).then( res => res.json() );

  return todo;
}