import app from "./app.js";
import dotenv from "dotenv";

dotenv.config({ path: "../config/.env.local" });
import chalk from "chalk";
const port = process.env.PORT || 5000;
import connectDB from "./config/database.js";

connectDB();

app.listen(port, () => {
    console.log(chalk.yellow(`Server listening at http://localhost:${port}`));
});
