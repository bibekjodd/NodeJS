import ErrorHandler from "../utils/ErrorHandler.js";

export const catchAsyncError = (passedFunction) => (req, res, next) => {
    Promise.resolve(passedFunction(req, res, next)).catch(next);
};
