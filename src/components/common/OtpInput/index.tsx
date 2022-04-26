import OtpInput from "react-otp-input";

import "./styles.scss";

interface CrmOtpInput {
  value: string;
  handleChange: (state: string) => any;
  className?: string;
}

export default function CrmOtpInput(props: CrmOtpInput) {
  const { value, handleChange, className } = props;
  return <OtpInput className={`crm-otp-input ${className ?? ""}`} value={value} onChange={handleChange} numInputs={4} separator={<span> - </span>} />;
}
