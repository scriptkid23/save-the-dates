import Sheet from "react-modal-sheet";
import { useState } from "react";

type Props = {
  className: string;
  style?: any;
};
export default function ModalSheet({ className, style }: Props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className={className} style={style} onClick={() => setOpen(true)}>
        <div className="blob white" />
      </div>

      <Sheet
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        initialSnap={0}
        snapPoints={[-50]}
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <div className="tabs">
              <a className="tab tab-bordered">Tab 1</a>
              <a className="tab tab-bordered tab-active">Tab 2</a>
              <a className="tab tab-bordered">Tab 3</a>
            </div>
          </Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop />
      </Sheet>
    </>
  );
}
