//import bd from "#bdConexao/bdConexao.js";

/**
 * Atende aos métodos HTTP requesitados no endpoint `produtos`
 * @namespace ProdutosRotas
 */
export default class EstoqueRota {
    /**
     * Retorna o get sem requisitar paramatros, retornando a página ao cliente
     * @method GET
     * @param {http.ServerResponse}
     */
    static get(response) {
        const msg = { message: "Página produtos" };
        const stringMsg = JSON.stringify(msg);
        const headers = {
            "Content-Type": "text/json",
            "Content-Length": Buffer.byteLength(stringMsg),
        };
        response.writeHead(200, headers).end(stringMsg);
    }
}
