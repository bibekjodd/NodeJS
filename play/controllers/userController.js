import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import User from "../model/User.js";
import ErrorHandler from "../utils/ErrorHandler.js";

export const newUser = catchAsyncError(async (req, res, next) => {
    const userExist = false;
    if (userExist) return next(new ErrorHandler("User already exists", 400));

    await User.create({
        name: "Bibek Signs",
        email: "bibeksigns@gmail.com",
    });

    res.status(201).json({ message: "New User created" });
});
