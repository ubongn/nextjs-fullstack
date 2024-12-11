import React from "react";
import { Button } from "./ui/button";
import { useFormStatus } from "react-dom";

const TodoButton = () => {
  const { pending } = useFormStatus();

  return (
    <div className="flex flex-col w-[300px]">
      <Button disabled={pending} className="px-4 py-2 bg-slate-700">
        {pending ? "Adding..." : "Add Todo"}
      </Button>
    </div>
  );
};

export default TodoButton;
