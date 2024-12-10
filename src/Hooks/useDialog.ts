import { useState } from "react";

export default function useDialog() {
  const [activeDialog, setActiveDialog] = useState<null | string>(null);
  const openDialog = (dialogName: string ) => setActiveDialog(dialogName);
  const closeDialog = () => setActiveDialog(null);

  return { activeDialog, openDialog, closeDialog };
}
