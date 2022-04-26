import { EyeIcon, MailIcon, MonitorIcon } from "@src/components/common/Icon";

interface IDashboarActivityListProps {
  content: string;
  createdDate: string;
  mailDate: string;
}

export default function DashboardActivityList(props: IDashboarActivityListProps) {
  const { content, createdDate } = props;
  return (
    <div className="activity-list py-5 border-t  border-crm-gray-350">
      <div className="activity-list-head flex items-center px-3 text-crm-gray-500">
        <EyeIcon />
        <span className="ml-2">Mar 8</span>
        <span className="ml-2 rounded-full w-[4px] h-[4px] bg-crm-gray-500"></span>
        <span className="ml-2">9:58 AM</span>
      </div>

      <div className="acivity-list-content px-4 mt-4 text-crm-gray-500 text-[14px] ">
        <p className="leading-[150%]">{content}</p>
      </div>
      <div className="acivity-list-bottom flex gap-9 px-4 mt-4 text-crm-gray-500 text-[14px] ">
        <div className="flex items-center">
          <MailIcon />
          <span className="ml-2">13 Days Ago</span>
        </div>
        <div className="flex items-center">
          <MonitorIcon />
          <span className="ml-2">United States</span>
        </div>
      </div>
    </div>
  );
}
