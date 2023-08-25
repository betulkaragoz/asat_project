import mongoose from "mongoose";
import bcrypt from "bcrypt";

const { Schema } = mongoose;

const employeeSchema = new Schema({

    userNameE: {
        type: String,
        required: true
    },

    userSurnameE: {
        type: String,
        required: true

    },

    phoneNumberE: {
        type: String,
        required: true
    },

    userTCE: {
        type: String,
        required: true,
        unique: true
    },

    emailE: {
        type: String,
        required: true,
        unique: true
    },

    passwordE: {
        type: String,
        required: true
    },

    userBirthdayE: {
        type: Date,
        required: true
    },

},
    {
        timestamps: true
    });


employeeSchema.pre("save", function (next) {
    const employee = this;
    bcrypt.hash(employee.passwordE, 10, (err, hash) => {
        employee.passwordE = hash;
        next();
    });
});

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;