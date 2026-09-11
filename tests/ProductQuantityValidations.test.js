import ProductValidations from '#modelValidations/ProductValidations.js'
import productEntity from '#entities/productEntity.js'; 
import { describe, it, after } from 'node:test';
import { throws } from 'node:assert';

describe('quantity', () => {
    const { quantity } = productEntity;
    describe(`Applying invalid types - Expected failure (The valid type is a ${quantity.type})`, () => {
        it('String', () => {
            throws(() => ProductValidations.validateQuantity('s'), { name: 'TypeError' });
        });

        it('Boolean', () => {
            throws(() => ProductValidations.validateQuantity(true) , { name: 'TypeError' });
        });

        it('Object', () => {
            throws(() => ProductValidations.validateQuantity(() => new Object()), { name: 'TypeError' });
        });

        it('Undefined',  () => {
            throws(() => ProductValidations.validateQuantity(undefined), { name: 'NotNullError' });
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
        it('NaN (Not-a-Number) - Expected failure', () => {
            throws(() => ProductValidations.validateQuantity(NaN), { name: 'Error' });
        });

        it('Number minor than zero - Expected failure', () => {
            throws(() => ProductValidations.validateQuantity(-1), { name: 'RangeError' });
            throws(() => ProductValidations.validateQuantity(-40), { name: 'RangeError' });
            throws(() => ProductValidations.validateQuantity(-1000), { name: 'RangeError' });
        });
        
        it('Number iguals 0', () => ProductValidations.validateQuantity(0));

        it('Number greater than 0', () => {
            ProductValidations.validateQuantity(1);
            ProductValidations.validateQuantity(20);
            ProductValidations.validateQuantity(5000);
        });
    });
});
