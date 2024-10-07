const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, unique: true },
    password: { type: String, required: true }
})

UserSchema.pre("save", () => {
    // usar bcrypt aqui!!
})

module.exports = mongoose.model("User", UserSchema);
