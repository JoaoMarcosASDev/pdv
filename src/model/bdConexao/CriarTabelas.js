export default class CriarTabelas {
    #conexao;

    #createTableQuery =
        `
        
        CREATE TABLE IF NOT EXISTS funcionarios (
           id         INTEGER  PRIMARY KEY,
           nome       TEXT     NOT NULL CHECK(length(nome) BETWEEN 10 AND 120),
           sexo       TEXT     NOT NULL CHECK(length(sexo) = 1),
           cpf        TEXT     NOT NULL CHECK(length(cpf) = 11),
           email      TEXT     NOT NULL,
           telefone   TEXT     NOT NULL CHECK(length(telefone) BETWEEN 11 AND 9), -- Deve possui o DDD com e o carcter 9
           senha      TEXT     NOT NULL CHECK(length(senha) BETWEEN 8 AND 20),
           cargoId    INTEGER  NOT NULL REFERENCES cargos(id),
           CONSTRAINT ch_sexo_opcoes    CHECK(lower(sexo) REGEXP '[fm]'),
           CONSTRAINT ch_sexo_letra_deve_ser_minuscula CHECK(sexo REGEXP '[fm]')
        ) STRICT;

        CREATE TABLE IF NOT EXISTS cargos (
           id   INTEGER PRIMARY KEY,
           nome TEXT NOT NULL UNIQUE CHECK(length(nome) BETWEEN 2 AND 30)
        ) STRICT;

        CREATE TABLE IF NOT EXISTS produtos (
            id         INTEGER PRIMARY KEY,
            nome       TEXT    NOT NULL UNIQUE CHECK(length(nome) BETWEEN 1 AND 50),
            quantidade INTEGER NOT NULL CHECK (quantidade >= 0),
            tags       TEXT CHECK(length(tags) <= 20),
            sku        TEXT CHECK(length(sku) = 6),
            CONSTRAINT ch_sku_tem_numeros CHECK(NOT TEMNUM(sku))
         ) STRICT;
    `;

    #tebelasNecessariasExistem (...tabelasNome) {
        // Váriavel para armazenar uma lista de valores para a query;
        let listaValores = "(";
        // Itera até o pnúltimo indicie;
        for (let i = 0; i < tabelasNome.length - 1; i++)
            listaValores += `'${tabelasNome[i]}', `;

        // Adiciona o último elemento;
        listaValores += `'${tabelasNome[tabelasNome.length - 1]}')`;

        this.#conexao = new this.#conexao();
        const prepareSelect = this.#conexao.prepare(`SELECT CASE valor WHEN ${tabelasNome.length} THEN 1 ELSE 0 END AS resultado FROM (SELECT sum(CASE WHEN name IN ${listaValores} THEN 1 ELSE 0 END) as valor FROM (SELECT name FROM sqlite_master WHERE TYPE = 'table'));`);

        if (prepareSelect.all())
            this.#conexao.exec(this.#createTableQuery);

        this.#conexao.close();
    }


    constructor(conexao) {
        this.#conexao = conexao;
    }
    // A restrição de um de carcteres se aplicarão no back-end.
    // Estou com dificuldade em implementar

    exec() {
        const nomesTabelaProjeto = ["funcionario", "cargos", "produtos"];

        this.#tebelasNecessariasExistem(nomesTabelaProjeto) 
    }
}
