import ProductValidations from '#modelValidations/ProductValidations.js'
import productEntity from '#entities/productEntity.js'; 
import { describe, it, after } from 'node:test';

describe('quantity', () => {
    const { quantity } = productEntity;
    describe(`Applying invalid types (The valid type is a ${quantity.type})`, () => {
        it('String', { expectFailure: true }, () => {
            ProductValidations.validateQuantity('s');
        });

        it('Boolean', { expectFailure: true }, () => {

            ProductValidations.validateQuantity(true);
        });

        it('Object', { expectFailure: true }, () => {
            ProductValidations.validateQuantity(new Object());
        });

        it('Undefined', { expectFailure: true }, () => {
            ProductValidations.validateQuantity(undefined);
        });

        it('Null', { expectFailure: true }, () => {
            ProductValidations.validateQuantity(null);
        });

        it('Symbol', { expectFailure: true }, () => {
            ProductValidations.validateQuantity(Symbol());
        });

        it('BigInt', { expectFailure: true }, () => {
            ProductValidations.validateQuantity(BigInt(1));
        });
    });

    describe('Argument content', () => {
        it('NaN (Not-a-Number)', { expectFailure: true }, () => {
            ProductValidations.validateQuantity(NaN);
        });
    })
});
