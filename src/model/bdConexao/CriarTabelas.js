import BdConexao from "#bdConexao/BdConexao.js";

class CriarTabelas {
    #conexao;

    #createTableQuery =
        `
        CREATE TABLE IF NOT EXISTS funcionario (
           id         INTEGER      PRIMARY KEY,
           nome       VARCHAR(120) NOT NULL CHECK(nome >= 10),
           sexo       CHAR(1)      NOT NULL, -- Constraint definida em baixo
           cpf        CHAR(11)     NOT NULL,
           email      VARCHAR(120) NOT NULL,
           telefone   CHAR(11)     NOT NULL,
           senha      varchar(120) NOT NULL,
           cargoId    VARCHAR(30)  NOT NULL REFERENCES cargos(id),
           CONSTRAINT ch_sexo_opcoes CHECK((sexo) ),
           CONSTRAINT ch_sexo_opcoes CHECK(lower(sexo) REGEXP '[fm]'),
           CONSTRAINT ch_sexo_letra_deve_ser_minuscula CHECK(sexo REGEXP '[fm]')
        );

        CREATE TABLE IF NOT EXISTS cargos (
           id   INTEGER PRIMARY KEY,
           nome VARCHAR(30) NOT NULL UNIQUE
        );

        CREATE TABLE IF NOT EXISTS produtos (
            id         INTEGER PRIMARY KEY,
            nome       VARCHAR(50) NOT NULL UNIQUE,
            quantidade INTEGER CHECK (quantidade >= 0),
            tags       VARCHAR(20),
            sku        CHAR(6)
            CONSTRAINT ch_sku_tem_numeros CHECK(NOT TEMNUM(sku)) 
         );
`;

        // A restrição de um de carcteres se aplicarão no back-end.
    // Estou com dificuldade em implementar

    constructor(url = ":memory:") {
        this.#conexao = new BdConexao(url);
    }

    create() {
        this.#conexao.exec(this.#createTableQuery);

        this.#conexao.close();
    }
}

const criarTabelas = new CriarTabelas(process.env.URL_BD);
criarTabelas.create();
