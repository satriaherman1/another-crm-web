import "./styles.scss";

export default function MiniInput(props: ICrmInput) {
  const { type, placeholder, icon, className, style, variant } = props;

  let crmTypeClass;
  let crmVariantClass;

  switch (type) {
    case "text":
      crmTypeClass = "crm-mini-input-text";
      break;
    case "password":
      crmTypeClass = "crm-mini-input-password";
      break;
  }

  switch (variant) {
    case "crm-gray":
      crmVariantClass = "crm-mini-input-gray";
      break;

    case "crm-primary":
      crmVariantClass = "crm-mini-input-primary";
      break;
  }

  const inputStyles = {
    backgroundImage: `url(${icon})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "3% 47%",
  };

  return (
    <input
      style={style ? { ...style, ...inputStyles } : inputStyles}
      type={type}
      placeholder={placeholder ?? ""}
      className={`${className ?? ""} ${!icon ? "px-3" : " pl-[35px] pr-[7px] "} py-[8px]  ${crmTypeClass} ${crmVariantClass} crm-mini-input  max-w-[500px] w-full`}
    />
  );
}
