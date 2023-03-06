const express = require("express");
const { connectDB, User } = require("./database");
const ejs = require("ejs");
const passport = require("passport");
const { intializingPassport, isAuthenticated } = require("./passportConfig");
const expressSession = require("express-session");
//
//
intializingPassport(passport);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB();
app.use(
    expressSession({
        secret: "secret",
        resave: false,
        saveUninitialized: false,
    })
);
app.use(passport.initialize());
app.use(passport.session());

app.set("view engine", "ejs");

app.get("/", isAuthenticated, (req, res) => {
    res.render("index");
});
app.get("/register", (req, res) => {
    res.render("register");
});
app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/profile", isAuthenticated, (req, res) => {
    res.render("profile");
    // res.send(req.user);
});

app.get("/logout", (req, res) => {
    req.logout((err) => {
        if (err) return next(err);
        res.redirect("/login");
    });
});

app.post("/register", async (req, res) => {
    const { name, username, password } = req.body;
    const user = await User.findOne({ username });

    try {
        if (user) return res.status(400).send("User Already Exist");

        const newUser = await User.create({
            name,
            username,
            password,
        });

        // res.status(201).send(newUser);
        req.login(newUser, function (err) {
            if (err) {
                throw err;
            }
            // session saved
        });
        res.redirect("/profile");
    } catch (error) {
        res.status(400).json({
            message: error.message,
        });
    }
});

app.post(
    "/login",
    passport.authenticate("local", {
        failureRedirect: "/register",
        successRedirect: "/profile",
    }),
    async (req, res) => {
        res.send("hi");
    }
);

app.listen(3000, () => {
    console.log(`Server listening at http://localhost:3000`);
});
