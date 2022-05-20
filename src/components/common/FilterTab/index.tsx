import "./styles.scss";

export default function FilterTab(props: ITabFilter) {
  const { tabButton, className } = props;
  return (
    <div className={`${className ?? ""} filter-tab flex text-crm-gray-600`}>
      {tabButton.map((btn) => (
        <button onClick={btn.onClick} className={`capitalize bg-none py-3 px-3 ${btn.activeIndicator === btn.key && "active"}`}>
          {btn.key}
        </button>
      ))}
    </div>
  );
}
