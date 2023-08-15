import {google} from "googleapis";

export async function getGoogleSheetsData(range) {
  try {
    const auth = await google.auth.getClient({
      projectId: "dbpersonal",
      credentials: {
        type: "service_account",
        private_key: process.env.GOOGLE_PRIVATE_KEY,
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        client_id: "106946937342751784569",
        token_url: "https://oauth2.googleapis.com/token",
        universe_domain: "googleapis.com",
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({version: "v4", auth});
    const data = await sheets.spreadsheets.values.get({
      spreadsheetId: "13fHOPwuLsl3t3BzTpRVWK0bB_tmNjxII7kZgQYpYo3I",
      range,
    });

    return data.data.values;
  } catch (error) {
    console.error("Error fetching data from Google Sheets:", error);
    throw error;
  }
}
