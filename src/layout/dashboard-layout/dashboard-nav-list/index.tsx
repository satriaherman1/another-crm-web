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
} from "@src/components/Icon";
import { NavLink } from "react-router-dom";

interface IDashboardNavListProps {
  isMinimize: boolean;
}

export default function DashboardNavList(props: IDashboardNavListProps) {
  const { isMinimize } = props;

  return (
    <ul className="mt-3 ">
      <li className="py-4">
        <NavLink to="/dashboard" className="flex">
          <MenuIcon className={`${isMinimize && "mx-auto"}`} />
          {!isMinimize && <p className="ml-3">Dashboard</p>}
        </NavLink>
      </li>
      <li className="py-4">
        <NavLink to="/dashboard" className="flex">
          <UserProfileIcon className={`${isMinimize && "mx-auto"}`} fill="#98A5CD" />
          {!isMinimize && <p className="ml-3">Account</p>}
        </NavLink>
      </li>
      <li className="py-4">
        <NavLink to="/dashboard" className="flex">
          <UserGroupIcon className={`${isMinimize && "mx-auto"}`} />
          {!isMinimize && <p className="ml-3">Contact</p>}
        </NavLink>
      </li>
      <li className="py-4">
        <NavLink to="/dashboard" className="flex">
          <TicketIcon className={`${isMinimize && "mx-auto"}`} />
          {!isMinimize && <p className="ml-3">Invited User</p>}
        </NavLink>
      </li>
      <li className="py-4">
        <NavLink to="/dashboard" className="flex">
          <PriceTagIcon className={`${isMinimize && "mx-auto"}`} />
          {!isMinimize && <p className="ml-3">Opportunities</p>}
        </NavLink>
      </li>
      <li className="py-4">
        <NavLink to="/dashboard" className="flex">
          <CallIcon className={`${isMinimize && "mx-auto"}`} />
          {!isMinimize && <p className="ml-3">Calls</p>}
        </NavLink>
      </li>
      <li className="py-4">
        <NavLink to="/dashboard" className="flex">
          <Note2Icon className={`${isMinimize && "mx-auto"}`} />
          {!isMinimize && <p className="ml-3">Sequences</p>}
        </NavLink>
      </li>
      <li className="py-4">
        <NavLink to="/dashboard" className="flex">
          <Calendar2Icon className={`${isMinimize && "mx-auto"}`} />
          {!isMinimize && <p className="ml-3">Schedules</p>}
        </NavLink>
      </li>
      <li className="py-4">
        <NavLink to="/dashboard" className="flex">
          <ActivityIcon className={`${isMinimize && "mx-auto"}`} />
          {!isMinimize && <p className="ml-3">Leads</p>}
        </NavLink>
      </li>
      <li className="py-4">
        <NavLink to="/dashboard" className="flex">
          <NoteIcon className={`${isMinimize && "mx-auto"}`} />
          {!isMinimize && <p className="ml-3">Task</p>}
        </NavLink>
      </li>
      <li className="py-4">
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
