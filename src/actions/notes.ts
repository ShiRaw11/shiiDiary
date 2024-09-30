"use server";

import db from "@/db";
import { Notes }from "@/db/schemas/notes";
import { getUser } from "@/lib/auth";
import { getErrorMessage } from "@/lib/utils";
import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const addNewNoteAction = async (formData: FormData) => {
  try {
    const user = await getUser();

    const text = formData.get("text") as string;

    await db.insert(Notes).values({ text, userId: user.id });

    revalidatePath("/diary-notes");

    return { errorMessage: null };
  } catch (error) {
    return { errorMessage: getErrorMessage(error) };
  }
};

export const deleteNoteAction = async (noteId: number) => {
  try {
    const user = await getUser();

    await db
      .delete(Notes)
      .where(and(eq(Notes.id, noteId), eq(Notes.userId, user.id)));

    revalidatePath("/diary-notes");

    return { errorMessage: null };
  } catch (error) {
    return { errorMessage: getErrorMessage(error) };
  }
};

export const editNoteAction = async (formData: FormData) => {
  try {
    const user = await getUser();

    const text = formData.get("text") as string;
    const noteId = formData.get("noteId") as string;

    await db
      .update(Notes)
      .set({ text, updatedAt: new Date() })
      .where(and(eq(Notes.id, Number(noteId)), eq(Notes.userId, user.id)));

    revalidatePath("/diary-notes");

    return { errorMessage: null };
  } catch (error) {
    return { errorMessage: getErrorMessage(error) };
  }
};