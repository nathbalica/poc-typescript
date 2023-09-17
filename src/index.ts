import express, { json } from "express";
import "express-async-errors"; 
import router from "@/routers/index.router";
import cors from "cors";
import errorHandler from "./middlawares/errorHandler";

const app = express();

app.use(cors());
app.use(json());
app.use(router);
app.use(errorHandler);

app.listen(5000, () => {
  console.log("`Servidor rodando na porta 5000`");
});
