import bd from "#bdConexao/BdConexao.js";
import IProdutos from "#model/entities/IProdutos.js"
/**
 * Atende aos métodos HTTP requisitados no endpoint `produtos`
 * @namespace ProdutosRotas
 */
export default class EstoqueRota {

    /**
     * Retorna o get sem requisitar paramatros, retornando a página ao cliente
     * @method GET
     * @param {http.Serverres}
     */
    static get(_, res) {
        const getProds = bd.prepare("SELECT * FROM produtos");
        console.log(getProds.all())
        const msg = [{ message: "Página produtos"}]; //{ getProds.all() }
        const stringMsg = JSON.stringify(msg);
        const headers = {
            "Content-Type": "text/json",
            "Content-Length": Buffer.byteLength(stringMsg),
        };
        
        res.writeHead(200, headers).end(stringMsg);
    }

    static post(req, res) {
        let body = "";
        
        req.on("data", (chunck) => {
            body += chunck
        } 
        );

        req.on("end", () => {
            const bodyJson = JSON.parse(body);
            const { nome, quantidade } = bodyJson[0];
            
        });
        const queryInsert =
            `INSERT INTO produtos(nome, quantidade)
            VALUES (?, ?)`;
        const insertPrep = bd.prepare(queryInsert);
        insertPrep.run(nome, quantidade);
        const msg = { message: "Chegou no post" };
        const stringMsg = JSON.stringify(msg);
        const headers = {
            "Content-Type": "text/json",
            "Content-Length": Buffer.byteLength(stringMsg),
        };
        
        res.writeHead(201, headers).end(stringMsg);
    }
}
