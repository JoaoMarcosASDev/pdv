import { DatabaseSync } from "node:sqlite";

const bd = new DatabaseSync(process.env.URL_BD);
export default bd;
