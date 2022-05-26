import "./styles.scss";

interface ICrmCheckbox {
  label?: string;
  className?: string;
  checked?: boolean;
  onChange?: (val: any) => any;
}

export default function Checkbox(props: ICrmCheckbox) {
  const { label, className, checked, onChange } = props;
  return (
    <label className={`${className ?? ""} checkbox-container`}>
      <input onChange={onChange} checked={checked} type="checkbox" className="custom-checkbox" />
      <span className="checkmark"></span>
      <p className="mb-0">{label}</p>
    </label>
  );
}
