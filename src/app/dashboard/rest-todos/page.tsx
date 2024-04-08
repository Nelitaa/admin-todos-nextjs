import prisma from "@/lib/prisma";

export const metadata = {
  title: 'List of tasks to do',
  description: 'REST Todos page',
};


export default async function RestTodosPage() {

  const todos = await prisma.todo.findMany({ orderBy: { description: 'asc' } });

  return (
    <div>
      <h1>Page REST Todos</h1>
      {
        JSON.stringify( todos )
      }
    </div>
  );
}