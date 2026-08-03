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

    constructor(url) {
        super(url);
        for (const [chave, valor] of Object.entries(this.#funcSqlite)) {
            super.function(chave, valor);
        }
    }
}
