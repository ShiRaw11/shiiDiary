"use client";
import { useState } from "react";
import { note as NoteType } from "@/db/schemas/notes";
import DeleteButton from "./deleteButton";
import EditNoteDialog from "./editNoteDialog";
import { Dialog } from "./ui/dialog";

type Props = {
  note: NoteType;
};

function Note({ note }: Props) {
  const [open, setOpen] = useState(false); 

  const handleClick = () => {
    setOpen(true);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div
        onClick={handleClick} 
        className="custom-scrollbar h-[300px] w-full overflow-y-auto overflow-x-hidden whitespace-pre-wrap break-words rounded-lg p-6 border border-white bg-secondary hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer hover:ring-2 hover:ring-pink-500 hover:ring-inset"
      >
        <div className="relative mb-2 flex items-center gap-2">
          <h2 className="text-muted-foreground text-lg font-semibold">
            {note.updatedAt.toISOString().slice(0, 10)}
          </h2>
          <DeleteButton noteId={note.id} />
        </div>

        <p>{note.text}</p>
      </div>

      <EditNoteDialog  setOpen={setOpen} note={note} />
    </Dialog>
  );
}

export default Note;
