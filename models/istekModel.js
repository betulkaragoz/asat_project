import mongoose from "mongoose";

const { Schema } = mongoose;

const istekSchema = new Schema({

    isimR : {
        type : String,
        required : true
    },

    soyisimR : {
        type : String,
        required : true
    },

    mailR : {
        type : String,
        required :true
    },

    phonenumberR : {
        type : String,
        required :true
    },

    oneri : {
        type : String,
        required :true
    },
},

{
    timestamps : true
});

const Istek = mongoose.model('Istek', istekSchema);

export default Istek;