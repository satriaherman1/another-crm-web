import FilterTab from "@src/components/common/FilterTab";
import Input from "@src/components/common/Input";
import MiniInput from "@src/components/common/MiniInput";
import useLocalData from "@src/utility/hooks/useLocalData";
import { useState } from "react";

export default function PluginTask() {
  const [activeFilterTab, setActiveFilterTab] = useState<string>("task");
  const filterTabList: ITabFilterButton[] = [
    {
      activeIndicator: activeFilterTab,
      key: "account",
      onClick: () => setActiveFilterTab("account"),
    },
    {
      activeIndicator: activeFilterTab,
      key: "contacts",
      onClick: () => setActiveFilterTab("contacts"),
    },
    {
      activeIndicator: activeFilterTab,
      key: "opportunities",
      onClick: () => setActiveFilterTab("opportunities"),
    },
    {
      activeIndicator: activeFilterTab,
      key: "task",
      onClick: () => setActiveFilterTab("task"),
    },
    {
      activeIndicator: activeFilterTab,
      key: "activity",
      onClick: () => setActiveFilterTab("activity"),
    },
  ];

  const {
    store: { pluginModal },
  } = useLocalData();

  return (
    <>
      <div className={`fixed text-white bg-crm-dark-300  top-1/2 z-10 rounded-md ${pluginModal ? "right-0" : "right-[-100vw]"}`}>
        <FilterTab tabButton={filterTabList} className="px-4" />

        <section className="flex items-center gap-x-5 py-5 border-y border-crm-gray-300  px-3">
          <span className="text-white">To</span>
          <MiniInput type="search" variant="crm-transparent" className="block" />
          <span className="flex text-crm-gray">
            CC <span className="ml-3">Bcc</span>
          </span>
        </section>
        <section className="flex items-center gap-x-5 py-5 border-y border-crm-gray-300  px-3">
          <label htmlFor="subject" className="whitespace-nowrap">
            Subject :
          </label>
          <input type="text" className="border-0 outline-0 bg-transparent w-[98%]" />
        </section>
      </div>

      {pluginModal && <div className="fixed top-0 w-[100vw] h-[100vh] opacity-50 bg-crm-dark"></div>}
    </>
  );
}