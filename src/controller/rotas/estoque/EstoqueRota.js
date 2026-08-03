//import bd from "#bdConexao/bdConexao.js";

/**
 * Atende aos métodos HTTP requisitados no endpoint `produtos`
 * @namespace ProdutosRotas
 */
export default class EstoqueRota {
    #IEstoque = {
        id: "number",
        nome: "string",
        tags: "string",
        sku: "string"
    }
    /**
     * Retorna o get sem requisitar paramatros, retornando a página ao cliente
     * @method GET
     * @param {http.Serverres}
     */
    static get(_, res) {
        const msg = { message: "Página produtos" };
        const stringMsg = JSON.stringify(msg);
        const headers = {
            "Content-Type": "text/json",
            "Content-Length": Buffer.byteLength(stringMsg),
        };
        
        res.writeHead(200, headers).end(stringMsg);
    }

    static post(req, res) {
        let body = "";
        
        req.on("data", (chunck) =>
            body += chunck
            );
        req.on("end", () => {
            console.log(body);
        });
        
        const msg = { message: "Chegou no post" };
        const stringMsg = JSON.stringify(msg);
        const headers = {
            "Content-Type": "text/json",
            "Content-Length": Buffer.byteLength(stringMsg),
        };
        
        res.writeHead(201, headers).end(stringMsg);
    }
}
