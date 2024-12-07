const mongoose = require('mongoose');

const firmSchema = new mongoose.Schema({
    firmName:{
        type: String,
        requried: true,
        unique: true
    },
    area:{
        type: String,
        required: true
    }, 
    category:{
        type:[
            {
                type: String,
                enum : ['veg', 'nonveg']
            }
        ]
    },
    region:{
        type:[
            {
                type:String,
                enum: ['soutn-indian', 'north-indian', 'chinese', 'bakery']
            }
        ]
    },
    offer:{
        type: String,
    },
    image:{
        type:String
    },
    vendor:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Vendor'
        }
    ],
    products:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product'
    }]
});

const Firm = mongoose.model('Firm', firmSchema);

module.exports = Firm;