import { LogoFullWhite } from "@src/config/pathImage";
import { NavLink } from "react-router-dom";
import { ActivityIcon, UserGroupIcon, UserProfileIcon } from "../../components/Icon";

interface IDashboardLayoutProps {
  children: any;
}

export default function DashboardLayout(props: IDashboardLayoutProps) {
  const { children } = props;
  return (
    <div className="flex h-full bg-crm-dark">
      <section className="sidebar py-8 px-4 bg-crm-dark-300 md:w-[20%] text-crm-mutted-blue h-full">
        <img src={LogoFullWhite} alt="" width={200} />

        <p className="text-crm-mutted-blue uppercase mt-8 pl-3">Menu</p>
        <nav className="mt-3 pl-3">
          <div className="py-3">
            <NavLink to="/dashboard" className="flex">
              <ActivityIcon />
              <p className="ml-3">Dashboard</p>
            </NavLink>
          </div>
          <div className="py-3">
            <NavLink to="/dashboard" className="flex">
              <UserProfileIcon fill="#98A5CD" />
              <p className="ml-3">Account</p>
            </NavLink>
          </div>
          <div className="py-3">
            <NavLink to="/dashboard" className="flex">
              <UserGroupIcon />
              <p className="ml-3">Contact</p>
            </NavLink>
          </div>
          <div className="py-3">
            <NavLink to="/dashboard" className="flex">
              <ActivityIcon />
              <p className="ml-3">Dashboard</p>
            </NavLink>
          </div>
        </nav>
      </section>
      <section className="crm-dashboard-content">{children}</section>
    </div>
  );
}
