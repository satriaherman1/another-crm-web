import "./styles.scss";

export default function FilterTabButton(props: ITabFilter) {
  const { tabButton, className } = props;
  return (
    <div className={`${className ?? ""} filter-tab-button`}>
      {tabButton.map((btn) => (
        <button onClick={btn.onClick} className={`${btn.activeIndicator === btn.key && "active"}`}>
          {btn.key}
        </button>
      ))}
    </div>
  );
}
