const express = require("express");
require("colors");
const path = require("path");
const cors = require("cors");

// app
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// multer
const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "Images");
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname));
    },
});
const upload = multer({
    storage,
});

// routes
app.get("/", (req, res) => {
    res.json({
        message: "Api is working fine",
    });
});

app.post("/upload", upload.single("image"), (req, res) => {
    res.json({
        message: "image uploaded successfully",
    });
});

app.listen(5000, () => {
    console.log(`Server listening at http://localhost:5000`.yellow);
});
