// import express from "express"; // set "type": "module" in package.json
import express from "express"
import cors from "cors"
import bodyParser from "body-parser";


const app = express();
const port = 3000;

app.use(cors()); // allow cross origin resource sharing

// // parse application/json
// app.use(bodyParser.json());

// 1. Middleware to parse JSON bodies
app.use(express.json());

/* default GET request */
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.post("/", (req, res) => {
    const username = req.body.username;
    console.log("Request Recieved from user:", username);
    const mssg = `User ${username} is successfully Authenticated`
    res.send(JSON.stringify(mssg));
});


app.listen(port, () => {
    console.log(`app listening on http://localhost:${port}`);
});