export default class NotNullError extends Error {
    constructor(msg) {
        super(msg);
        this.name = 'NotNullError';
    }
}
