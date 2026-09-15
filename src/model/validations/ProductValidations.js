import NotNullError from '#modelValidations/errors/NotNullError.js';
import productEntity from '#entities/productEntity.js'; 
import Helpers from '#helper/Helpers.js';

export default class {
    static validateName(name) {
        const nameObj = productEntity.name;
        const fieldNameStr = 'name';

        if(name === undefined || name === null)
            throw new NotNullError(Helpers.mustBeFilledOutFieldMsg(fieldNameStr));
        else if(typeof name !== nameObj.type)
            throw new TypeError(Helpers.typeErrorMsg(fieldNameStr, nameObj.type));
        else if(!name) 
            throw new NotNullError(Helpers.mustBeFilledOutFieldMsg(fieldNameStr));
        else if(!Helpers.isBetweenMinMaxRange(name.length, nameObj.minCharactLength, nameObj.maxCharactLength))
            throw new RangeError(Helpers.invalidCharacterLengthMsg(name.length, fieldNameStr, nameObj.minCharactLength, nameObj.maxCharactLength));
    }

    static validateQuantity(quantity) {
        const fieldNameStr = 'quantity';
        const quatObj = productEntity.quantity;

        if(typeof quantity === 'undefined')
            throw new NotNullError(Helpers.mustBeFilledOutFieldMsg(fieldNameStr));
        else if(typeof quantity !== quatObj.type) 
            throw new TypeError(Helpers.typeErrorMsg(fieldNameStr, quatObj.type));
        else if(Number.isNaN(quantity))
            throw new Error(`${ Helpers.invalidNaNValueMsg() } It must be a number greater than or equal to ${quatObj.minQuantity}.`);
        else if(!Number.isInteger(quantity))
            throw new RangeError(Helpers.mustBeAIntegerMsg(fieldNameStr));
        else if(quantity < quatObj.minQuantity)
            throw new RangeError();
    }

    static validateCount(count) {
        const fieldNameStr = 'count';
        const countObj = productEntity.count;

        if(count === undefined || count === null)
            throw new NotNullError(Helpers.mustBeFilledOutFieldMsg(fieldNameStr));
        else if(typeof count !== countObj.type)
            throw new TypeError(Helpers.typeErrorMsg(fieldNameStr, countObj.type));
        else if(Number.isNaN(count))
            throw new Error(`${ Helpers.invalidNaNValueMsg() } It must be a number greater than or equal to ${countObj.minQuantity}.`);
        else if(!Number.isInteger(count))
            throw new RangeError(Helpers.mustBeAIntegerMsg(fieldNameStr));
        else if(count < countObj.minQuantity)
            throw new RangeError(Helpers.mustBeGreaterThanOrEqualMsg(fieldNameStr, countObj.minQuantity));
    }

    static validateWeight(weight) {
        const fieldNameStr = 'weight';
        const weightObj = productEntity.weight;

        if(typeof weight === 'undefined')
            throw new NotNullError(Helpers.mustBeFilledOutFieldMsg(fieldNameStr));

        else if(typeof weight !== weightObj.type)
            throw new TypeError(Helpers.typeErrorMsg(fieldNameStr, weightObj.type));

        else if(Number.isNaN(weight))
            throw new Error(`${ Helpers.invalidNaNValueMsg() } It must be a number greater than or equal to ${weightObj.minQuantity}.`);

        else if(weight < weightObj.minQuantity)
            throw new RangeError(Helpers.mustBeGreaterThanOrEqualMsg(fieldNameStr, weightObj.minQuantity));
    }
    
    //Futuramente implementar as relações com a tabela de tag
    static validateTags(...tagsArr) {
        const fieldNameStr = 'tags';
        const tagsObj = productEntity.tags;
        
        tagsArr.forEach((tag, index) => {
            if(tag === undefined || null)
                throw new NotNullError(Helpers.mustBeFilledOutFieldMsg(fieldNameStr));

            else if(typeof tag !== 'string')
                throw new TypeError(Helpers.typeErrorMsg(fieldNameStr, tagsObj.type));

            else if(!Helpers.isBetweenMinMaxRange(tag.length, tagsObj.minCharactLength, tagsObj.maxCharactLength)) {
                throw new RangeError(Helpers.invalidCharacterLengthMsg(tag.length, fieldNameStr));
            }
        });
    }

    // Deve ser especificado como que o SKU deve ser feito
    static validateSku(sku) {
        const fieldNameStr = 'sku';
        const skuObj = productEntity.sku;
        
        if(sku === undefined || sku === null)
            throw new NotNullError(Helpers.mustBeFilledOutFieldMsg(fieldNameStr));
        if(typeof sku !== skuObj.type)
            throw new TypeError(Helpers.typeErrorMsg(fieldNameStr, skuObj.type));
        if(!sku)
            throw new NotNullError(Helpers.mustBeFilledOutFieldMsg(fieldNameStr));
        if(sku.length !== skuObj.minMaxCharactLength)
            throw new RangeError(Helpers.mustBeExactCharactLength());
    }
}
