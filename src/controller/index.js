import { createServer } from "http";
import GerenciaRotas from "#rotas/GerenciaRotas.js";

const port = 3000;

const server = createServer((req, res) => {
    const router = new GerenciaRotas(req.method, req.url, res);
    router.exec();
});

server.listen(port, () =>
    console.log(`Rodando em http://localhost:${ port }/`));
