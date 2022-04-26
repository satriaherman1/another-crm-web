import { NotificationIcon, Setting5Icon } from "@src/components/common/Icon";
import { StarIcon } from "@src/config/pathImage";
import { NavLink } from "react-router-dom";

export default function DashboardHeader() {
  return (
    <div className="dashboard-head-layout  bg-crm-dark-300 flex items-center py-7 px-6 mt-4  rounded text-white">
      <h1 className="font-semibold text-[24px] w-[fit-content]">Dashboard</h1>
      <div className="divider h-[30px] w-[2px] bg-gray-700 mx-3"></div>
      <p>Trial Days Left :8 </p>

      <NavLink to="/order-summary">
        <div className="upgrade-box pb-1 pt-2 px-3 h-[fit-content] bg-[#282C38] flex items-center ml-2 rounded-md">
          <img src={StarIcon} width={20} alt="" className="-mt-1" />
          <p className="uppercase text-crm-yellow ml-2 h-[fit-content] font-semibold">Upgrade billing plan</p>
        </div>
      </NavLink>

      <div className="ml-auto flex">
        <div className="divider h-[30px] w-[2px] bg-gray-700 mx-3"></div>
        <NotificationIcon />
        <Setting5Icon className="ml-3" />
      </div>
    </div>
  );
}
