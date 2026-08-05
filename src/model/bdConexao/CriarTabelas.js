import BdConexao from "#bdConexao/BdConexao.js";

class CriarTabelas {
    #conexao;

    #tebelasNecessariaExistem (...tabelasNome) {
        // Váriavel para armazenar uma lista de valores para a query;
        let listaValores = "(";
        // Itera até o pnúltimo indicie;
        for (let i = 0; i < tabelasNome.length - 1; i++)
            listaValores += `'${tabelasNome[i]}', `;

        // Adiciona o último elemento;
        listaValores += `'${tabelasNome[tabelasNome.length - 1]}')`;

        const prepareSelect = this.#conexao.prepare(`SELECT CASE valor WHEN ${tabelasNome.length} THEN 1 ELSE 0 END AS resultado FROM (SELECT sum(CASE WHEN name IN ${listaValores} THEN 1 ELSE 0 END) as valor FROM (SELECT name FROM sqlite_master WHERE TYPE = 'table'));`);
        // Convert para boolean
        return Boolean(prepareSelect.all());
    }

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

    exec() {
        console.log(this.#conexao.prepare("SELECT name FROM sqlite_master").all());

        if(this.#tebelasNecessariaExistem())
            this.#conexao.exec(this.#createTableQuery);
        
        this.#conexao.close();
    }
}

const criarTabelas = new CriarTabelas();
criarTabelas.exec();
