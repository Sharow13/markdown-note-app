import { Tag } from "../../types";

export type EditTagsModalProps = {
  availableTags: Tag[];
  show: boolean;
  handleClose: () => void;
  onUpdateTag: (id: string, label: string) => void;
  onDeleteTag: (id: string) => void;
};
