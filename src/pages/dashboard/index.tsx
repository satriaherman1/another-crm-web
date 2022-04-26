import DashboardLayout from "@src/layout/dashboard-layout";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { FilterIcon } from "@src/components/common/Icon";
import faker from "@faker-js/faker";
import "./styles.scss";
import DashboardActivityList from "@src/components/pages/dashboard/activity-list";
import Table from "@src/components/common/Table";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    // title: {
    //   display: true,
    //   text: "Chart.js Line Chart",
    // },
  },
};

const labels = ["Today", "Fri Apr 15", "Sat Apr 16", "Sun Apr 17", "Mon Apr 18", "Tue Apr 19", "Wed Apr 20", "Thu Apr 21"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: -1, max: 1.5 })),
      borderColor: "#0EC8CE",
      backgroundColor: "#0EC8CE",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: -1, max: 1.5 })),
      borderColor: "#ffffff",
      backgroundColor: "#ffffff",
    },
  ],
};

const ImageColumnTable = () => {
  return <img src="/src/assets/img/avatar-example.png" width="35px" height="35px" className="rounded-full" />;
};

const columns: ICrmColumns[] = [
  {
    field: "image",
    display: false,
  },
  {
    field: "name",
    display: false,
  },
  {
    field: "task",
    display: false,
  },
];

const rows: ICrmRows[] = [
  {
    id: 1,
    value: [
      {
        field: "image",
        value: <ImageColumnTable />,
      },
      {
        field: "name",
        value: "Dimast ariyanto",
      },
    ],
  },
  {
    id: 2,
    value: [
      {
        field: "image",
        value: <ImageColumnTable />,
      },
      {
        field: "name",
        value: "Dimast ariyanto",
      },
    ],
  },
];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<string>("task");
  return (
    <DashboardLayout>
      <div className="flex flex-col md:flex-row flex-wrap mt-8 w-full gap-5">
        <section className="dashboard-statistic  md:basis-[55%] bg-crm-dark-300 text-white w-full px-5 py-3 rounded-md">
          <div className="statistic-tab flex text-crm-gray-600">
            <button onClick={() => setActiveTab("task")} className={`bg-none py-3 px-3 ${activeTab === "task" && "active"}`}>
              Task
            </button>
            <button onClick={() => setActiveTab("email")} className={`bg-none py-3 px-3  ml-5 ${activeTab === "email" && "active"}`}>
              Emails
            </button>
          </div>
          <p className="text-white mt-7 font-semibold">Upcoming Task</p>
          <p className="text-white mt-7 text-[14px]">
            This Week : <span className="ml-3 text-crm-gray-600">Apr 11 - Apr 17</span>
          </p>
          <div className="statistic-summary flex mt-4 mb-8">
            <span className="flex pr-5 border-r border-[#616161]">
              <h4 className="text-white font-semibold text-[30px]">12</h4>
              <p className="text-crm-gray-600 ml-3">Completed</p>
            </span>
            <span className="flex pr-5 border-r border-[#616161] pl-5">
              <h4 className="text-white font-semibold text-[30px]">0%</h4>
              <p className="text-crm-gray-600 ml-3">Emails</p>
            </span>
            <span className="flex pr-5 border-r border-[#616161] pl-5">
              <h4 className="text-white font-semibold text-[30px]">100%</h4>
              <p className="text-crm-gray-600 ml-3">Calls</p>
            </span>
            <span className="flex pr-5 pl-5">
              <h4 className="text-white font-semibold text-[30px]">0%</h4>
              <p className="text-crm-gray-600 ml-3">Calls</p>
            </span>
          </div>

          <div className="w-full">
            <Line options={options} data={data} />
          </div>
        </section>

        <section className="w-[300px] py-4 bg-crm-dark-300 md:basis-[40%] rounded-md">
          <div className="flex">
            <button className="p-2 rounded-md border border-crm-gray-350 ml-3 bg-crm-gray-300">
              <FilterIcon />
            </button>
            <button className="py-2 px-3 text-white font-normal rounded-md border border-crm-gray-350 ml-2 bg-crm-gray-300">Clear Filters</button>
          </div>

          <div className="w-full bg-crm-gray-400 mt-4 py-3 px-5 text-crm-gray border-y border-crm-gray-350">2 weeks ago</div>

          <DashboardActivityList mailDate="hi" createdDate="da" content="Prospect Keith Hnaituk opened No Cod BNPL Comparison Tool Step #1 (Manual Email) of Enterprise Custom - Email Only Sequence" />
          <DashboardActivityList mailDate="hi" createdDate="da" content="Prospect Keith Hnaituk opened No Cod BNPL Comparison Tool Step #1 (Manual Email) of Enterprise Custom - Email Only Sequence" />
        </section>

        <section className="text-white mb-9 basis-[58%] overflow-y-hidden bg-crm-dark-300 text-white w-full px-5 py-3 rounded-md">
          <Table rows={rows} columns={columns} className="bg-transparent" />
        </section>
      </div>
    </DashboardLayout>
  );
}
