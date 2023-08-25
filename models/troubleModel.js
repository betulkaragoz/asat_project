import mongoose from "mongoose";


const { Schema } = mongoose;

const troubleSchema = new Schema({
    isim : {
        type : String,
        required : true,
    },

    soyisim : {
        type : String,
        required : true
    },

    tckno : {
        type : String,
        required : true
    },

    phonenumber : {
        type : String,
        required : true
    },
    
    ilce : {
        type : String,
        required : true
    },

    mahalle : {
        type : String,
        required : true
    },

    tamAdres : {
        type : String,
        required : true
    },

    ariza : {
        type : String,
        required : true
    }

},

{
    timestamps : true
});

// troubleSchema.pre("save", function(next){
//     const trouble = this;
//     bcrypt.hash(trouble.tckno, 10, (err,hash) => {
//         trouble.tckno = hash;
//         next();
//     });
// });

const Trouble = mongoose.model('Trouble', troubleSchema);

export default Trouble;
