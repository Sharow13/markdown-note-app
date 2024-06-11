import { Note } from "../../types";

export type NoteLayoutProps = {
  notes: Note[];
};

export type NoteProps = {
  onDelete: (id: string) => void;
};
