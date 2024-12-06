import { getDBConnection } from "../../../lib/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const pool = await getDBConnection();
    const result = await pool.request().query("SELECT * FROM BlogPosts");
    res.status(200).json(result.recordset);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
