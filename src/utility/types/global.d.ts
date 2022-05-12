declare interface ICrmInput {
  id?: string;
  name?: any;
  type: "text" | "email" | "password" | "url" | "number";
  className?: string;
  placeholder?: string;
  icon?: any;
  style?: any;
  variant?: "crm-gray" | "crm-primary";
  value?: any;
}
declare interface ICrmTextarea {
  id?: string;
  name?: any;
  className?: string;
  placeholder?: string;
  icon?: any;
  style?: any;
  variant?: "crm-gray" | "crm-primary";
  value?: any;
  rows?: number;
}
declare interface ICrmInputWithSelect {
  className?: string;
  placeholder?: string;

  style?: any;
  variant?: "crm-gray" | "crm-primary";
}

declare interface ICrmDatatable {
  className?: string;
  pagination?: boolean;
  data: any[];
  sortIcon?: React.ReactNode;
  selectableRows?: boolean;
  columns: ICrmDatatableColumn[];
}

declare interface ICrmDatatableColumn {
  id: number;
  name: string;
  selector: (row: any) => any;
  sortable: boolean;
  reorder: boolean;
}
declare interface ICrmButton {
  variant: "primary" | "secondary" | "blue";
  type?: "button" | "submit";
  className?: string;
  children: any;
  onClick?: (val?: any) => any;
  paddingClassName?: string;
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
