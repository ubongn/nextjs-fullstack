"use server";

import { auth } from "@/auth";
import { db } from "@/db";
import { revalidatePath } from "next/cache";

// Add a todo
export const addTodo = async (formData: FormData) => {
  const session = await auth();

  // Check if the user is authenticated
  if (!session?.user?.id) {
    return {
      error: "User is not authenticated",
    };
  }

  const content = formData.get("content");

  // Validate content
  if (!content || typeof content !== "string") {
    return {
      error: "Invalid content",
    };
  }

  try {
    await db.todo.create({
      data: {
        content: content,
        userId: session.user.id, // Use session userId
      },
    });
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }

  // Revalidate the path to refresh the data
  revalidatePath("/todo");

  return { success: true };
};
