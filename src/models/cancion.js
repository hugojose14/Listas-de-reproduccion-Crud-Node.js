const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new Schema({

    name:{
        type:String,
        required: false,
        max:100
    },
    artist:{
        type:String,
        require:false,
        max:100
    }
    ,age:{
        type:String,
        require:false,
        max:100
    }

});

module.exports =  mongoose.model('Song',songSchema);