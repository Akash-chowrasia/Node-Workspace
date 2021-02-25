import mongoose from "mongoose";

const schema = mongoose.Schema({

    name: { type: String, require: true},
    email: { type: String, require: true},
    password:{ type: String, require: true},
    mobile:{ type: Number }

});


export const userModel = mongoose.model("user", schema);
