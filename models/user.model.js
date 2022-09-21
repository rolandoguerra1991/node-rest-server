const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        required: [true, 'user name is required'],
    },
    email: {
        type: String,
        required: [true, 'user email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'user password is required'],
    },
    image: {
        type: String,
    },
    role: {
        type: String,
        required: [true, 'user role is required'],
        enum: ['ROLE_ADMIN', 'ROLE_USER'],
    },
    status: {
        type: Boolean,
        default: true,
    },
    google: {
        type: Boolean,
        default: false,
    },
});

const User = model('User', UserSchema);

module.exports = User;