import ProductValidations from '#modelValidations/ProductValidations.js'
import productEntity from '#entities/productEntity.js'; 
import { describe, it, after } from 'node:test';

describe('Testing name validation', (t) => {
    const { name } = productEntity;
    

    describe(`Applying invalid types (The valid type is a ${name.type})`, (t) => {
        it('Number', { expectFailure: true }, () => {
            ProductValidations.validateName(1);
        });

        it('Boolean', { expectFailure: true }, () => {
            ProductValidations.validateName(true)
        });

        it('Object', { expectFailure: true }, () => {
            ProductValidations.validateName(new Object());
        });

        it('Null', { expectFailure: true }, () => {
            ProductValidations.validateName(null);
        });

        it('Undefined', { expectFailure: true }, () => {
            ProductValidations.validateName(undefined);
        });

        it('Symbol', { expectFailure: true }, () => {
            ProductValidations.validateName(Symbol());
        });
    });
    
    describe(`Argument content`, () => {
        it('Is null', { expectFailure: true }, () => {
            ProductValidations.validateName('');
        });

        describe('Boundery test', () => {
            it('Minimun character length value', () => {
                ProductValidations.validateName('s');
            });

            it('Max character length value', () => {
                ProductValidations.validateName('Macarrao Bem Preparo, o melhor que voce vera 500mg');
            });

            it('Medium character length value', () => {
                ProductValidations.validateName('Arroz Brancho 500mg');
            })
        });

        it(`exceed charcter length (The max length is ${ name.maxCharactLength })`, { expectFailure: true }, () => {
            ProductValidations.validateName('Macarrao Bem Preparo, o melhor que voce vera na sua vida 500kg');
        });
    });
});
