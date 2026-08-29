import EventEmitter from 'node:events';
import EstoqueRouteValidations from '#model/validations/EstoqueRouteValidations.js'
import { json } from 'node:stream/consumers';

const estoqueRoute = new EventEmitter();

estoqueRoute.on('GET', (req, res) => {
    const msgObj = { message: 'Bem vindo a página de estoque' }
    const msgStr = JSON.stringify(msgObj);

    const headers = {
        'Content-Type': 'application/json; charset=UTF-8',
        'Content-Length': Buffer.byteLength(msgStr)
    }
    
    res.writeHead(200, headers).end(msgStr);
});

// Validation Middleware
estoqueRoute.on('POST', async (req, res) => {
    // Get the requested body content of client
    const body = await json(req);
    let msgObj = { message: 'Produto adicionado com sucesso!' }; 
    let statusCodeNum = 201
    
    try {
        const estoqueValidation = new EstoqueRouteValidations(body);
        estoqueValidation.validate();
    } catch (err) {
        msgObj = err.errors.map(errItem => {
            return { errorMessage: errItem.message };
        })
        statusCodeNum = 422;
    }

    const msgStr = JSON.stringify(msgObj);

    const headers = {
        'Content-Type': 'application/json; charset=UTF-8',
        'Content-Length': Buffer.byteLength(msgStr)
    }

    res.writeHead(statusCodeNum, headers).end(msgStr);
});

// estoqueRoute.on('POST', (req, res) => {
//     
// });

export default estoqueRoute;
