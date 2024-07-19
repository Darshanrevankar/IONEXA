import mongoose from 'mongoose';

const userModel = new mongoose.Schema({
    name: {
        type: String,
    },
    phoneNo: {
        type: String,
    },
    amount: {
        type: Number,
    },
}, {
    timestamps: true,
});

const UserModel = mongoose.model('User', userModel);

export default UserModel;
