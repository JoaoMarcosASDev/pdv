import { DatabaseSync } from "node:sqlite";

export default class BdConexao extends DatabaseSync {
    #funcSqlite = {
        TEMNUM: function(str) {
            if(!str)
                return 0;
            const nums = [0,1,2,3,4,5,6,7,8,9]
            for (let num of nums) {
                if(str.includes(num))
                    return 1;
            }
            return 0;
        },
        REGEXP: function(str, reg) {
            reg = new RegExp(reg);
            const result = reg.test(str);
            return new Number(result).valueOf();
        }
    };

    constructor() {
        super(process.env.URL_BD);

        // A cada abertura da conexão com o banco de dado é necessário adicionar as funções persolizadas, pois após a conexão fechar, com o método "close()" e a mesma instância for reaberta, com o método "open()", acarretará em um erro, pois as funções não estarão definidas no banco de dados. Para que isso não aconteça, a conexão é aberta sempre que esta classe for instanciada e uma vez a conexão fechada não deve ser reaberta, mas sim ser criada uma nova instância ou optar por adicionar novamente as funções.

        for (const [chave, valor] of Object.entries(this.#funcSqlite)) {
            super.function(chave, valor);
        }
    }
}
