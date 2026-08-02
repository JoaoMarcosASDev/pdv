import { createServer } from "http";
import GerenciaRotas from "#rotas/GerenciaRotas.js";

const porta = 3000;

const servidor = createServer((req, res) => {
    const gerenciaRotas = new GerenciaRotas(req.method, req.url, res);
    gerenciaRotas.exec();
});

servidor.listen(porta, () =>
    console.log(`Rodando em http://localhost:${ porta}/`));
