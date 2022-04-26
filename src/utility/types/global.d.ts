declare interface ICrmInput {
  type: "text" | "email" | "password" | "url" | "number";
  className?: string;
  placeholder?: string;
  icon?: any;
  style?: any;
}
declare interface ICrmButton {
  variant: "primary" | "secondary";
  type?: "button" | "submit";
  className?: string;
  children: any;
  onClick?: (val?: any) => any;
}

declare interface ICrmColumns {
  field: string;
  display: boolean;
}
declare interface ICrmRows {
  id?: any;

  value: ICrmRowsValue[];
}

interface ICrmRowsValue {
  field: string;
  value: React.ReactElement | string;
}
