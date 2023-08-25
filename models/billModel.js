import mongoose from "mongoose";
import bcrypt from "bcrypt";

const { Schema } = mongoose;

const billSchema =new Schema({

    billID : {
        type : String,
        required : true,
        unique : true
    },


    tcbill:{
        type : String,
        required : true,
    },

    ay:{
        type : String,
        required : true
    },

    bill:{
        type : String,
        required : true
    }

},
{
    timestamps : true
});

billSchema.pre("save", function(next){
    const bill = this;
    bcrypt.hash(bill.billID, 10, (err,hash) => {
        bill.billID = hash;
        next();
    });
});

const Bill = mongoose.model('Bill', billSchema);

export default Bill;