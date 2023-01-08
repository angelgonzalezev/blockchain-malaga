const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  "appXTu26GG3tTAqt1"
);

class AirtableService {
  getCompanies() {
    const table = base("Companies");
    return table.select().firstPage();
  }
}

const airtableService = new AirtableService();
export default airtableService;
