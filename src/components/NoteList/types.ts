import { Tag } from "../../types";

export type NoteListProps = {
  availableTags: Tag[];
  notes: SimplifiedNote[];
  onUpdateTag: (id: string, label: string) => void;
  onDeleteTag: (id: string) => void;
};

export type SimplifiedNote = {
  tags: Tag[];
  title: string;
  id: string;
};
