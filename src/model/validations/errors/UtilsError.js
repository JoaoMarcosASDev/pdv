export default class {
    static typeErrorTemplateMessage(argName, type) {
        const msg = (argName, type) => `The "${argName}" argument must be a ${type} type.`;
        if(typeof argName !== 'string')
            throw new TypeError(msg('argName', 'string'));
        else if(typeof type !=='string', type)
            throw new TypeError(msg('type', 'string'));
        
        return msg(argName, type);
    }
};
