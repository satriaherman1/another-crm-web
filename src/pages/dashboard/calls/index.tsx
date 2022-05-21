import Dropdown from "@src/components/common/Dropdown";
import { ClocklIcon } from "@src/components/common/Icon";
import DashboardLayout from "@src/layout/dashboard-layout";

export default function Calls() {
  const callsFilter = [
    {
      label: "Log Call & Complete",
      value: "Log Call & Complete",
    },
  ];

  return (
    <DashboardLayout>
      <div className="bg-crm-dark-300 my-5 py-6 px-8 rounded-md text-white">
        Calls
        <section className="flex gap-x-5 my-4">
          <div className="py-2 px-3 rounded-md bg-crm-gray-200 border border-crm-gray-300 w-[fit-content] flex items-center">
            <ClocklIcon />
          </div>
          <Dropdown className="bg-crm-gray-200 rounded" borderVariantClass="border border-crm-gray-300" variant="outlined" optList={callsFilter} />
        </section>
      </div>
    </DashboardLayout>
  );
}
