import mongoose from "mongoose";
import bcrypt from "bcrypt";

const { Schema } = mongoose;

const userSchema = new Schema({

    userName: {
        type: String,
        required: true
    },

    userSurname: {
        type: String,
        required: true
       
    },

    phoneNumber: {
        type: String,
        required: true
    },

    userTC: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    userBirthday: {
        type: Date,
        required: true
    },

},
    {
        timestamps: true
    });


userSchema.pre("save", function(next){
    const user = this;
    bcrypt.hash(user.password, 10, (err, hash) => {
        user.password = hash;
        next();
    });
});

const User = mongoose.model('User', userSchema);

export default User;