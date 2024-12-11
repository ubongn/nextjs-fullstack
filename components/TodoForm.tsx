"use client";

import React, { useRef } from "react";
import { Input } from "./ui/input";
import { addTodo } from "@/actions/todo";
import TodoButton from "./TodoButton";

const TodoForm = () => {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <div>
      <form
        ref={ref}
        action={async (formData) => {
          ref.current?.reset();

          await addTodo(formData);
        }}
        className="flex flex-col gap-4 w-[300px] my-16"
      >
        <Input type="text" name="content" placeholder="Write your todo..." />
        <TodoButton />
      </form>
    </div>
  );
};

export default TodoForm;
