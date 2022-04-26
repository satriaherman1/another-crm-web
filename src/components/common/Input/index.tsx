import "./styles.scss";

export default function Input(props: ICrmInput) {
  const { type, placeholder, icon, className, style } = props;

  let crmTypeClass;

  switch (type) {
    case "text":
      crmTypeClass = "crm-input-text";
      break;
    case "password":
      crmTypeClass = "crm-input-password";
      break;
  }

  const inputStyles = {
    background: `url(${icon})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "3% 47%",
  };

  return (
    <input
      style={style ? { ...style, ...inputStyles } : inputStyles}
      type={type}
      placeholder={placeholder ?? ""}
      className={`${className ?? ""} ${!icon ? "px-5" : " pl-[48px] pr-[7px] "} py-[15px]  ${crmTypeClass} crm-input mt-3 max-w-[500px]`}
    />
  );
}
