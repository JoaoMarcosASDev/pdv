import EstoqueRouteValidations from '#modelValidations/ProductValidations.js'
import productEntity from '#entities/productEntity.js'; 
import { describe, it, after } from 'node:test';
import { strictEqual } from 'node:assert';


describe('Testing name validation', (t) => {
    const { name } = productEntity;
    it('Valid product name', () => {
        EstoqueRouteValidations.validateName('CafeAmor 10mg');
    });

    let isTypeCorrectBoll;
    describe(`Not ${name.type} type entries:`, (t) => {
        it('Number', { expectFailure: true }, () => {
            EstoqueRouteValidations.validateName(1);
        });

        it('Boolean', { expectFailure: true }, () => {
            EstoqueRouteValidations.validateName(true)
        });

        it('Object', { expectFailure: true }, () => {
            EstoqueRouteValidations.validateName(new Object());
        });
    });

    describe('Must failure when:', () => {
        it('Not null', { expectFailure: true }, () => {
            EstoqueRouteValidations.validateName('');
        });

        it(`Is Character Lenth between ${ name.minCharacLength } and ${ name.maxCharacLength }`, { expectFailure: true }, () => {
            EstoqueRouteValidations.validateName('Macarrao Bem Preparo, o melhor que voce vera na sua vida');
        });
    });
});
