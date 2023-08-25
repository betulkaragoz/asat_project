import mongoose from 'mongoose';

const conn = () => {
    mongoose.connect(process.env.DB_URI, {
        dbName : 'asat_project',
        useNewUrlParser : true,
        useUnifiedTopology : true,
    }).then(() => {
        console.log('Connected to the DB succesfully');
    }).catch((err) => {
        console.log(`DB connection error: ${err}`);
    });
};

export default conn;