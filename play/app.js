import express from "express";
const app = express();
import userRouter from "./routes/user.js";
import errorMiddleware from "./middlewares/Error.js";

//

app.use("/", userRouter);

app.use(errorMiddleware);

export default app;
