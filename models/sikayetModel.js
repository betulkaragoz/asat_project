import mongoose from "mongoose";

const { Schema } = mongoose;

const sikayetSchema = new Schema({

    isimS : {
        type : String,
        required : true
    },

    soyisimS : {
        type : String,
        required : true
    },

    mailS : {
        type : String,
        required :true
    },

    phonenumberS : {
        type : String,
        required :true
    },

    sikayet : {
        type : String,
        required :true
    },
},

{
    timestamps : true
});

const Sikayet = mongoose.model('Sikayet', sikayetSchema);

export default Sikayet;