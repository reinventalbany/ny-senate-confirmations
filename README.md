# New York Senate Confirmation Votes

An open data site sharing confirmation votes from the New York State Senate.

## Setup

```bash
npm install
```

## Run

```bash
npm start
```

then open http://localhost:1234.

## Project Structure

```
src/
├── components/
│   ├── TableList.tsx       # Home page showing all tables
│   ├── TableView.tsx       # List of records in a table
│   └── RecordDetail.tsx    # Detailed view of a single record
├── services/
│   └── airtable.ts         # Airtable API service
├── App.tsx                 # Main app component with routing
├── App.css                 # Styles
└── index.tsx              # Entry point
```

## How It Works

1. **Tables View**: The home page displays all configured tables with record counts
2. **Records View**: Click a table to see all its records with preview of key fields
3. **Detail View**: Click a record to see all fields in detail
4. **Linked Records**: Any Airtable linked record fields automatically become clickable links that navigate to the linked record's detail page

## Technologies Used

- React 18
- TypeScript
- React Router v6
- Airtable API
- Create React App
- [Rollbar](https://rollbar.com/) for error monitoring

## License

MIT
