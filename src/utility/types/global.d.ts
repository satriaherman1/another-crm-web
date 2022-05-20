declare interface ICrmInput {
  id?: string;
  name?: any;
  type: "text" | "email" | "password" | "url" | "number" | "search";
  className?: string;
  placeholder?: string;
  icon?: any;
  style?: any;
  variant?: "crm-gray" | "crm-primary" | "crm-transparent";
  value?: any;
  isNoMaxWidth?: boolean;
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
  variant: "primary" | "secondary" | "blue" | "dark" | "yellow";
  type?: "button" | "submit";
  className?: string;
  children: any;
  onClick?: (val?: any) => any;
  paddingClassName?: string;
}
declare interface ICrmDropdown {
  variant: "primary" | "outlined" | "blue";
  id?: any;
  name?: any;
  optList: dropDownOptList[];
  placeholder?: string;
  className?: string;
  onClick?: (val?: any) => any;
  onChange?: (val?: any) => any;
  paddingClassName?: string;
  borderVariantClass?: string;
}

interface dropDownOptList {
  value: any;
  label: any;
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

declare interface ITaskTableColumn {
  difficulty: string;
  content: string;
}
declare interface IInitialNameTableColumn {
  fullName: string;
}
declare interface INameTableColumn {
  name: string;
  position: string;
}
declare interface IDueDateTableColumn {
  dueDate: string;
}

declare interface ITabFilter {
  tabButton: ITabFilterButton[];
  className?: string;
}

declare interface ITabFilterButton {
  onClick?: () => any;
  activeIndicator: string;
  key: string;
}
