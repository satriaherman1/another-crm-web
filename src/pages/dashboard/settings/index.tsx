import FilterTab from "@src/components/common/FilterTab";
import SettingsManagePeople from "@src/components/pages/dashboard/settings/manage-people";
import SettingsProperty from "@src/components/pages/dashboard/settings/property";
import DashboardLayout from "@src/layout/dashboard-layout";
import React, { useEffect, useState } from "react";

export default function Settings() {
  const [activeFilterTab, setActiveFilterTab] = useState<string>("property");
  const [settingsContent, setSettingsContent] = useState<React.ReactElement>();

  const filterList: ITabFilterButton[] = [
    {
      key: "property",
      activeIndicator: activeFilterTab,
      onClick: () => setActiveFilterTab("property"),
    },
    {
      key: "settings",
      activeIndicator: activeFilterTab,
      onClick: () => setActiveFilterTab("settings"),
    },
    {
      key: "voice settings",
      activeIndicator: activeFilterTab,
      onClick: () => setActiveFilterTab("voice settings"),
    },
    {
      key: "custom status",
      activeIndicator: activeFilterTab,
      onClick: () => setActiveFilterTab("custom status"),
    },
    {
      key: "manage people",
      activeIndicator: activeFilterTab,
      onClick: () => setActiveFilterTab("manage people"),
    },
  ];

  useEffect(() => {
    switch (activeFilterTab) {
      case "manage people":
        setSettingsContent(<SettingsManagePeople />);
        break;
      case "property":
        setSettingsContent(<SettingsProperty />);
        break;
    }
  }, [activeFilterTab]);

  return (
    <DashboardLayout>
      <div className="py-4 px-5 bg-crm-dark-300 mt-4">
        <FilterTab tabButton={filterList} className="gap-x-5" />

        {settingsContent}
      </div>
    </DashboardLayout>
  );
}
