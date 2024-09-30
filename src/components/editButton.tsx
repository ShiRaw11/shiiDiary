"use client";
import { note } from "@/db/schemas/notes";
import { useState } from "react";
import { Dialog, DialogTrigger } from "./ui/dialog";
import { Edit } from "lucide-react";
import EditNoteDialog from "./editNoteDialog";

type Props = {
  note: note;
};

function EditButton({ note }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={(open) => setOpen(open)}>
      <DialogTrigger onClick={() => setOpen(true)}>
        <Edit className="text-muted-foreground size-5" />
      </DialogTrigger>

      <EditNoteDialog setOpen={setOpen} note={note} />
    </Dialog>
  );
}

export default EditButton;