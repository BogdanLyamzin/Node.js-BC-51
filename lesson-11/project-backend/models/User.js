import {Schema, model} from "mongoose";

import {handleSaveError, allowUpdateValidate} from "./hooks/index.js";

import { emailRegexp } from "../constants/user-contansts.js";

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        match: emailRegexp,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        minlength: 6,
        required: true,
    },
    token: {
        type: String,
    },
    verify: {
        type: Boolean,
        default: false,
    },
    verificationCode: {
        type: String,
    }
}, {versionKey: false, timestamps: true});

userSchema.pre("findOneAndUpdate", allowUpdateValidate);

userSchema.post("save", handleSaveError);

userSchema.post("findOneAndUpdate", handleSaveError);

const User = model("user", userSchema);

export default User;