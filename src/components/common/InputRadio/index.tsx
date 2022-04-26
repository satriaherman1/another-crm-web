import "./styles.scss";

interface ICrmRadioProps {
  label?: string;
  className?: string;
  name?: string;
}

export default function InputRadio(props: ICrmRadioProps) {
  const { label, className, name } = props;
  return (
    <label className={`crm-radio-container ${className ?? ""}`}>
      <span>{label}</span>
      <input type="radio" name={name} />
      <span className="checkmark"></span>
    </label>
  );
}
