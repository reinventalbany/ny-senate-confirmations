// Airtable configuration
// These values are not sensitive as they only identify the public base
const AIRTABLE_CONFIG = {
  apiKey:
    "patxXOAQVXw9fz68N.9715d06692af8bb99b7029ca5fdfe7403311492a4b06522afda10371970c6680",
  baseId: "appN6tEaoBk1o9sXX",
  shareId: "shrDm3PAhSDLOusrv",
  // TODO make these dynamic
  tableIdsByName: {
    Senators: "tblgkQ5pXtTGoFpbM",
    Nominees: "tblAYLGjCHsWcpI5K",
    Positions: "tblr1MHm0F7u6aQrM",
    Slates: "tblz6eXGKFqzFA1gb",
    "Individual Votes": "tblnCw1VAv8hmlRNh",
  } as const,
  viewIdsByName: {
    Senators: "viwdQJbfO45EKi9w2",
    Nominees: "viwKhmBZfpjckE8FP",
    Positions: "viws66FS3c2MBIJmY",
    Slates: "viw9VItT4V1wxxaG6",
    "Individual Votes": "viwP1wczLVtHVDAMV",
  } as const,
} as const;

export default AIRTABLE_CONFIG;
