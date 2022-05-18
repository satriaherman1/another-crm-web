import "./styles.scss";

interface ITabFilter {
  tabButton: ITabFilterButton[];
}

interface ITabFilterButton {
  onClick?: () => any;
  activeIndicator: string;
  key: string;
}

export default function FilterTab(props: ITabFilter) {
  const { tabButton } = props;
  return (
    <div className="filter-tab flex text-crm-gray-600">
      {tabButton.map((btn) => (
        <button onClick={btn.onClick} className={`capitalize bg-none py-3 px-3 ${btn.activeIndicator === btn.key && "active"}`}>
          {btn.key}
        </button>
      ))}
    </div>
  );
}
