import ProductValidations from '#modelValidations/ProductValidations.js'
import productEntity from '#entities/productEntity.js'; 
import { describe, it } from 'node:test';
import { throws } from 'node:assert/strict';

describe('Testing weight validations', () => {
    const { weight } = productEntity;

    describe(`Applying invalid types - Expected failure (The valid type is a ${weight.type})`, () => {
        it('String', () => {
            throws(() => ProductValidations.validateCount('s'), { name: 'TypeError' });
        });

        it('Boolean', () => {
            throws(() => ProductValidations.validateCount(true) , { name: 'TypeError' });
        });

        it('Object', () => {
            throws(() => ProductValidations.validateCount(() => new Object()), { name: 'TypeError' });
        });

        it('Undefined',  () => {
            throws(() => ProductValidations.validateCount(undefined), { name: 'NotNullError' });
        });

        it('Null', () => {
            throws(() => ProductValidations.validateCount(null), { name: 'TypeError' });
        });

        it('Symbol', () => {
            throws(() => ProductValidations.validateCount(Symbol()), { name: 'TypeError' });
        });

        it('BigInt', () => {
            throws(() => ProductValidations.validateCount(BigInt(1)), { name: 'TypeError' });
        });
    });

    describe('Argument content', () => {
        it('NaN (Not-a-Number) - Expected failure', () => {
            throws(() => ProductValidations.validateCount(NaN), { name: 'Error' });
        });

        it('Decimal Number - Expected failure', () => {
            throws(() => ProductValidations.validateCount(1.5));
            throws(() => ProductValidations.validateCount(0.5));
            throws(() => ProductValidations.validateCount(3.14));
        });

        it('Number minor than zero - Expected failure', () => {
            throws(() => ProductValidations.validateCount(-1), { name: 'RangeError' });
            throws(() => ProductValidations.validateCount(-40), { name: 'RangeError' });
            throws(() => ProductValidations.validateCount(-1000), { name: 'RangeError' });
        });

        it('Number iguals 0', () => ProductValidations.validateCount(0));

        it('Number greater than 0', () => {
            ProductValidations.validateCount(1);
            ProductValidations.validateCount(20);
            ProductValidations.validateCount(5000);
        });
    });
});
