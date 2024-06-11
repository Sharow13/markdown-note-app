import { NoteForm } from "../NoteForm/NoteForm";
import { NewNoteProps } from "./types";

export const NewNote = ({ onSubmit, onAddTag, availableTags }: NewNoteProps) => {
  return (
    <>
      <h1 className="mb-4">New Note</h1>
      <NoteForm onSubmit={onSubmit} onAddTag={onAddTag} availableTags={availableTags} />
    </>
  );
};
