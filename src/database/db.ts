import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pg;

type DatabaseConfig = {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
  ssl?: boolean | { rejectUnauthorized: boolean };
};


const configDatabase: DatabaseConfig = {
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
  user: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "driven",
  database: process.env.DB_DATABASE || "driviagens"
};


if (process.env.NODE_ENV === "production") configDatabase.ssl = true;


const connection = new Pool(configDatabase);

export default connection;

connection.query("SELECT 1")
  .then(() => {
    console.log("Conexão com o banco de dados estabelecida com sucesso!");
  })
  .catch((error) => {
    console.error("Erro ao conectar ao banco de dados:", error.message);
  });
