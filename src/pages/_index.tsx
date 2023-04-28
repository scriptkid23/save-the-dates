import Sheet from "react-modal-sheet";
import { useState } from "react";

export default function Example() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)} color="black">Open sheet</button>

      <Sheet isOpen={isOpen} onClose={() => setOpen(false)} initialSnap={1} snapPoints={[-50, 0.5, 100, 0]}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>demo</Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop />
      </Sheet>
    </>
  );
}
