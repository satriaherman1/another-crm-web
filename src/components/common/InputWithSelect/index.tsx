import { useRef, useState } from "react";
import "./styles.scss";

export default function InputWithSelect(props: ICrmInputWithSelect) {
  const { placeholder, className, style } = props;
  const [showOptLabel, setShowOptLabel] = useState<boolean>(false);
  const selectRef = useRef(null);

  const optList = [
    {
      value: "member",
      label: "member",
    },
    {
      value: "admin",
      label: "admin",
    },
  ];

  const handleClickDropdown = () => {
    console.log(selectRef.current);
    setShowOptLabel(!showOptLabel);
  };

  return (
    <section className={`max-w-[500px] w-full flex items-center crm-input-with-select ${className ?? ""}`}>
      <input style={style} type="text" placeholder={placeholder ?? ""} className={` py-2 px-3 w-full `} />

      <div className="relative">
        <select onClick={() => handleClickDropdown()} ref={selectRef} className="crm-input-with-select-dropdown py-2 px-3" name="" id="">
          {optList.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        <ul className={`absolute text-white text-[14px] ${showOptLabel ? "block" : "hidden"} `}>
          {optList.map((opt) => (
            <li
              onClick={() => {
                selectRef.current.value = opt.value;
                setShowOptLabel(!showOptLabel);
              }}
              key={opt.value}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
