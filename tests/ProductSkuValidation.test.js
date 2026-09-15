import ProductValidations from '#modelValidations/ProductValidations.js'
import productEntity from '#entities/productEntity.js'; 
import { describe, it } from 'node:test';
import { throws } from 'node:assert/strict';

describe('Testing sku validation', () => {
    const { sku } = productEntity;

    describe(`Applying invalid types - Expected failure (The valid type is a ${sku.type})`, () => {
        it('Number', () => {
            throws(() => ProductValidations.validateSku(1), { name: 'TypeError' });
        });

        it('Boolean', () => {
            throws(() => ProductValidations.validateSku(true) , { name: 'TypeError' });
        });

        it('Object', () => {
            throws(() => ProductValidations.validateSku(() => new Object()), { name: 'TypeError' });
        });

        it('Undefined',  () => {
            throws(() => ProductValidations.validateSku(undefined), { name: 'NotNullError' });
        });

        it('Null', () => {
            throws(() => ProductValidations.validateSku(null), { name: 'NotNullError' });
        });

        it('Symbol', () => {
            throws(() => ProductValidations.validateSku(Symbol()), { name: 'TypeError' });
        });

        it('BigInt', () => {
            throws(() => ProductValidations.validateSku(BigInt(1)), { name: 'TypeError' });
        });
    });

    describe(`Argument content`, () => {
        it('Is null - Expected failure', () => {
            throws(() => ProductValidations.validateName(''), { name: 'NotNullError' });
        });

        it('Minor than required character length - Expected failure', () => {
            throws(() => ProductValidations.validateSku('a'), { name: 'RangeError' });
            throws(() => ProductValidations.validateSku('abc'), { name: 'RangeError' });
        });

        it('Greater than required character length - Expected failure', () => {
            throws(() => ProductValidations.validateSku('abcdefg'), { name: 'RangeError' });
        });
        
        it(`Valid character length (${ sku.minMaxCharactLength })`, () => {
            ProductValidations.validateSku('abcdef');
        });
    });
})
