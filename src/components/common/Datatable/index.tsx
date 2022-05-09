import { ArrowDown, ArrowDownOutlinedIcon, SettingDottedIcon } from "@src/components/common/Icon";
import DataTable from "react-data-table-component";
import "./styles.scss";

export default function CrmDatatable(props: ICrmDatatable) {
  const { data, pagination, sortIcon, columns, className, selectableRows } = props;

  return (
    <section className={`crm-datatable ${className ?? ""}`}>
      <DataTable sortIcon={sortIcon ?? <ArrowDown />} pagination={pagination ?? false} columns={columns} data={data} selectableRows={selectableRows ?? false} />
    </section>
  );
}
