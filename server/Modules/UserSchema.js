// ==========Import Mongoose==========
import mongoose from 'mongoose';

// ==========Import bcrypt for Hashing Password==========
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    phone:{
        type: Number,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    created_at:{
        type: Date,
        required: true,
        default: Date.now
    }
});

//============Hasking password here==========
    userSchema.pre('save', async function (next) {
        if (this.isModified('password')) {
            this.password = await bcrypt.hash(this.password, 12);
        }
        next();
    })
//============Hasking password here==========

// ============Assign User To userSchema===========
const User = mongoose.model('Users',userSchema);

// ==========Export User========
export default User;

