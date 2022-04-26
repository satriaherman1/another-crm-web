import { LogoFullWhite } from "@src/config/pathImage";
import { HamburgerMenuIcon } from "@src/components/common/Icon";
import DashboardNavList from "./dashboard-nav-list";

import { useState } from "react";
import DashboardHeader from "./dashboard-header";
interface IDashboardLayoutProps {
  children: any;
}

export default function DashboardLayout(props: IDashboardLayoutProps) {
  const { children } = props;
  const [isMinimize, setIsMinimize] = useState<boolean>(false);

  return (
    <div className="flex h-full  bg-crm-dark pr-5">
      <section className={`sidebar overflow-scroll duration-200 py-8 px-4 bg-crm-dark-300  max-w-[260px] text-crm-mutted-blue h-full ${isMinimize ? "w-[90px]" : "w-full"}`}>
        <div className="flex justify-between">
          {!isMinimize && <img src={LogoFullWhite} alt="" width={170} />}

          <button className={`bg-none border-0 ${isMinimize && "ml-[20px]"}`} onClick={() => setIsMinimize(!isMinimize)}>
            <HamburgerMenuIcon />
          </button>
        </div>

        {!isMinimize && <p className="text-crm-mutted-blue uppercase mt-8 pl-3">Menu</p>}

        <DashboardNavList isMinimize={isMinimize} />
      </section>

      <section className="crm-dashboard-content ml-8 w-full overflow-y-scroll">
        <DashboardHeader />
        {children}
      </section>
    </div>
  );
}
