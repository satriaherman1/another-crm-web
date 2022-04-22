import React, { ReactElement } from "react";

export interface IconProps {
  className?: string;
  fill?: string;
  width?: string;
  height?: string;
}

export function ActivityIcon(props: IconProps): ReactElement {
  const { className, fill, width, height } = props;
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className ?? ""}>
      <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#98A5CD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M7.33008 14.49L9.71008 11.4C10.0501 10.96 10.6801 10.88 11.1201 11.22L12.9501 12.66C13.3901 13 14.0201 12.92 14.3601 12.49L16.6701 9.51001"
        stroke={fill ? fill : "#98A5CD"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Calendar2Icon(props: IconProps): ReactElement {
  const { className, fill, width, height } = props;
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className ?? ""}>
      <path d="M8 2V5" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 2V5" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.5 9.09H20.5" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
        stroke={fill ? fill : "#98A5CD"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M11.9955 13.7H12.0045" stroke={fill ? fill : "#98A5CD"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.29431 13.7H8.30329" stroke={fill ? fill : "#98A5CD"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.29431 16.7H8.30329" stroke={fill ? fill : "#98A5CD"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CallIcon(props: IconProps): ReactElement {
  const { className, fill, width, height } = props;
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className ?? ""}>
      <path
        d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
        stroke={fill ? fill : "#98A5CD"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
      />
    </svg>
  );
}

export function UserProfileIcon(props: IconProps): ReactElement {
  const { className, fill, width, height } = props;
  return (
    <svg className={className ?? ""} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.1399 21.62C17.2599 21.88 16.2199 22 14.9999 22H8.99986C7.77986 22 6.73986 21.88 5.85986 21.62C6.07986 19.02 8.74986 16.97 11.9999 16.97C15.2499 16.97 17.9199 19.02 18.1399 21.62Z"
        stroke={fill ? fill : "#0EC8CE"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 2H9C4 2 2 4 2 9V15C2 18.78 3.14 20.85 5.86 21.62C6.08 19.02 8.75 16.97 12 16.97C15.25 16.97 17.92 19.02 18.14 21.62C20.86 20.85 22 18.78 22 15V9C22 4 20 2 15 2ZM12 14.17C10.02 14.17 8.42 12.56 8.42 10.58C8.42 8.60002 10.02 7 12 7C13.98 7 15.58 8.60002 15.58 10.58C15.58 12.56 13.98 14.17 12 14.17Z"
        stroke={fill ? fill : "#0EC8CE"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.5799 10.58C15.5799 12.56 13.9799 14.17 11.9999 14.17C10.0199 14.17 8.41992 12.56 8.41992 10.58C8.41992 8.60002 10.0199 7 11.9999 7C13.9799 7 15.5799 8.60002 15.5799 10.58Z"
        stroke={fill ? fill : "#0EC8CE"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function UserGroupIcon(props: IconProps): ReactElement {
  const { className, fill, width, height } = props;
  return (
    <svg className={className ?? ""} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.16006 10.87C9.06006 10.86 8.94006 10.86 8.83006 10.87C6.45006 10.79 4.56006 8.84 4.56006 6.44C4.56006 3.99 6.54006 2 9.00006 2C11.4501 2 13.4401 3.99 13.4401 6.44C13.4301 8.84 11.5401 10.79 9.16006 10.87Z"
        stroke={fill ? fill : "#98A5CD"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.4098 4C18.3498 4 19.9098 5.57 19.9098 7.5C19.9098 9.39 18.4098 10.93 16.5398 11C16.4598 10.99 16.3698 10.99 16.2798 11"
        stroke={fill ? fill : "#98A5CD"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.16021 14.56C1.74021 16.18 1.74021 18.82 4.16021 20.43C6.91021 22.27 11.4202 22.27 14.1702 20.43C16.5902 18.81 16.5902 16.17 14.1702 14.56C11.4302 12.73 6.92021 12.73 4.16021 14.56Z"
        stroke={fill ? fill : "#98A5CD"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.3398 20C19.0598 19.85 19.7398 19.56 20.2998 19.13C21.8598 17.96 21.8598 16.03 20.2998 14.86C19.7498 14.44 19.0798 14.16 18.3698 14"
        stroke={fill ? fill : "#98A5CD"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TicketIcon(props: IconProps): ReactElement {
  const { className, fill, width, height } = props;
  return (
    <svg className={className ?? ""} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.5 12.5C19.5 11.12 20.62 10 22 10V9C22 5 21 4 17 4H7C3 4 2 5 2 9V9.5C3.38 9.5 4.5 10.62 4.5 12C4.5 13.38 3.38 14.5 2 14.5V15C2 19 3 20 7 20H17C21 20 22 19 22 15C20.62 15 19.5 13.88 19.5 12.5Z"
        stroke={fill ? fill : "#98A5CD"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10 4L10 20" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="5 5" />
    </svg>
  );
}

export function PriceTagIcon(props: IconProps): ReactElement {
  const { className, fill, width, height } = props;
  return (
    <svg className={className ?? ""} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.16989 15.3L8.69989 19.83C10.5599 21.69 13.5799 21.69 15.4499 19.83L19.8399 15.44C21.6999 13.58 21.6999 10.56 19.8399 8.69005L15.2999 4.17005C14.3499 3.22005 13.0399 2.71005 11.6999 2.78005L6.69989 3.02005C4.69989 3.11005 3.10989 4.70005 3.00989 6.69005L2.76989 11.69C2.70989 13.04 3.21989 14.35 4.16989 15.3Z"
        stroke={fill ? fill : "#98A5CD"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 12C10.8807 12 12 10.8808 12 9.50005C12 8.11933 10.8807 7.00005 9.5 7.00005C8.11929 7.00005 7 8.11933 7 9.50005C7 10.8808 8.11929 12 9.5 12Z"
        stroke={fill ? fill : "#98A5CD"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function NoteIcon(props: IconProps): ReactElement {
  const { className, fill, width, height } = props;
  return (
    <svg className={className ?? ""} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 8.25V18C20 21 18.21 22 16 22H8C5.79 22 4 21 4 18V8.25C4 5 5.79 4.25 8 4.25C8 4.87 8.24997 5.43 8.65997 5.84C9.06997 6.25 9.63 6.5 10.25 6.5H13.75C14.99 6.5 16 5.49 16 4.25C18.21 4.25 20 5 20 8.25Z"
        stroke={fill ? fill : "#98A5CD"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 4.25C16 5.49 14.99 6.5 13.75 6.5H10.25C9.63 6.5 9.06997 6.25 8.65997 5.84C8.24997 5.43 8 4.87 8 4.25C8 3.01 9.01 2 10.25 2H13.75C14.37 2 14.93 2.25 15.34 2.66C15.75 3.07 16 3.63 16 4.25Z"
        stroke={fill ? fill : "#98A5CD"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 13H12" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 17H16" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MenuIcon(props: IconProps): ReactElement {
  const { className, fill, width, height } = props;
  return (
    <svg className={className ?? ""} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 10H7C9 10 10 9 10 7V5C10 3 9 2 7 2H5C3 2 2 3 2 5V7C2 9 3 10 5 10Z" stroke="#98A5CD" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M17 10H19C21 10 22 9 22 7V5C22 3 21 2 19 2H17C15 2 14 3 14 5V7C14 9 15 10 17 10Z"
        stroke={fill ? fill : "#98A5CD"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 22H19C21 22 22 21 22 19V17C22 15 21 14 19 14H17C15 14 14 15 14 17V19C14 21 15 22 17 22Z"
        stroke={fill ? fill : "#98A5CD"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 22H7C9 22 10 21 10 19V17C10 15 9 14 7 14H5C3 14 2 15 2 17V19C2 21 3 22 5 22Z"
        stroke={fill ? fill : "#98A5CD"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Note2Icon(props: IconProps): ReactElement {
  const { className, fill, width, height } = props;
  return (
    <svg className={className ?? ""} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21.6602 10.44L20.6802 14.62C19.8402 18.23 18.1802 19.69 15.0602 19.39C14.5602 19.35 14.0202 19.26 13.4402 19.12L11.7602 18.72C7.59018 17.73 6.30018 15.67 7.28018 11.49L8.26018 7.29999C8.46018 6.44999 8.70018 5.70999 9.00018 5.09999C10.1702 2.67999 12.1602 2.02999 15.5002 2.81999L17.1702 3.20999C21.3602 4.18999 22.6402 6.25999 21.6602 10.44Z"
        stroke={fill ? fill : "#98A5CD"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.0599 19.39C14.4399 19.81 13.6599 20.16 12.7099 20.47L11.1299 20.99C7.15985 22.27 5.06985 21.2 3.77985 17.23L2.49985 13.28C1.21985 9.31001 2.27985 7.21001 6.24985 5.93001L7.82985 5.41001C8.23985 5.28001 8.62985 5.17001 8.99985 5.10001C8.69985 5.71001 8.45985 6.45001 8.25985 7.30001L7.27985 11.49C6.29985 15.67 7.58985 17.73 11.7599 18.72L13.4399 19.12C14.0199 19.26 14.5599 19.35 15.0599 19.39Z"
        stroke={fill ? fill : "#98A5CD"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12.6401 8.53L17.4901 9.76" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.6602 12.4L14.5602 13.14" stroke={fill ? fill : "#98A5CD"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SettingIcon(props: IconProps): ReactElement {
  const { className, fill, width, height } = props;
  return (
    <svg className={className ?? ""} width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.09082 9.10998V14.88C3.09082 17 3.09082 17 4.909 18.35L9.909 21.53C10.6635 22.01 11.8908 22.01 12.6363 21.53L17.6363 18.35C19.4545 17 19.4545 17 19.4545 14.89V9.10998C19.4545 6.99998 19.4545 6.99999 17.6363 5.64999L12.6363 2.46999C11.8908 1.98999 10.6635 1.98999 9.909 2.46999L4.909 5.64999C3.09082 6.99999 3.09082 6.99998 3.09082 9.10998Z"
        stroke={fill ? fill : "#98A5CD"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.2727 15C12.7789 15 14 13.6569 14 12C14 10.3431 12.7789 9 11.2727 9C9.76645 9 8.54541 10.3431 8.54541 12C8.54541 13.6569 9.76645 15 11.2727 15Z"
        stroke={fill ? fill : "#98A5CD"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LogoutIcon(props: IconProps): ReactElement {
  const { className, fill, width, height } = props;
  return (
    <svg className={className ?? ""} width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.9819 14.62L13.3092 12.06L10.9819 9.5" stroke={fill ? fill : "#EB5757"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 12.06H13.2455" stroke={fill ? fill : "#EB5757"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M11.2729 4C15.2911 4 18.5457 7 18.5457 12C18.5457 17 15.2911 20 11.2729 20"
        stroke={fill ? fill : "#EB5757"}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MailIcon(props: IconProps): ReactElement {
  const { className, fill, width, height } = props;
  return (
    <svg className={className ?? ""} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
        stroke={fill ? fill : "white"}
        strokeOpacity="0.72"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="white" strokeOpacity="0.72" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function NotificationIcon(props: IconProps): ReactElement {
  const { className, fill, width, height } = props;
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className ?? ""}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.6143 17.8476C18.2535 17.8476 20.8623 17.1242 21.1143 14.2205C21.1143 11.3188 19.2954 11.5054 19.2954 7.94511C19.2954 5.16414 16.6595 2 12.6143 2C8.56903 2 5.93311 5.16414 5.93311 7.94511C5.93311 11.5054 4.11426 11.3188 4.11426 14.2205C4.36721 17.1352 6.97603 17.8476 12.6143 17.8476Z"
        stroke={fill ? fill : "white"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M15.0031 20.8572C13.639 22.3719 11.511 22.3899 10.1338 20.8572" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Setting5Icon(props: IconProps): ReactElement {
  const { className, fill, width, height } = props;
  return (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className ?? ""}>
      <path d="M19.6143 22V11" stroke={fill ? fill : "white"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19.6143 7V2" stroke={fill ? fill : "white"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.6143 22V17" stroke={fill ? fill : "white"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.6143 13V2" stroke={fill ? fill : "white"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.61426 22V11" stroke={fill ? fill : "white"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.61426 7V2" stroke={fill ? fill : "white"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.61426 11H7.61426" stroke={fill ? fill : "white"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17.6143 11H21.6143" stroke={fill ? fill : "white"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.6143 13H14.6143" stroke={fill ? fill : "white"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HamburgerMenuIcon(props: IconProps): ReactElement {
  const { className, fill, width, height } = props;
  return (
    <svg className={className ?? ""} width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.54639 5.83331H16.1828" stroke={fill ? fill : "white"} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M2.54639 10H16.1828" stroke={fill ? fill : "white"} strokeWidth="1.2" strokeLinecap="round" />
      <path d="M2.54639 14.1667H16.1828" stroke={fill ? fill : "white"} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
