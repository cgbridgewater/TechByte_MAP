const mongoose = require('mongoose');

var optionalWithLength = function(minLength,maxLength) {
    minLength = minLength || 0;
    maxLength = maxLength || Infinity;
    return{
        validator : function(value) {
            if (value.length === 0) return true; 
                return value.length >= minLength;
        },
        message : `Optional field is shorter than the minimum allowed length  ${minLength} `
    }
}

// var optionalWithLength = function(minLength,maxLength) {
//     minLength = minLength || 0;
//     maxLength = maxLength || Infinity;
//     return{
//         validator : function(value) {
//             if (value.length === 0) return true; 
//                 return value.length >= minLength && value.length <= maxLength;
//         },
//         message : 'Optional field is shorter than the minimum allowed length (' + minLength + ') or larger than the maximum allowed length (' + maxLength + ')'
//     }
// }



const ItemSchema = mongoose.Schema({
    title: { 
        type: String ,
        minLength: [3, "Title must be at least 2 characters long"],
        required: [true, "Title required"],
    },
    price: { 
        type: Number,
        required: [true, "Price required"],
    },
    description: { 
        type: String, validate: optionalWithLength(3,10)},


        // if ==0 run || if >0 validate must be 3+ 
        // minLength: 0 || [3 , "Description must be at least 2 characters long " ] ,
        // default: "Currently Not Available",


        rewound: { 
            type: String ,
            default: "yes"            
        },
}, { timestamps: true});
module.exports = mongoose.model("Item", ItemSchema)