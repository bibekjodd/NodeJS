import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
    },

    email: {
        type: String,
        required: [true, "Email is required"],
    },
});

const User = mongoose.model("Users", userSchema);
export default User;
