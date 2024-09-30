import Header from "@/components/header";
import Note from "@/components/note";
import { ParticleBackground } from "@/components/particleBackground";
import db from "@/db";

import { Notes } from "@/db/schemas/notes";
import { getUser } from "@/lib/auth";
import { desc, eq } from "drizzle-orm";

export default async function Home() {
  const user = await getUser()
const _notes = await db.select().from(Notes).where(eq(Notes.userId, user.id)).orderBy(desc(Notes.updatedAt))
  return (
    <main className="flex relative z-10 min-h-screen flex-col items-center px-4 pb-24">
      <ParticleBackground/>
    <Header />
    <div className="mt-8 grid w-full max-w-[1800px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
{_notes.map((note)=>
  <Note key={note.id} note ={note}/>
)}
</div>

  </main>
  );
}
