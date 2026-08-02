import { DatabaseSync } from "node:sqlite";

export default class {
    bd;

    constructor(url) {
        try {
            this.bd = new DatabaseSync(url);
        } catch (err) {
            console.error(err);
        }
    }

    fechar() {
        this.bd.close();
    }
}
