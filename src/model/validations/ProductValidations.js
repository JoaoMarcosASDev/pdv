import NotNullError from '#modelValidations/errors/NotNullError.js';
import productEntity from '#entities/productEntity.js'; 
import Helpers from '#helper/Helpers.js';

export default class {
    static validateName(name) {
        const nameObj = productEntity.name;
        const fieldName = 'name';

        if(typeof name !== nameObj.type)
            throw new TypeError(`The ${fieldName} field must be a string ${nameObj.type}.`);
        else if(!name) 
            throw new NotNullError(`The ${fieldName} field must be filled out.`);
        else if(!Helpers.isBetweenMinMaxRange(name.length, nameObj.minCharactLength, nameObj.maxCharactLength))
            throw new RangeError(`Invalid Character length in name field. it must have ${nameObj.minCharactLength} and ${nameObj.maxCharactLength}, but the character length is ${name.length}.`);
    }

    static validateQuantity(quantity) {
        const fieldName = 'quantity';
        const quatObj = productEntity.quantity;

        if(typeof quantity === 'undefined')
            throw new NotNullError(`The ${fieldName} field must be filled out.`);
        else if(typeof quantity !== quatObj.type) 
            throw new TypeError(`The ${fieldName} field must be a number type.`);
        if(Number.isNaN(quantity))
            throw new Error(`NaN is an invalid value! It must be a number greater than or equal to ${quatObj.minQuantity}.`);
        else if(!Number.isInteger(quantity))
            throw new TypeError(`The ${fieldName} must be a integer number.`);
        if(quantity < quatObj.minQuantity)
            throw new RangeError(`The ${fieldName} must be greater than or equal to ${quatObj.minQuantity}.`);
    }
}
