import express from "express";
import mongoose from "mongoose";
import { newUser } from "../controllers/userController.js";
const router = express.Router();
const User = mongoose.model(
    "User",
    new mongoose.Schema({
        name: {
            type: String,
            required: [true, "Name is mandatory"],
        },

        email: {
            type: String,
            required: [true, "Email is mandatory"],
            unique: true,
        },
    })
);

router.get("/user", newUser);

export default router;
