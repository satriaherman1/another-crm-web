export default function Button(props: ICrmButton) {
  const { variant, children, className, onClick } = props;

  let crmVariantBtnClass;

  switch (variant) {
    case "primary":
      crmVariantBtnClass = "bg-crm-primary text-crm-dark-400";
      break;
    case "secondary":
      crmVariantBtnClass = "bg-crm-secondary";
      break;
  }

  return (
    <button onClick={onClick} className={`${crmVariantBtnClass} ${className ?? ""} px-6 py-4 rounded-lg font-semibold crm-button max-w-[500px]`}>
      {children}
    </button>
  );
}
