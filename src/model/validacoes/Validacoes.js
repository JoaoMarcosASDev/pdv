export default class Validacoes {
    #conexao;
    #nomeTabela = ""; 
    #tabelaInfo;

    #pegarTabelaInfo() {
        this.#conexao = new this.#conexao();
        console.log(this.#conexao);
        const pragmaPrepare = this.#conexao.prepare(`PRAGMA table_info(${this.#nomeTabela})`);

        return pragmaPrepare.all();

        this.#conexao.close();
    }

    constructor(nomeTabela, conexao) {
        this.#nomeTabela = nomeTabela;
        this.#conexao = conexao;
        this.#tabelaInfo = this.#pegarTabelaInfo();
    }
    
    utltrapassouTamanhoMaxCarac(str, length) {
       
    }
}
