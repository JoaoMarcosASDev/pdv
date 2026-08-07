import EstoqueRotaValidacoes from "#model/validacoes/EstoqueRotaValidacoes.js";

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
        if (conexao) { 
            conexao = new conexao();
            console.log(conexao.prepare("SELECT name FROM sqlite_master WHERE type = 'table'").all());
            conexao.close();
        }
        const msg = [{ message: "Página produtos"}]; //{ getProds.all() }
        const stringMsg = JSON.stringify(msg);
        const headers = {
            "Content-Type": "text/json",
            "Content-Length": Buffer.byteLength(stringMsg),
        };
        
        
        res.writeHead(200, headers).end(stringMsg);
    }

    post(req, res, conexao) {
        //let body = "";
/*
        req.on("data", (chunck) => {
            body += chunck
        });
        */

        
/*
        req.on("end", () => {
            const bodyJson = JSON.parse(body);
            
            const { nome, quantidade, sku } = bodyJson[0];

            const queryInsert =
                `INSERT INTO produtos(nome, quantidade, sku)
            VALUES (?, ?, ?)`;

            conexao = new conexao();

            const insertPrep = conexao.prepare(queryInsert);
            insertPrep.run();

            conexao.close();
        });
        */
        const vaEstoque = new EstoqueRotaValidacoes(conexao);

        let msg, statusCode;

        msg = { menssagem: "Uma mensagem" };
        msg = JSON.stringify(msg);

        statusCode = 201;

        const headers = {
            "Content-Type": "text/json",
            "Content-Length": Buffer.byteLength(msg),
        };
        
        res.writeHead(statusCode, headers).end(msg);

    }
}
