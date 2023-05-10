const mongoose = require('mongoose');


const regSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const Model = mongoose.model('Log', regSchema);

module.exports= Model;