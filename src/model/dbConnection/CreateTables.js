// Tentar migrar tablez para tirar a classe

export default class {
    #connection;

    #createTableQuery =
        `
        CREATE TABLE IF NOT EXISTS employees (
           id               INTEGER   PRIMARY KEY,
           name              TEXT     NOT NULL CHECK(length(name) BETWEEN 10 AND 120),
           sex               TEXT     NOT NULL CHECK(length(sex) = 1),
           cpf               TEXT     NOT NULL CHECK(length(cpf) = 11),
           email             TEXT     NOT NULL,
           phone             TEXT     NOT NULL CHECK(length(phone) BETWEEN 11 AND 9), -- Deve possui o DDD com e o carcter 9
           password          TEXT     NOT NULL CHECK(length(password) BETWEEN 8 AND 20),
           job_title_id     INTEGER   NOT NULL REFERENCES job_title_id(id),
           CONSTRAINT ch_sex_options           CHECK(lower(sex) REGEXP '[fm]'),
           CONSTRAINT ch_sex_must_be_lowercase CHECK(sex REGEXP '[fm]')
        ) STRICT;

        CREATE TABLE IF NOT EXISTS job_titles (
           id   INTEGER PRIMARY KEY,
           name  TEXT   NOT NULL UNIQUE CHECK(length(name) BETWEEN 2 AND 30)
        ) STRICT;

        CREATE TABLE IF NOT EXISTS products (
            id                 INTEGER   PRIMARY KEY,
            name                TEXT   NOT NULL UNIQUE  CHECK(length(name) BETWEEN 1 AND 50),
            quantity           INTEGER    NOT NULL      CHECK (quantity >= 0),
            count              INTEGER                  CHECK(count >= 0),
            weight              REAL                    CHECK(weight >= 0),
            tags                TEXT                    CHECK(length(tags) <= 20),
            sku                 TEXT                    CHECK(length(sku) = 6),
            CONSTRAINT ch_sku_must_not_contains_numbers CHECK(NOT CONTAINSNUM(sku))
         ) STRICT;
    `;

    #allDefinedTablesExists (...tablesName) {
        // Váriavel para armazenar uma lista de valores para a query;
        let valuesList = "(";
        // Itera até o pnúltimo indicie;
        for (let i = 0; i < tablesName.length - 1; i++)
            valuesList += `'${tablesName[i]}', `;

        // Adiciona o último elemento;
        valuesList += `'${tablesName[tablesName.length - 1]}')`;

        const connect = this.#connection.connect();
        const prepareSelect = connect.prepare(`SELECT CASE valor WHEN ${tablesName.length} THEN 1 ELSE 0 END AS resultado FROM (SELECT sum(CASE WHEN name IN ${valuesList} THEN 1 ELSE 0 END) as valor FROM (SELECT name FROM sqlite_master WHERE TYPE = 'table'));`);

        if (prepareSelect.all())
            connect.exec(this.#createTableQuery);

        connect.close();
    }

    constructor(connection) {
        this.#connection = connection;
    }
    // A restrição de um de carcteres se aplicarão no back-end.
    // Estou com dificuldade em implementar

    exec() {
        const tablesNames = ['employees', 'job_titles', 'products'];

        this.#allDefinedTablesExists(tablesNames);
    }
}
