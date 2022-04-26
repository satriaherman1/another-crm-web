import {
  ActivityIcon,
  Calendar2Icon,
  CallIcon,
  LogoutIcon,
  MailIcon,
  MenuIcon,
  Note2Icon,
  NoteIcon,
  PriceTagIcon,
  SettingIcon,
  TicketIcon,
  UserGroupIcon,
  UserProfileIcon,
} from "@src/components/common/Icon";
import { useEffect, useState } from "react";
import { NavLink, useRoutes } from "react-router-dom";

interface IDashboardNavListProps {
  isMinimize: boolean;
}

export default function DashboardNavList(props: IDashboardNavListProps) {
  const { isMinimize } = props;

  const [activeSidebarList, setActiveSidebarList] = useState<string>("");

  useEffect(() => {
    const pathName = window.location.pathname;
    const urlPath = pathName.slice(1, pathName.length);
    setActiveSidebarList(urlPath);
  }, []);

  return (
    <ul className="mt-3 ">
      <li className={`py-4 ${activeSidebarList === "dashboard" ? "navlist-active" : ""} `}>
        <NavLink to="/dashboard" className="flex">
          <MenuIcon fill={activeSidebarList === "dashboard" ? "#0EC8CE" : ""} className={`${isMinimize && "mx-auto"}`} />
          {!isMinimize && <p className="ml-3">Dashboard</p>}
        </NavLink>
      </li>
      <li className={`py-4 ${activeSidebarList === "account" ? "navlist-active" : ""}`}>
        <NavLink to="/dashboard" className="flex">
          <UserProfileIcon className={`${isMinimize && "mx-auto"}`} fill="#98A5CD" />
          {!isMinimize && <p className="ml-3">Account</p>}
        </NavLink>
      </li>
      <li className={`py-4 ${activeSidebarList === "contact" ? "navlist-active" : ""}`}>
        <NavLink to="/dashboard" className="flex">
          <UserGroupIcon className={`${isMinimize && "mx-auto"}`} />
          {!isMinimize && <p className="ml-3">Contact</p>}
        </NavLink>
      </li>
      <li className={`py-4 ${activeSidebarList === "invited-user" ? "navlist-active" : ""}`}>
        <NavLink to="/dashboard" className="flex">
          <TicketIcon className={`${isMinimize && "mx-auto"}`} />
          {!isMinimize && <p className="ml-3">Invited User</p>}
        </NavLink>
      </li>
      <li className={`py-4 ${activeSidebarList === "opportunities" ? "navlist-active" : ""}`}>
        <NavLink to="/dashboard" className="flex">
          <PriceTagIcon className={`${isMinimize && "mx-auto"}`} />
          {!isMinimize && <p className="ml-3">Opportunities</p>}
        </NavLink>
      </li>
      <li className={`py-4 ${activeSidebarList === "calls" ? "navlist-active" : ""}`}>
        <NavLink to="/dashboard" className="flex">
          <CallIcon className={`${isMinimize && "mx-auto"}`} />
          {!isMinimize && <p className="ml-3">Calls</p>}
        </NavLink>
      </li>
      <li className={`py-4 ${activeSidebarList === "sequences" ? "navlist-active" : ""}`}>
        <NavLink to="/dashboard" className="flex">
          <Note2Icon className={`${isMinimize && "mx-auto"}`} />
          {!isMinimize && <p className="ml-3">Sequences</p>}
        </NavLink>
      </li>
      <li className={`py-4 ${activeSidebarList === "schedules" ? "navlist-active" : ""}`}>
        <NavLink to="/dashboard" className="flex">
          <Calendar2Icon className={`${isMinimize && "mx-auto"}`} />
          {!isMinimize && <p className="ml-3">Schedules</p>}
        </NavLink>
      </li>
      <li className={`py-4 ${activeSidebarList === "leads" ? "navlist-active" : ""}`}>
        <NavLink to="/dashboard" className="flex">
          <ActivityIcon className={`${isMinimize && "mx-auto"}`} />
          {!isMinimize && <p className="ml-3">Leads</p>}
        </NavLink>
      </li>
      <li className={`py-4 ${activeSidebarList === "task" ? "navlist-active" : ""}`}>
        <NavLink to="/dashboard" className="flex">
          <NoteIcon className={`${isMinimize && "mx-auto"}`} />
          {!isMinimize && <p className="ml-3">Task</p>}
        </NavLink>
      </li>
      <li className={`py-4 ${activeSidebarList === "gmail" ? "navlist-active" : ""}`}>
        <NavLink to="/dashboard" className="flex">
          <MailIcon className={`${isMinimize && "mx-auto"}`} fill="#98A5CD" />
          {!isMinimize && <p className="ml-3">Gmail</p>}
        </NavLink>
      </li>

      <li className="py-4 mt-10">
        <NavLink to="/dashboard" className="flex">
          <SettingIcon className={`${isMinimize && "mx-auto"}`} fill="#98A5CD" />
          {!isMinimize && <p className="ml-3 text-white">Settings</p>}
        </NavLink>
      </li>
      <li className="py-4 ">
        <NavLink to="/dashboard" className="flex">
          <LogoutIcon className={`${isMinimize && "mx-auto"}`} />
          {!isMinimize && <p className="ml-3 text-crm-red">Logout</p>}
        </NavLink>
      </li>
    </ul>
  );
}
