import { PhoneFilledIcon } from "@src/components/common/Icon";

interface ICallKeyboard {
  className?: string;
}

export default function CallKeyboard(props: ICallKeyboard) {
  const { className } = props;
  return (
    <div className={`flex flex-col items-center gap-y-10 gap-x-10 text-white w-[fit-content] ${className ?? ""}`}>
      <section className="flex gap-x-20">
        <button className="flex flex-col items-center gap-y-1">
          <span className="text-[24px]">1</span>
          <span className="text-crm-gray-600 font-normal invisible">ABC</span>
        </button>
        <button className="flex flex-col items-center gap-y-1">
          <span className="text-[24px]">2</span>
          <span className="text-crm-gray-600 font-normal ">ABC</span>
        </button>
        <button className="flex flex-col items-center gap-y-1">
          <span className="text-[24px]">3</span>
          <span className="text-crm-gray-600 font-normal ">DEF</span>
        </button>
      </section>

      <section className="flex gap-x-20">
        <button className="flex flex-col items-center gap-y-1">
          <span className="text-[24px]">4</span>
          <span className="text-crm-gray-600 font-normal ">ABC</span>
        </button>
        <button className="flex flex-col items-center gap-y-1">
          <span className="text-[24px]">5</span>
          <span className="text-crm-gray-600 font-normal ">ABC</span>
        </button>
        <button className="flex flex-col items-center gap-y-1">
          <span className="text-[24px]">6</span>
          <span className="text-crm-gray-600 font-normal ">DEF</span>
        </button>
      </section>

      <section className="flex gap-x-20">
        <button className="flex flex-col items-center gap-y-1">
          <span className="text-[24px]">7</span>
          <span className="text-crm-gray-600 font-normal ">ABC</span>
        </button>
        <button className="flex flex-col items-center gap-y-1">
          <span className="text-[24px]">8</span>
          <span className="text-crm-gray-600 font-normal ">ABC</span>
        </button>
        <button className="flex flex-col items-center gap-y-1">
          <span className="text-[24px]">9</span>
          <span className="text-crm-gray-600 font-normal ">DEF</span>
        </button>
      </section>

      <section className="flex gap-x-20">
        <button className="flex flex-col items-center gap-y-1">
          <span className="text-[24px]">*</span>
          <span className="text-crm-gray-600 font-normal ">ABC</span>
        </button>
        <button className="flex flex-col items-center gap-y-1">
          <span className="text-[24px]">0</span>
          <span className="text-crm-gray-600 font-normal ">ABC</span>
        </button>
        <button className="flex flex-col items-center gap-y-1">
          <span className="text-[24px]">#</span>
          <span className="text-crm-gray-600 font-normal ">DEF</span>
        </button>
      </section>

      <button className="bg-crm-green-300 p-3 w-[fit-content] rounded-full ">
        <PhoneFilledIcon fill="#fff" />
      </button>
    </div>
  );
}
