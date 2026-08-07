import { createServer } from "http";
import GerenciaRotas from "#rotas/GerenciaRotas.js";
import BdConexao from "#bdConexao/BdConexao.js";
import CriarTabelas from "#bdConexao/CriarTabelas.js";

const porta = 3000;

const servidor = createServer((req, res) => {
    const criarTabelas = new CriarTabelas(BdConexao);
    criarTabelas.exec();
    const gerenciaRotas = new GerenciaRotas(req, res, BdConexao);
    gerenciaRotas.exec();
});

servidor.listen(porta, () =>
    console.log(`Rodando em http://localhost:${ porta}/`));
