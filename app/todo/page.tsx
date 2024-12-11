import { auth } from "@/auth";
import TodoForm from "@/components/TodoForm";
import { db } from "@/db";
import React from "react";

const TodoPage = async () => {
  // Fetch the session server-side
  const session = await auth();

  // If no session is found, redirect or handle unauthorized access
  if (!session) {
    return (
      <div className="flex min-h-screen flex-col items-center w-full p-24">
        Please log in to view your todos.
      </div>
    );
  }
  const todos = await db.todo.findMany({
    where: {
      userId: session?.user?.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="flex min-h-screen flex-col items-center w-full p-24">
      <h2 className="text-2xl font-bold">Todo</h2>
      <TodoForm />
      <ul className="list-disc">
        {todos?.map((todo) => (
          <li key={todo.id}>
            <div>
              <h3>{todo.content}</h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoPage;
