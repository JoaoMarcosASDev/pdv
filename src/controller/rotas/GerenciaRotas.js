import EstoqueRota from "#rotas/estoque/EstoqueRota.js";

export default class GerenciaRotas {
    // Private propetiers/verbo
    #verbo;
    #endpointReq;
    #resposta;
    #conteudo;

    #endpoints = {
        // "/": obj
        "/estoque": EstoqueRota
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

    constructor(verbo, endpointReq, resposta, conteudo = undefined) {
        this.#verbo= verbo.toLowerCase();
        this.#endpointReq = endpointReq;
        this.#resposta = resposta;
        this.#conteudo = conteudo;
    }
    
    exec() {
        if(!this.#endpointReqExiste()) {
            const msg = {
                mensagem: "Opss, página não encontrada..."
            };

            const headers = {
                "conteudo-Type": "json/plain",
                "conteudo-Lenth": Buffer.byteLength(msg.mensagem)
            };

            this.#resposta.writeHead(200, headers).end(JSON.stringify(msg));
            return;
        } 

        // Pega a Static Class adequada
        const RotaObj = this.#endpoints[this.#endpointReq];

        // Chama o método estático de acordo com o verbo HTTP requisitado
        const rotaVerboMetod = RotaObj[this.#verbo];

       rotaVerboMetod(this.#resposta);
    }
}
