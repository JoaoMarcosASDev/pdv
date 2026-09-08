import EstoqueRouteValidations from '#modelValidations/ProductValidations.js'
import productEntity from '#entities/productEntity.js'; 
import { describe, it, after } from 'node:test';
import { strictEqual } from 'node:assert';


describe('Testing name validation', (t) => {
    const { name } = productEntity;
    
    // it('Content', () => {
    //     EstoqueRouteValidations.validateName('CafeAmor 10mg');
    // });

    describe(`Applying invalid types (The valid type is a ${name.type})`, (t) => {
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
    
    describe(`Argument content`, () => {
        it('Is null', { expectFailure: true }, () => {
            EstoqueRouteValidations.validateName('');
        });

        describe('Boundery test', () => {
            it('Minimun character length value', () => {
                EstoqueRouteValidations.validateName('s');
            });

            it('Max character length value', () => {
                EstoqueRouteValidations.validateName('Macarrao Bem Preparo, o melhor que voce vera 500mg');
            });

            it('Medium character length value', () => {
                EstoqueRouteValidations.validateName('Arroz Brancho 500mg');
            })
        });

        it(`exceed charcter length (The max length is ${ name.maxCharactLength })`, { expectFailure: true }, () => {
            EstoqueRouteValidations.validateName('Macarrao Bem Preparo, o melhor que voce vera na sua vida 500kg');
        });
    });
});
