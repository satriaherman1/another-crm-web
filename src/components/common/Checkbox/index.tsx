import "./styles.scss";

interface ICrmCheckbox {
  label?: string;
  className?: string;
  checked?: boolean;
  onClick?: (val: any) => any;
  onChange?: (val: any) => any;
  name?: string;
  id?: any;
}

export default function Checkbox(props: ICrmCheckbox) {
  const { label, className, checked, onChange, name, id, onClick } = props;
  return (
    <label className={`${className ?? ""} checkbox-container`}>
      <input onClick={onClick} id={id ?? ""} name={name ?? ""} onChange={onChange} checked={checked} type="checkbox" className="custom-checkbox" />
      <span className="checkmark"></span>
      <p className="mb-0">{label}</p>
    </label>
  );
}
