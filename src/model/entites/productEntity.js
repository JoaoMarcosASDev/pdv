export default {
    name: {
        type: 'string',
        minCharactLength: 1,
        maxCharactLength: 50
    },
    quantity: {
        type: 'number',
        minQuantity: 0
    },
    count: {
        type: 'number',
        minQuantity: 0
    },
    weight: {
        type: 'number',
        minQuantity: 0
    },
    tags: {
        type: 'string',
        minCharactLength: 3,
        maxCharactLength: 20
    },
    sku: {
        type: 'string',
        minMaxCharactLength: 6
    }
};
