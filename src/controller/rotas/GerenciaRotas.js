import EstoqueRota from "#rotas/estoque/EstoqueRota.js";
import BdConexao from "#bdConexao/BdConexao.js";

export default class GerenciaRotas {
    // Private propetiers/verbo
    #verbo;
    #endpointReq;
    #req;
    #res;

    #endpoints = {
        // "/": obj
        "/estoque/": EstoqueRota
    };

    /**
     * @method
     * @return boolean
     */
    #endpointReqExiste() {

        // Array de chaves
        const keysEndpoints = Object.keys(this.#endpoints);
        
        // Verifica se o endpoint requisitado existe
        return keysEndpoints.includes(this.#endpointReq);
    }

    constructor(req, res) {
        this.#req = req;
        this.#verbo= req.method.toLowerCase();
        this.#endpointReq = req.url.endsWith('/') ? req.url.toLowerCase() : req.url.toLowerCase() + '/';
        this.#res = res;
    }
    
    exec() {
        if(!this.#endpointReqExiste()) {
            const msg = {
                mensagem: "Opss, página não encontrada..."
            };

            const headers = {
                "content-Type": "json/plain",
                "content-Lenth": Buffer.byteLength(msg.mensagem)
            };

            this.#res.writeHead(200, headers).end(JSON.stringify(msg));
            return;
        } 

        const rotaObj = new this.#endpoints[this.#endpointReq]();
        const rotaVerboMetodo = rotaObj[this.#verbo];

        rotaVerboMetodo(this.#req, this.#res, BdConexao);
    }
}
