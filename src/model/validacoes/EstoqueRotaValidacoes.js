import Validacoes from "#model/validacoes/Validacoes.js";

export default class EstoqueRotaValidacoes extends Validacoes {
    constructor(conexao) {
        super("produtos", conexao);
    }
}
