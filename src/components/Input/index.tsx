import "./styles.scss";

export default function Input(props: ICrmInput) {
  const { type, placeholder } = props;

  let crmTypeClass;

  switch (type) {
    case "text":
      crmTypeClass = "crm-input-text";
      break;
    case "password":
      crmTypeClass = "crm-input-password";
      break;
  }

  return <input type={type} placeholder={placeholder ?? ""} className={`${crmTypeClass} crm-input mt-3 max-w-[500px]`} />;
}
