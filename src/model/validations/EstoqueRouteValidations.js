import NotNullError from '#model/validations/errors/NotNullError.js';

export default class {
    #name;
    #quantity;
    #errorsArr = [];

    #validateName() {
        const portugueseFildName = 'nome';
        const minCaracLength = 1;
        const maxCaracLength = 50;

        if(typeof this.#name !== 'string')
            this.#errorsArr.push(new TypeError(`O campo ${portugueseFildName} deve ser uma string.`));
        else if(!this.#name)
            this.#errorsArr.push(new NotNullError(`Campo ${portugueseFildName} deve ser preenchido.`));
        else if(this.#name.length < minCaracLength || this.#name.length > maxCaracLength)
            this.#errorsArr.push(new RangeError(`Quantidade de caractere(s) do campo ${portugueseFildName} inválido. ele deve ter de ${minCaracLength} a ${maxCaracLength} caracteres, porém foi inserido ${this.#name.length} caractere(s).`));
    }
    
    #validateQuantity() {
        const portugueseFildName = 'quantidade';
        const minQuantityLength = 0;

        if(this.#quantity <= minQuantityLength)
            this.#errorsArr.push(new RangeError(new RangeError(`O campo ${portugueseFildName} deve ser maior do que ${minQuantityLength}.`)));
    }

    constructor({ name, quantity }) {
        this.#name = name;
        this.#quantity = quantity;
    }
    
    validate() {
        this.#validateName();
       
        if(this.#errorsArr.length)
            throw new AggregateError(this.#errorsArr);
    }
}
