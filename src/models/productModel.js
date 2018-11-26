const mongoose = require('mongoose');

const SchemaTypes = mongoose.Schema.Types;

const ProductSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: SchemaTypes.Decimal128,
        required: true
    },
    discount: {
        type: Number
    }
});

mongoose.model('Product', ProductSchema);