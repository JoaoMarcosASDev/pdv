import ProdutosRota from "#rotas/produtos/ProdutosRota.js";

export default class GerenciaRotas {
    // Private propetiers/verbs
    #verb;
    #endpointReq;
    #response;
    #content;

    #endpoints = {
        // "/": obj
        "/produtos": ProdutosRota
    }

    /**
     * @method
     * @return boolean
     */
    #endpointReqExists() {

        // Get array of endpoints
        const keysEndpoints = Object.keys(this.#endpoints);
        
        // Ckeck if endpoinst requested exists
        return keysEndpoints.includes(this.#endpointReq);
    }

    constructor(verb, endpointReq, response, content = undefined) {
        this.#verb = verb.toLowerCase();
        this.#endpointReq = endpointReq;
        this.#response = response;
        this.#content = content
    }
    
    /**
     * Execute requested processing
     * @verb
     */
    exec() {
        if(!this.#endpointReqExists()) {
            const msg = {
                message: "Opss, página não encontrada..."
            };

            const headers = {
                "Content-Type": "json/plain",
                "Content-Lenth": Buffer.byteLength(msg.message)
            };

            this.#response.writeHead(200, headers).end(JSON.stringify(msg));
            return;
        } 

        // Get the suitable Static Class 
        const RouteObj = this.#endpoints[this.#endpointReq];

        // Get the Static Method whose matches with requested verb
        const routeObj = RouteObj[this.#verb];

        routeObj(this.#response);
    }
}
