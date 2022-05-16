import { useRef, useState } from "react";
import "./styles.scss";

export default function Dropdown(props: ICrmDropdown) {
  const { className, optList, onClick, variant, onChange, paddingClassName, id, name, borderVariantClass, placeholder } = props;
  const [showOptLabel, setShowOptLabel] = useState<boolean>(false);
  const selectRef = useRef<HTMLSelectElement>(null);

  let dropdownVariantClass;

  const handleClickDropdown = () => {
    setShowOptLabel(!showOptLabel);
  };

  switch (variant) {
    case "outlined":
      dropdownVariantClass = "crm-dropdown-outlined";
      break;
  }

  return (
    <div className={`relative crm-dropdown max-w-[500px] ${className ?? ""}`}>
      <select id={id ?? ""} name={name ?? ""} onClick={() => handleClickDropdown()} ref={selectRef} className={`${dropdownVariantClass} ${borderVariantClass ?? "base-border"}  py-2 pl-3 pr-[30px]`}>
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
              if (selectRef.current && selectRef.current.value) {
                selectRef.current.value = opt.value;
              }
              setShowOptLabel(!showOptLabel);
            }}
            key={opt.value}
          >
            {opt.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
