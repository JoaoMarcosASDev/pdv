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
    get(_, res, conexao = undefined) {
        const msg = [{ message: "Página produtos"}]; //{ getProds.all() }
        const stringMsg = JSON.stringify(msg);
        const headers = {
            "Content-Type": "text/json",
            "Content-Length": Buffer.byteLength(stringMsg),
        };
        
        res.writeHead(200, headers).end(stringMsg);
    }

    post(req, res, conexao) {
        let body = "";

        req.on("data", (chunck) => {
            body += chunck
        } 
        );
       
        req.on("end", () => {
            conexao = new conexao(process.env.URL_BD);
            const bodyJson = JSON.parse(body);
            const { nome, quantidade, sku } = bodyJson[0];
            // Esse inserte foi feito para testar
            const queryInsert =
                `INSERT INTO produtos(nome, quantidade, sku)
            VALUES (?, ?, ?)`;

            const insertPrep = conexao.prepare(queryInsert);
            insertPrep.run(nome, quantidade, sku);
            conexao.close();
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
