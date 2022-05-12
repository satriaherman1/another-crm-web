export default function Button(props: ICrmButton) {
  const { variant, children, className, onClick, paddingClassName } = props;

  let crmVariantBtnClass;

  switch (variant) {
    case "primary":
      crmVariantBtnClass = "bg-crm-primary text-crm-dark-400";
      break;
    case "secondary":
      crmVariantBtnClass = "bg-crm-secondary";
      break;
    case "blue":
      crmVariantBtnClass = "bg-blue-500";
      break;
  }

  return (
    <button onClick={onClick} className={`${crmVariantBtnClass} ${className ?? ""} ${paddingClassName ? paddingClassName : "px-8 py-3"}  rounded-lg font-semibold crm-button max-w-[500px]`}>
      {children}
    </button>
  );
}
