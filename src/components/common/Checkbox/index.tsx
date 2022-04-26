import "./styles.scss";

interface ICrmCheckbox {
  label?: string;
  className?: string;
}

export default function Checkbox(props: ICrmCheckbox) {
  const { label, className } = props;
  return (
    <label className={`${className} checkbox-container`}>
      <input type="checkbox" className="custom-checkbox" />
      <span className="checkmark"></span>
      <p className="mb-0">{label}</p>
    </label>
  );
}
