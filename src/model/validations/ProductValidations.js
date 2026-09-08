import NotNullError from '#modelValidations/errors/NotNullError.js';
import productEntity from '#entities/productEntity.js'; 
import Helpers from '#helper/Helpers.js';

export default class {
    static validateName(name) {
        const nameObj = productEntity.name;
        const fieldName = 'name';

        let errorObj;
        if(typeof name !== nameObj.type)
            errorObj = new TypeError(`The ${fieldName} field must be a string ${nameObj.type}.`);
        else if(!name) 
            errorObj = new NotNullError(`The ${fieldName} field must be filled out.`);
        else if(!Helpers.isBetweenMinMaxRange(name.length, nameObj.minCharacLength, nameObj.maxCharacLength))
            errorObj = new RangeError(`Invalid Character length in name field. it must have ${nameObj.minCharacLength} and ${nameObj.maxCharacLength}, but the character length is ${name.length}.`);
        if(errorObj)
            throw errorObj;
    }

    static validateQuantity() {
        const fildName = 'quantity';
        let errorObj;

        if(!quantity)
            erroObj = new NotNullError(`The ${fieldName} field must be filled out.`);
        if(typeof quantity !== 'number')
           errorObj = new TypeError(`The ${fildName} field must be a number type.`);
        else if(Number.isInteger(name.length))
            errorObj = new TypeError(`The ${fildName} must be a integer number.`);
        else if(quantity < minQuantityLength)
            errorObj = new RangeError(`The ${fieldName} must be greater than or equal to ${minQuantityLength}.`);
        
        if(errorObj)
            throw new errorObj;
    }
}
