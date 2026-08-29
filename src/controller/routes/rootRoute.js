import { EventEmitter } from 'node:events';

const routRoute = new EventEmitter();
routRoute.on('GET', (req, res) => {
    const msgObj = { message: 'Bem vindo a página de raiz' }
    const msgStr = JSON.stringify(msgObj);

    const headers = {
        'Content-Type': 'application/json; charset=UTF-8',
        'Content-Length': Buffer.byteLength(msgStr)
    }

    res.writeHead(200, headers).end(msgStr);
});

export default routRoute;
