const mongoose = require("mongoose");

connectDB = () => {
    mongoose.set("strictQuery", true);
    mongoose
        .connect("mongodb://localhost:27017/passport")
        .then((res) => {
            console.log(
                `Database connection established on ${res.connection.host}`
            );
        })
        .catch((err) => {
            console.log("Error connection database", err);
        });
};

const userSchema = new mongoose.Schema(
    {
        name: String,
        username: { type: String, required: true, unique: true },
        password: String,
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = {
    connectDB,
    User,
};
