import Airtable from "airtable";

const apiKey = process.env.AIRTABLE_API_KEY;

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey,
});

export const base = new Airtable({ apiKey }).base("appMTP6wCJqbTzZj2");

export const getAirtableData = (table, callback) => {
  base(table)
    .select({
      view: "Grid view",
    })
    .eachPage(
      function page(records) {
        callback(records);
      },
      function done(err) {
        if (err) {
          console.error(err);
          return;
        }
      }
    );
};
