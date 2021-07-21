// Calling in the dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

// Getting routers
const projectRouter = require("./routes/project");

// Initializing the app
const app = express();

// Setting up mongoose connection
const uri = "mongodb://localhost:27017/brwd";

mongoose
  .connect(uri, {
    useNewUrlParser: true,

    useCreateIndex: true,

    useUnifiedTopology: true,

    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err.message);
  });

// Cross origin resource sharing
app.use(cors());

// Configuring the app
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Devtool for logging the requests
app.use(morgan("dev"));

// Serving static files
app.use(express.static(`${__dirname}/public`));
app.use(express.static(`${__dirname}/static`));
app.use("/static", express.static(`${__dirname}/static`));
app.use(express.static(`${__dirname}/Exhibition`));
app.use("/Exhibition", express.static(`${__dirname}/Exhibition`));

// Setting view engine
app.set("view engine", "ejs");

// Setting up the routes
app.get('/', (req, res) => {
    res.render('home');
});
app.get('/about', (req, res) => {
    res.render('about');
});
app.use('/projects', projectRouter);

app.listen(3000, process.env.IP, () => {
    console.log(`Server started at http://localhost:3000/`);
});
