export default class {
    static mustBeExactCharactLength(fieldNameStr, lengthNum) {
        return `The ${ fieldNameStr } must be exact ${ lengthNum } character length`;
    }

    static mustBeGreaterThanOrEqualMsg(fieldNameStr, num) {
        return `The ${ fieldNameStr } must be greater than or equal to ${ num }.`;
    }

    static mustBeAIntegerMsg(fieldNameStr) {
        return `The ${ fieldNameStr } must be a integer number.`;
    }

    static invalidNaNValueMsg() {
        return `NaN is an invalid value.`;
    }

    static invalidCharacterLengthMsg(strLength, fieldNameStr, minCharactLength, maxCharactLength) {
        return `Invalid Character length in ${ fieldNameStr } field. it must have ${ minCharactLength } and ${ maxCharactLength }, but the character length is ${ strLength }.`; 
    }

    static typeErrorMsg(fieldNameStr, type) {
        return `The ${ fieldNameStr } field must be a ${ type } type.`;
    }

    static mustBeFilledOutFieldMsg(fieldNameStr) {
        return `The ${ fieldNameStr } field must be filled out.`
    };

    static isBetweenMinMaxRange(num, minNum, maxNum) {
        if(typeof num !== 'number')
            throw new TypeError(msgStr('num', 'number'));

        else if(typeof minNum !=='number')
            throw new TypeError(`The "minNum" argument must be a number type. Argument received "${ typeof minNum }".`);

        else if(typeof maxNum !== 'number')
            throw new TypeError(`The "maxNum" argument must be a number type. Argument received "${ typeof maxNum }".`);
        
        return num <= maxNum && num >= minNum;
    }
}
