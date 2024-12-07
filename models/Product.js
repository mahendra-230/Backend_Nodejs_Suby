const mongoose = require('mongoose');

const mongooseSchema = mongoose.Schema({
    productName:{
        type:String,
        required: true
    },
    category:{
        type: [
            {
                type:String,
                enum:['veg', 'Non-veg']
            }
        ]
    },
    price:{
        type:String,
        required: true
    },
    image:{
        type:String
    },
    bestseller:{
        type:String
    },
    description:{
        type:String
    },
    Firm:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Firm'
    }]

});

const Product = mongoose.model('Product', mongooseSchema);
module.exports = Product;