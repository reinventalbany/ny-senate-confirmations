import AIRTABLE_CONFIG from "../config/airtable";

interface AirtableLinkProps {
  tableName: string;
}

const AirtableLink: React.FC<AirtableLinkProps> = ({ tableName }) => {
  // @ts-ignore
  const tableId = AIRTABLE_CONFIG.tableIdsByName[tableName];

  return (
    <a
      className="button"
      href={`https://airtable.com/${AIRTABLE_CONFIG.baseId}/${tableId}/?blocks=hide`}
      target="_blank"
    >
      See the raw data
    </a>
  );
};

export default AirtableLink;
