import { LogoFullWhite, StarIcon } from "@src/config/pathImage";
import { NavLink } from "react-router-dom";
import {
  ActivityIcon,
  Calendar2Icon,
  CallIcon,
  LogoutIcon,
  MailIcon,
  MenuIcon,
  Note2Icon,
  NoteIcon,
  NotificationIcon,
  PriceTagIcon,
  Setting5Icon,
  SettingIcon,
  TicketIcon,
  UserGroupIcon,
  UserProfileIcon,
} from "../../components/Icon";

interface IDashboardLayoutProps {
  children: any;
}

export default function DashboardLayout(props: IDashboardLayoutProps) {
  const { children } = props;
  return (
    <div className="flex h-full  bg-crm-dark">
      <section className="sidebar overflow-scroll py-8 px-4 bg-crm-dark-300 md:w-[20%] text-crm-mutted-blue h-full">
        <img src={LogoFullWhite} alt="" width={200} />

        <p className="text-crm-mutted-blue uppercase mt-8 pl-3">Menu</p>

        <ul className="mt-3 pl-3">
          <li className="py-4">
            <NavLink to="/dashboard" className="flex">
              <MenuIcon />
              <p className="ml-3">Dashboard</p>
            </NavLink>
          </li>
          <li className="py-4">
            <NavLink to="/dashboard" className="flex">
              <UserProfileIcon fill="#98A5CD" />
              <p className="ml-3">Account</p>
            </NavLink>
          </li>
          <li className="py-4">
            <NavLink to="/dashboard" className="flex">
              <UserGroupIcon />
              <p className="ml-3">Contact</p>
            </NavLink>
          </li>
          <li className="py-4">
            <NavLink to="/dashboard" className="flex">
              <TicketIcon />
              <p className="ml-3">Invited User</p>
            </NavLink>
          </li>
          <li className="py-4">
            <NavLink to="/dashboard" className="flex">
              <PriceTagIcon />
              <p className="ml-3">Opportunities</p>
            </NavLink>
          </li>
          <li className="py-4">
            <NavLink to="/dashboard" className="flex">
              <CallIcon />
              <p className="ml-3">Calls</p>
            </NavLink>
          </li>
          <li className="py-4">
            <NavLink to="/dashboard" className="flex">
              <Note2Icon />
              <p className="ml-3">Sequences</p>
            </NavLink>
          </li>
          <li className="py-4">
            <NavLink to="/dashboard" className="flex">
              <Calendar2Icon />
              <p className="ml-3">Schedules</p>
            </NavLink>
          </li>
          <li className="py-4">
            <NavLink to="/dashboard" className="flex">
              <ActivityIcon />
              <p className="ml-3">Leads</p>
            </NavLink>
          </li>
          <li className="py-4">
            <NavLink to="/dashboard" className="flex">
              <NoteIcon />
              <p className="ml-3">Task</p>
            </NavLink>
          </li>
          <li className="py-4">
            <NavLink to="/dashboard" className="flex">
              <MailIcon fill="#98A5CD" />
              <p className="ml-3">Gmail</p>
            </NavLink>
          </li>

          <li className="py-4 mt-10">
            <NavLink to="/dashboard" className="flex">
              <SettingIcon fill="#98A5CD" />
              <p className="ml-3 text-white">Settings</p>
            </NavLink>
          </li>
          <li className="py-4 ">
            <NavLink to="/dashboard" className="flex">
              <LogoutIcon />
              <p className="ml-3 text-crm-red">Logout</p>
            </NavLink>
          </li>
        </ul>
      </section>
      <section className="crm-dashboard-content ml-8 w-full">
        <div className="dashboard-head-layout  bg-crm-dark-300 flex items-center py-7 px-6 mt-4 mr-5 rounded text-white">
          <h1 className="font-semibold text-[24px] w-[fit-content]">Dashboard</h1>
          <div className="divider h-[30px] w-[2px] bg-gray-700 mx-3"></div>
          <p>Trial Days Left :8 </p>

          <div className="upgrade-box pb-1 pt-2 px-3 h-[fit-content] bg-[#282C38] flex items-center ml-2 rounded-md">
            <img src={StarIcon} width={20} alt="" className="-mt-1" />
            <p className="uppercase text-crm-yellow ml-2 h-[fit-content] font-semibold">Upgrade billing plan</p>
          </div>

          <div className="ml-auto flex">
            <div className="divider h-[30px] w-[2px] bg-gray-700 mx-3"></div>

            <NotificationIcon />
            <Setting5Icon className="ml-3" />
          </div>
        </div>
        {children}
      </section>
    </div>
  );
}
