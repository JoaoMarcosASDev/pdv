import { createServer } from "http";
import Router from "#Router.js";
import dbConnection from "#bdConnection/DbConnection.js";
import CreateTable from "#bdConnection/CreateTables.js";

const PORT = process.env.LOCAL_PORT || 3000;

// Cria as tabgelas quando necessário
const dbCon = new dbConnection(process.env.URL_DB);
const createTable = new CreateTable(dbCon);

createTable.exec();

const server = createServer();

server.on('request', (req, res) => 
    Router.emit(req.url, req, res)
);

server.listen(PORT, () =>
    console.log(`Rodando em\nhttp://localhost:${PORT}/`));
