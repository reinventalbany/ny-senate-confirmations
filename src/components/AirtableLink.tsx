import AIRTABLE_CONFIG from "../config/airtable";

interface AirtableLinkProps {
  tableName: string;
}

const AirtableLink: React.FC<AirtableLinkProps> = ({ tableName }) => {
  // @ts-ignore
  const tableId = AIRTABLE_CONFIG.tableIdsByName[tableName];

  return (
    <a
      href={`https://airtable.com/${AIRTABLE_CONFIG.baseId}/${tableId}/?blocks=hide`}
      target="_blank"
    >
      Open in Airtable
    </a>
  );
};

export default AirtableLink;
