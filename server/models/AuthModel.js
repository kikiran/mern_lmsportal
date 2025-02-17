import mongoose from 'mongoose';

const AuthModel = [
   {
    email: {
      type: String,
      required: true,
    },
    password: {
        type: String,
        required: true
    }
   }
];

const authSchema = mongoose.model('Auth', AuthModel);

export default authSchema;