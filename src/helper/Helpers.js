import UtilsError from '#modelValidations/errors/UtilsError.js';

export default class {
    static isBetweenMinMaxRange(num, min, max) {
        let errorObj;

        if(typeof num !== 'number')
            throw new TypeError(UtilsError.typeErrorTemplateMessage('num', 'number'));
        else if(typeof min !=='number')
            throw new TypeError(UtilsError.typeErrorTemplateMessage('min', 'number'));
        else if(typeof max !== 'number')
            throw new TypeError(UtilsError.typeErrorTemplateMessage('max', 'number'));
        
        return num <= max && num >= min;
    }
}
