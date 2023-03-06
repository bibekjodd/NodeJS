import chalk from "chalk";
import mongoose from "mongoose";
mongoose.set("strictQuery", true);

export default async function connectDB() {
    try {
        const { connection } = await mongoose.connect(
            "mongodb://localhost:27017/Express-ErrorHandler"
        );
        console.log(chalk.green(`Database connected to ${connection.host}`));
    } catch (error) {
        console.log(chalk.red(`Error connecting database\n ${error}`));
    }
}
