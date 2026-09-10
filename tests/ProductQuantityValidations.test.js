import ProductValidations from '#modelValidations/ProductValidations.js'
import productEntity from '#entities/productEntity.js'; 
import { describe, it, after } from 'node:test';
import { throws } from 'node:assert';

describe('quantity', () => {
    const { quantity } = productEntity;
    describe(`Applying invalid types - Expected failure (The valid type is a ${quantity.type})`, () => {
        it('String', { expectFailure: true }, () => {
            ProductValidations.validateQuantity('s');
        });

        it('Boolean', () => {
            throws(() => ProductValidations.validateQuantity(true) , { name: 'TypeError' });
        });

        it('Object', () => {
            throws(() => ProductValidations.validateQuantity(() => new Object()), { name: 'TypeError' });
        });

        it('Undefined',  () => {
            throws(() => ProductValidations.validateQuantity(undefined), { name: 'TypeError' });
        });

        it('Null', () => {
            throws(() => ProductValidations.validateQuantity(null), { name: 'TypeError' });
        });

        it('Symbol', () => {
            throws(() => ProductValidations.validateQuantity(Symbol()), { name: 'TypeError' });
        });

        it('BigInt', () => {
            throws(() => ProductValidations.validateQuantity(BigInt(1)), { name: 'TypeError' });
        });
    });

    describe('Argument content', () => {
        it('NaN (Not-a-Number)', () => {
            throws(() => ProductValidations.validateQuantity(NaN), { name: 'Error' });
        });
    });
});
