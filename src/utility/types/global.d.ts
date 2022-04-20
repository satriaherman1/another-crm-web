declare interface ICrmInput {
  type: "text" | "email" | "password" | "url" | "number";
  className?: string;
  placeholder?: string;
}
declare interface ICrmButton {
  variant: "primary" | "secondary";
  type?: "button" | "submit";
  className?: string;
  children: any;
}
