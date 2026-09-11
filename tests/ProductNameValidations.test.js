import ProductValidations from '#modelValidations/ProductValidations.js'
import productEntity from '#entities/productEntity.js'; 
import { describe, it } from 'node:test';
import { throws } from 'node:assert/strict';

describe('Testing name validation', (t) => {
    const { name } = productEntity;
    
    describe(`Applying invalid types - Expected failure (The valid type is a ${name.type})`, () => {
        it('Number', () => {
            throws(() => ProductValidations.validateName(1), { name: 'TypeError' });
        });

        it('Boolean', () => {
            throws(() => ProductValidations.validateName(true), { name: 'TypeError' });
        });

        it('Object', () => {
            throws(() => ProductValidations.validateName(new Object()), { name: 'TypeError' });
        });

        it('Undefined', () => {
            throws(() => ProductValidations.validateName(undefined), { name: 'TypeError' });
        });

        it('Null', () => {
            throws(() => ProductValidations.validateName(null), { name: 'TypeError' });
        });

        it('Symbol', () => {
            throws(() => ProductValidations.validateName(Symbol()), { name: 'TypeError' });
        });

        it('BigInt', () => {
            throws(() => ProductValidations.validateName(BigInt(1)), { name: 'TypeError' });
        });
    });
    
    describe(`Argument content`, () => {
        it('Is null', () => {
            throws(() => ProductValidations.validateName(''), { name: 'NotNullError' });
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

        it(`exceed character length (The max length is ${ name.maxCharactLength }) - Expected failure`, () => {
            throws(() => ProductValidations.validateName('Macarrao Bem Preparo, o melhor que voce vera na sua vida 500kg'), { name: 'RangeError' });
        });
    });
});
