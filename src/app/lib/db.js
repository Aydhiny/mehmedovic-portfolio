import sql from "mssql";

const config = {
  user: "ajdin",
  password: "yourPassword",
  database: "Portfolio",
  server: "DESKTOP-1FNINHNMSSQLSERVER2",
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

let pool;

export const getDBConnection = async () => {
  if (!pool) {
    pool = await sql.connect(config);
  }
  return pool;
};
