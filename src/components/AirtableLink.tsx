import AIRTABLE_CONFIG from "../config/airtable";

interface AirtableLinkProps {
  tableName: string;
  recordId?: string;
}

const AirtableLink: React.FC<AirtableLinkProps> = ({ tableName, recordId }) => {
  // @ts-ignore
  const tableId = AIRTABLE_CONFIG.tableIdsByName[tableName];
  // @ts-ignore
  const viewId = AIRTABLE_CONFIG.viewIdsByName[tableName];

  const components = [
    AIRTABLE_CONFIG.baseId,
    AIRTABLE_CONFIG.shareId,
    tableId,
    viewId,
    recordId,
  ];
  const path = components.filter((c) => !!c).join("/");

  return (
    <a
      className="button raw-data"
      href={`https://airtable.com/${path}?blocks=hide`}
      target="_blank"
    >
      See the raw data
    </a>
  );
};

export default AirtableLink;
