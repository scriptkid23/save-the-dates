import Sheet from "react-modal-sheet";
import { useState } from "react";

type Props = {
  className: string;
  style?: any;
};
function GeneralElement() {
  return (
    <>
      <div>
        <p className="uppercase text-neutral-focus font-medium text-center text-xs">
          trân trọng kính mời
        </p>
        <div className="divider mx-2">⚜️</div>
        <p className="uppercase text-neutral-focus font-medium  text-center text-xs">
          tới dự bữa cơm thân mật chung vui cùng với gia đình chúng tôi
        </p>
      </div>
      <div className="mt-5">
        <div className="my-2">
          <p className="uppercase font-medium text-center text-xs leading-6">
            Thời gian
          </p>
          <p className="uppercase text-neutral-focus font-medium text-center text-xs">
            Ngày 7, tháng 5, 2023
          </p>
        </div>
        <div>
          <p className="uppercase font-medium text-center text-xs leading-6">
            Vào Lúc
          </p>
          <p className="uppercase text-neutral-focus font-medium text-center text-xs">
            16 giờ, 00 phút, Chủ nhật
          </p>
        </div>
        <div className="my-2">
          <p className="uppercase font-medium text-center text-xs leading-6">
            Tại tư gia nhà gái
          </p>
          <p className="uppercase text-neutral-focus font-medium text-center text-xs">
            Xóm 8, Xã Thạch Thán, Quốc Oai, Hà Nội
          </p>
        </div>
        <div>
          <p className="uppercase font-medium text-center text-xs leading-6">
            Lễ thành hôn
          </p>
          <p className="uppercase text-neutral-focus font-medium text-center text-xs whitespace-pre-wrap">
            {`Tổ chức vào lúc 15 giờ 00 phút\n`}
            <span className="font-bold">Thứ hai, ngày 08/05/2023</span>
          </p>
        </div>
        <div className="my-2">
          <p className="uppercase font-medium text-center text-xs leading-6">
            Tại tư gia nhà trai
          </p>
          <p className="uppercase text-neutral-focus font-medium text-center text-xs">
            Thôn Miếu Môn, Xã Trần Phú, Huyện Chương Mỹ, Hà Nội.
          </p>
        </div>
      </div>
    </>
  );
}

function DonateElement() {
  return (
    <>
      {" "}
      <div className="my-2">
        <p className="uppercase font-medium text-center text-xs leading-6">
          nguyen do lan anh
        </p>
        <p className="uppercase text-neutral-focus font-medium text-center font-bold mb-3">
          15391236666 - Ngân hàng SCB
        </p>
        <img src="/assets/qr.png" />
      </div>
    </>
  );
}
function LocationElement() {
  const handleGoto = (location: string) => {
    window.open(location, "_blank");
  };
  return (
    <>
      <div className="my-2 flex flex-col">
        <p className="uppercase font-medium text-center text-xs leading-6">
          Tại tư gia nhà gái
        </p>
        <p className="uppercase text-neutral-focus font-medium text-center text-xs">
          Xóm 8, Xã Thạch Thán, Quốc Oai, Hà Nội
        </p>
        <button
          className="btn btn-outline btn-primary my-3"
          onClick={() =>
            handleGoto(process.env.NEXT_PUBLIC_LOCATION_FEMALE as string)
          }
        >
          Chỉ đường đến nhà gái
        </button>
      </div>
      <div className="my-2 flex flex-col">
        <p className="uppercase font-medium text-center text-xs leading-6">
          Tại tư gia nhà trai
        </p>
        <p className="uppercase text-neutral-focus font-medium text-center text-xs">
          Thôn Miếu Môn, Xã Trần Phú, Huyện Chương Mỹ, Hà Nội.
        </p>
        <button
          className="btn btn-outline btn-primary my-3"
          onClick={() =>
            handleGoto(process.env.NEXT_PUBLIC_LOCATION_MALE as string)
          }
        >
          Chỉ đường đến nhà trai
        </button>
      </div>
    </>
  );
}
function TabElement(props: any) {
  console.log(props);

  switch (props.tabId) {
    case 0:
      return <GeneralElement />;
    case 1:
      return <LocationElement />;
    case 2:
      return <DonateElement />;
    default:
      return <DonateElement />;
  }
}
export default function ModalSheet({ className, style }: Props) {
  const [isOpen, setOpen] = useState(false);
  const [tabId, setTabId] = useState<number>(0);
  console.log(tabId);
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
            <div className="tabs tabs-boxed bg-white font-inter justify-around">
              <a
                className={`tab ${tabId === 0 && "tab-active"}`}
                onClick={() => setTabId(0)}
              >
                General 👰🏻‍♀️
              </a>
              <a
                className={`tab ${tabId === 1 && "tab-active"}`}
                onClick={() => setTabId(1)}
              >
                Location 🚕
              </a>
              <a
                className={`tab ${tabId === 2 && "tab-active"}`}
                onClick={() => setTabId(2)}
              >
                Donate 💵
              </a>
            </div>
            <div className="p-5 font-inter mt-2">
              <TabElement tabId={tabId} />
            </div>
          </Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop />
      </Sheet>
    </>
  );
}
