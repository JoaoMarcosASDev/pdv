import { DatabaseSync } from "node:sqlite";

class CriarTabelas {
    #conexao;

    #funcSqlite = {
        TEMNUM: function(str) {
            const nums = [0,1,2,3,4,5,6,7,8,9]
            for (let num of objCorres[tipos])
                if(str.includes(num))
                    return 1;
            return 0;
        },
        REGEXP: function(str, reg) {
            reg = new RegExp(reg);
            const result = reg.test(str);
            return new Number(result).valueOf();
        }
    };

    #createTableQuery =
        `CREATE TABLE IF NOT EXISTS cargos (
            id   INTEGER PRIMARY KEY,
            nome VARCHAR(30) NOT NULL UNIQUE
         );
            
         CREATE TABLE IF NOT EXISTS produtos (
            id         INTEGER PRIMARY KEY,
            nome       VARCHAR(50) NOT NULL UNIQUE,
            quantidade INTEGER CHECK(quantidade >= 0),
            tags       VARCHAR(20) NOT NULL UNIQUE,
            sku        VARCHAR(6) NOT NULL,
            CONSTRAINT ch_sku_tem_numeros CHECK(TEMNUM(sku)) 
         );

         CREATE TABLE IF NOT EXISTS funcionario (
            id         INTEGER      PRIMARY KEY,
            nome       VARCHAR(120) NOT NULL CHECK(nome >= 10),
            sexo       CHAR(1)      NOT NULL, -- Constraint defina em baixo
            cpf        CHAR(11)     NOT NULL,
            email      VARCHAR(120) NOT NULL,
            telefone   CHAR(11)     NOT NULL,
            cargoId    VARCHAR(30)  NOT NULL REFERENCES cargos(id),
            CONSTRAINT ck_sexo_opcoes CHECK((sexo) ),
            CONSTRAINT ck_sexo_opcoes CHECK(lower(sexo) REGEXP '[fm]'),
            CONSTRAINT ck_sexo_letra_deve_ser_minuscula CHECK(sexo REGEXP '[fm]')
         );`;

        // A restrição de um de carcteres se aplicarão no back-end.
    // Estou com dificuldade em implementar

    constructor(url = ":memory:") {
        this.#conexao = new DatabaseSync(url);
    }

    create() {
        for(const [chave, valor] of Object.entries(this.#funcSqlite)) 
            this.#conexao.function(chave, valor);
        
        this.#conexao.exec(this.#createTableQuery);

        this.#conexao.close();
    }
}

const criarTabelas = new CriarTabelas(process.env.URL_DB);
criarTabelas.create();
