const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Cancion = require('../models/cancion');

const listSchema= new Schema({

    nameList:{
        _id: Schema.Types.ObjectId,
        type:String,
        required:false,
        max:100
    },

    song: [{type: Schema.Types.ObjectId, ref: Cancion}]
});

module.exports = mongoose.model('List',listSchema);