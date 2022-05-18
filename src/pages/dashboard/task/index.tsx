import Button from "@src/components/common/Button";
import Dropdown from "@src/components/common/Dropdown";
import FilterTab from "@src/components/common/FilterTab";
import { AddIcon, CloseIcon, EyeIcon, MailIcon, MonitorIcon, MoreIcon, SendIcon, TickCircleIcon, VideoCircleIcon } from "@src/components/common/Icon";
import MiniInput from "@src/components/common/MiniInput";
import DashboardActivityList from "@src/components/pages/dashboard/activity-list";
import DashboardTaskList from "@src/components/pages/dashboard/task-list";
import DashboardTaskTable from "@src/components/pages/dashboard/task-table";
import { SearchIcon } from "@src/config/pathImage";
import DashboardLayout from "@src/layout/dashboard-layout";
import FormatService from "@src/utility/services/format.service";
import moment from "moment";
import { useState } from "react";

import "./styles.scss";

export default function Task() {
  const [activeTaskTab, setActiveTaskTab] = useState<string>("task");
  const [activeTaskFilterTab, setActiveTaskFilterTab] = useState<string>("smart views");

  const formatService = new FormatService();

  const DueDateColumn = (props: IDueDateTableColumn) => {
    const { dueDate } = props;
    return (
      <span className="text-crm-mutted-blue w-[200px] whitespace-nowrap">
        Due <br /> <>{moment(dueDate).fromNow()}</>
      </span>
    );
  };
  const ImageColumnTable = () => {
    return <img src="/src/assets/img/avatar-example.png" width="35px" height="35px" className="rounded-full" style={{ maxWidth: "unset" }} />;
  };

  const InitialName = (props: IInitialNameTableColumn) => {
    const { fullName } = props;
    return <span className="border-crm-gray-300 uppercase rounded-full bg-crm-gray-200 border p-3 text-white text-[20px]">{formatService.generateInitialName(fullName)}</span>;
  };

  const NameColumnTable = (props: INameTableColumn) => {
    const { name, position } = props;
    return (
      <div className="flex flex-col">
        <span className="capitalize">{name}</span>
        <span className="text-crm-gray-600 whitespace-nowrap">{position}</span>
      </div>
    );
  };

  const TaskColumnTable = (props: ITaskTableColumn) => {
    const { difficulty, content } = props;
    return (
      <p className="task-column-table" style={{ wordBreak: "break-all" }}>
        <span className="capitalize border-crm-gray-300 bg-crm-gray-200 border p-1 px-2 rounded-md mr-1">{difficulty}</span>
        <span dangerouslySetInnerHTML={{ __html: content }}></span>
      </p>
    );
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
    {
      field: "initialName",
      display: false,
    },
    {
      field: "dueDate",
      display: false,
    },
    {
      field: "action",
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
          value: <NameColumnTable name="Dimas Ariyanto" position="CO-Founder & CEO" />,
        },
        {
          field: "task",
          value: (
            <TaskColumnTable
              difficulty="normal"
              content={formatService.truncate(
                `Deliver : <span class="text-crm-primary">Prospect Keith L</span> for
              <span class="text-crm-primary">Tool Step #1 (Manual Email)</span> of <span class="text-crm-primary">Enterprise Custom - Email</span>"`,
                190
              )}
            />
          ),
        },
        {
          field: "initialName",
          value: <InitialName fullName="dimas ariyanto" />,
        },
        {
          field: "dueDate",
          value: <DueDateColumn dueDate="2022-04-07" />,
        },
        {
          field: "action",
          value: (
            <button className="ml-3">
              <MoreIcon />
            </button>
          ),
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
          value: <NameColumnTable name="satria herman" position="Founder & CTO" />,
        },
        {
          field: "task",
          value: (
            <TaskColumnTable
              difficulty="normal"
              content={formatService.truncate(
                `Deliver : <span class="text-crm-primary">Prospect Keith L</span> for
              <span class="txt-crm-primary">Tool Step #1 (Manual Email)</span> of <span class="text-crm-primary">Enterprise Custom - Email</span>"`,
                190
              )}
            />
          ),
        },
        {
          field: "initialName",
          value: <InitialName fullName="Satria Herman" />,
        },
        {
          field: "dueDate",
          value: <DueDateColumn dueDate="2022-04-02" />,
        },
        {
          field: "action",
          value: (
            <button className="ml-3">
              <MoreIcon />
            </button>
          ),
        },
      ],
    },
    {
      id: 3,
      value: [
        {
          field: "image",
          value: <ImageColumnTable />,
        },
        {
          field: "name",
          value: <NameColumnTable name="satria herman" position="Founder & CTO" />,
        },
        {
          field: "task",
          value: (
            <TaskColumnTable
              difficulty="normal"
              content={formatService.truncate(
                `Deliver : <span class="text-crm-primary">Prospect Keith L</span> for
              <span class="txt-crm-primary">Tool Step #1 (Manual Email)</span> of <span class="text-crm-primary">Enterprise Custom - Email</span>"`,
                190
              )}
            />
          ),
        },
        {
          field: "initialName",
          value: <InitialName fullName="Satria Herman" />,
        },
        {
          field: "dueDate",
          value: <DueDateColumn dueDate="2022-04-02" />,
        },
        {
          field: "action",
          value: (
            <button className="ml-3">
              <MoreIcon />
            </button>
          ),
        },
      ],
    },
    {
      id: 4,
      value: [
        {
          field: "image",
          value: <ImageColumnTable />,
        },
        {
          field: "name",
          value: <NameColumnTable name="satria herman" position="Founder & CTO" />,
        },
        {
          field: "task",
          value: (
            <TaskColumnTable
              difficulty="normal"
              content={formatService.truncate(
                `Deliver : <span class="text-crm-primary">Prospect Keith L</span> for
              <span class="txt-crm-primary">Tool Step #1 (Manual Email)</span> of <span class="text-crm-primary">Enterprise Custom - Email</span>"`,
                190
              )}
            />
          ),
        },
        {
          field: "initialName",
          value: <InitialName fullName="Satria Herman" />,
        },
        {
          field: "dueDate",
          value: <DueDateColumn dueDate="2022-04-02" />,
        },
        {
          field: "action",
          value: (
            <button className="ml-3">
              <MoreIcon />
            </button>
          ),
        },
      ],
    },
    {
      id: 5,
      value: [
        {
          field: "image",
          value: <ImageColumnTable />,
        },
        {
          field: "name",
          value: <NameColumnTable name="satria herman" position="Founder & CTO" />,
        },
        {
          field: "task",
          value: (
            <TaskColumnTable
              difficulty="normal"
              content={formatService.truncate(
                `Deliver : <span class="text-crm-primary">Prospect Keith L</span> for
              <span class="txt-crm-primary">Tool Step #1 (Manual Email)</span> of <span class="text-crm-primary">Enterprise Custom - Email</span>"`,
                190
              )}
            />
          ),
        },
        {
          field: "initialName",
          value: <InitialName fullName="Satria Herman" />,
        },
        {
          field: "dueDate",
          value: <DueDateColumn dueDate="2022-04-02" />,
        },
        {
          field: "action",
          value: (
            <button className="ml-3">
              <MoreIcon />
            </button>
          ),
        },
      ],
    },
  ];

  const activityTaskButton: ITabFilterButton[] = [
    {
      key: "smart views",
      activeIndicator: activeTaskFilterTab,
      onClick: () => setActiveTaskFilterTab("smart views"),
    },
    {
      key: "sort&filters",
      activeIndicator: activeTaskFilterTab,
      onClick: () => setActiveTaskFilterTab("sort&filters"),
    },
  ];

  const TaskHeading = () => {
    return (
      <>
        <div className="flex items-center py-2 px-3 border-r border-crm-gray-400">
          <h3 className="text-white text-[32px] font-semibold">56</h3>
          <p className="ml-3 text-crm-gray-600">Total</p>
        </div>
        <div className="flex items-center py-2 px-3 border-r border-crm-gray-400">
          <h3 className="text-[32px] font-semibold text-white">34</h3>
          <p className="ml-3 text-crm-gray-600">Call</p>
        </div>
        <div className="flex items-center py-2 px-3 border-r border-crm-gray-400">
          <h3 className="text-[32px] font-semibold text-white">23 </h3>
          <p className="ml-3 text-crm-gray-600">Email</p>
        </div>
        <div className="flex items-center py-2 px-3 border-r border-crm-gray-400">
          <h3 className="text-[32px] font-semibold text-white">11 </h3>
          <p className="ml-3 text-crm-gray-600">Linkedin</p>
        </div>
      </>
    );
  };

  return (
    <DashboardLayout>
      <div className="py-4 px-6 bg-crm-dark-300 mt-3 flex flex-col lg:flex-row gap-7">
        <section>
          <div className="flex gap-x-4 items-center">
            <button className="py-2 px-3 text-white font-normal rounded-md border border-crm-gray-350 ml-2 bg-crm-gray-200">View & Filters</button>
            <Dropdown
              variant="outlined"
              borderVariantClass="border border-[#757b8c]"
              optList={[
                {
                  label: "test",
                  value: "test",
                },
              ]}
              className="w-[80px] bg-crm-gray-200 text-white font-normal rounded-md border-crm-gray-350"
            />
          </div>
          <div className="mt-4">
            <FilterTab tabButton={activityTaskButton} />
            <MiniInput className="mt-3" icon={SearchIcon} placeholder="Type to search..." variant="crm-gray" type="text" />

            <div className="search-content h-[52vh] flex flex-col items-center justify-center">
              <p className="text-crm-gray">No Smart Search ..</p>
            </div>

            <Button variant="primary">Save as New Smart View</Button>
          </div>
        </section>
        <section>
          <div className="flex ">
            <div className="activity-task-tab flex text-crm-gray-600 w-full">
              <button onClick={() => setActiveTaskTab("task")} className={`bg-none py-3 px-3 ${activeTaskTab === "task" && "active"}`}>
                Task
              </button>
              <button onClick={() => setActiveTaskTab("activity")} className={`bg-none py-3 px-3  ml-5 ${activeTaskTab === "activity" && "active"}`}>
                Activity
              </button>
            </div>

            <Button variant="primary" paddingClassName="px-3 py-2">
              <AddIcon />
            </Button>
          </div>

          {activeTaskTab === "activity" ? (
            <div className="max-w-[800px]">
              <div className="flex justify-between my-3">
                <span className="py-2 px-3 text-white font-normal rounded-md border border-crm-gray-350 ml-2 bg-crm-gray-200 flex items-center">
                  Assigned to Me{" "}
                  <button className="ml-2">
                    <CloseIcon />
                  </button>
                </span>

                <button className="text-crm-primary">Clear All</button>
              </div>
              <div className="w-full bg-crm-gray-400 mt-4 py-3 px-5 text-crm-gray border-y border-crm-gray-350">2 weeks ago</div>
              <DashboardActivityList
                icon={<EyeIcon />}
                mailDate="test"
                createdDate="06/01/22 04:11:05"
                content="Prospect Keith Hnaituk opened No Cod BNPL Comparison Tool Step #1 (Manual Email) of Enterprise Custom - Email Only Sequence"
                footerElement={
                  <div className="acivity-list-bottom flex gap-9 px-4 mt-4 text-crm-gray-500 text-[14px] ">
                    <div className="flex items-center">
                      <MailIcon />
                      <span className="ml-2">{moment("2022/04/21 18:30:10").fromNow()}</span>
                    </div>
                    <div className="flex items-center">
                      <MonitorIcon />
                      <span className="ml-2">United States</span>
                    </div>
                  </div>
                }
              />
              <DashboardActivityList
                icon={<SendIcon />}
                mailDate="hi"
                createdDate="06/01/22 08:11:05"
                content="Prospect Keith Hnaituk opened No Cod BNPL Comparison Tool Step #1 (Manual Email) of Enterprise Custom - Email Only Sequence"
                footerElement={
                  <h2 className="font-semibold px-4 text-white mt-4">
                    No Cod BNPL Comparision Tool <span className="text-crm-primary font-normal">View</span>
                  </h2>
                }
              />
              <DashboardActivityList icon={<TickCircleIcon fill="#0EC8CE" />} mailDate="hi" createdDate="06/01/22 20:11:05" content="You completed a task regarding prospect Keith Hnatiuk" />
              <DashboardActivityList
                icon={<VideoCircleIcon />}
                mailDate="hi"
                createdDate="06/01/22 10:11:05"
                content="You resumed Keith Hnatiuk from Step #2 (Manual Email) of Enterprise Custom - Email Only Sequence"
              />
            </div>
          ) : (
            <>
              <div className="flex justify-between my-3">
                <span className="py-2 px-3 text-white font-normal rounded-md border border-crm-gray-350 ml-2 bg-crm-gray-200 flex items-center">
                  Assigned to Me{" "}
                  <button className="ml-2">
                    <CloseIcon />
                  </button>
                </span>

                <button className="text-crm-primary">Clear All</button>
              </div>

              <DashboardTaskTable heading={<TaskHeading />} rows={rows} columns={columns} head={false} />
            </>
          )}
        </section>
      </div>
    </DashboardLayout>
  );
}
