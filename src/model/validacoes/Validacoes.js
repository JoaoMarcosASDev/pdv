export default class Validacoes {
    #conexao;
    #nomeTabela = ""; 
    #tabelaInfo;

    #pegarTabelaInfo() {
        const conexao = new this.#conexao();

        const pragmaPrepare = conexao.prepare(`PRAGMA table_info(${this.#nomeTabela})`);
        const result = pragmaPrepare.all();

        conexao.close();

        return result;
    }

    #convertTiposSqliteParaJS() {
        const tabelaInfoObj = this.#pegarTabelaInfo();
    }

    constructor(nomeTabela, conexao) {
        console.log(conexao);
        this.#nomeTabela = nomeTabela;
        this.#conexao = conexao;
        this.#tabelaInfo = this.#pegarTabelaInfo();
    }
    exec() {
        this.#convertTiposSqliteParaJS();
    }
    
    utltrapassouTamanhoMaxCarac(str, length) {
       
    }
}
