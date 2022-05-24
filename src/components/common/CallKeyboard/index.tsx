import { CloseIcon, DeleteSquareIcon, PhoneFilledIcon } from "@src/components/common/Icon";
import { useEffect, useState } from "react";
import "./styles.scss";

interface ICallKeyboard {
  className?: string;
  changeFunc: (state: string) => void;
  targetValue: string;
  showKeyboard: boolean;
  setShowKeyboard: (state?: any) => any;
}

export default function CallKeyboard(props: ICallKeyboard) {
  const { className, changeFunc, targetValue, showKeyboard, setShowKeyboard } = props;
  const [isShowKeyboard, setIsShowKeyboard] = useState<boolean>(showKeyboard);

  useEffect(() => {
    setIsShowKeyboard(showKeyboard);
  }, [showKeyboard]);

  return (
    <div className={`${isShowKeyboard && "show-keyboard"} crm-keypad-container w-full`}>
      <button
        onClick={() => {
          setIsShowKeyboard(false);
          setShowKeyboard(false);
        }}
        className="flex gap-x-2 items-center ml-8 "
      >
        Keypad <CloseIcon />
      </button>
      <div className={`crm-keypad ${className ?? ""} `}>
        <section className="flex gap-x-20">
          <button className="flex flex-col items-center gap-y-1" onClick={(state) => changeFunc(targetValue + "1")}>
            <span className="text-[24px]">1</span>
            <span className="text-crm-gray-600 font-normal invisible">ABC</span>
          </button>
          <button className="flex flex-col items-center gap-y-1" onClick={(state) => changeFunc(targetValue + "2")}>
            <span className="text-[24px]">2</span>
            <span className="text-crm-gray-600 font-normal ">ABC</span>
          </button>
          <button className="flex flex-col items-center gap-y-1" onClick={(state) => changeFunc(targetValue + "3")}>
            <span className="text-[24px]">3</span>
            <span className="text-crm-gray-600 font-normal ">DEF</span>
          </button>
        </section>

        <section className="flex gap-x-20">
          <button className="flex flex-col items-center gap-y-1" onClick={(state) => changeFunc(targetValue + "4")}>
            <span className="text-[24px]">4</span>
            <span className="text-crm-gray-600 font-normal ">GHI</span>
          </button>
          <button className="flex flex-col items-center gap-y-1" onClick={(state) => changeFunc(targetValue + "5")}>
            <span className="text-[24px]">5</span>
            <span className="text-crm-gray-600 font-normal ">JKL</span>
          </button>
          <button className="flex flex-col items-center gap-y-1" onClick={(state) => changeFunc(targetValue + "6")}>
            <span className="text-[24px]">6</span>
            <span className="text-crm-gray-600 font-normal ">MNO</span>
          </button>
        </section>

        <section className="flex gap-x-20">
          <button className="flex flex-col items-center gap-y-1" onClick={(state) => changeFunc(targetValue + "7")}>
            <span className="text-[24px]">7</span>
            <span className="text-crm-gray-600 font-normal ">PQRS</span>
          </button>
          <button className="flex flex-col items-center gap-y-1" onClick={(state) => changeFunc(targetValue + "8")}>
            <span className="text-[24px]">8</span>
            <span className="text-crm-gray-600 font-normal ">TUV</span>
          </button>
          <button className="flex flex-col items-center gap-y-1" onClick={(state) => changeFunc(targetValue + "9")}>
            <span className="text-[24px]">9</span>
            <span className="text-crm-gray-600 font-normal ">WXYZ</span>
          </button>
        </section>

        <section className="flex gap-x-20">
          <button className="flex flex-col items-center gap-y-1" onClick={(state) => changeFunc(targetValue + "*")}>
            <span className="text-[24px]">*</span>
            <span className="text-crm-gray-600 font-normal invisible">ABC1</span>
          </button>
          <button className="flex flex-col items-center gap-y-1" onClick={(state) => changeFunc(targetValue + "0")}>
            <span className="text-[24px]">0</span>
            <span className="text-crm-gray-600 font-normal invisible">ABC</span>
          </button>
          <button className="flex flex-col items-center gap-y-1" onClick={(state) => changeFunc(targetValue + "#")}>
            <span className="text-[24px]">#</span>
            <span className="text-crm-gray-600 font-normal invisible">DEF</span>
          </button>
        </section>

        <button className="bg-crm-green-300 p-3 w-[fit-content] rounded-full ">
          <PhoneFilledIcon fill="#fff" />
        </button>
      </div>
    </div>
  );
}
