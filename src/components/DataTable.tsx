import React, { useEffect, useState } from "react";
import { html } from "gridjs";
import AirtableService from "../services/airtable";
import TableGrid from "./TableGrid";
import AirtableLink from "./AirtableLink";
import { sortByIndex } from "../utils/arrays";

interface DataTableProps {
  tableName: string;
  columns: Array<
    string | { id?: string; name?: string; hidden?: boolean; formatter?: any }
  >;
  transformRecord: (record: any) => any[];
  indexToSort?: number;
}

const DataTable: React.FC<DataTableProps> = ({
  tableName,
  columns,
  transformRecord,
  indexToSort = 0,
}) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const service = new AirtableService();
        const records = await service.getRecordsFromTable(tableName);

        // Transform records for Grid.js
        let tableData = records.map(transformRecord);

        // Sort by specified index
        tableData = sortByIndex(tableData, indexToSort);

        setData(tableData);
      } catch (error) {
        console.error(`Error loading ${tableName}:`, error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [tableName, transformRecord, indexToSort]);

  if (loading) {
    return <div>Loading {tableName.toLowerCase()}...</div>;
  }

  return (
    <div>
      <h2 className="page-title">{tableName}</h2>
      <AirtableLink tableName={tableName}></AirtableLink>
      <TableGrid data={data} columns={columns} />
    </div>
  );
};

export default DataTable;
export { html };
