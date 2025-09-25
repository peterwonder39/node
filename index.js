const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const dotenv = require("dotenv")
const ejs = require('ejs');
app.set('view engine', 'ejs'); 
const mongoose = require("mongoose")
const cors = require("cors")
app.use(cors()) 
dotenv.config()
const customerRouter = require("./routes/user.route")
app.use("/",customerRouter)

// Set your bodyparser
// In Node.js, when someone sends data to your server (for example, filling a form and clicking submit), that data doesn’t automatically come as a nice object. Instead, it usually comes in a raw format like a string or buffer.

// Body-parser is like a translator.
// It takes that raw incoming request data and converts it into a usable JavaScript object, so you can easily access it in your code.
// CORS (Cross-Origin Resource Sharing) is a security feature implemented by web browsers to restrict web pages from making requests to a different domain than the one that served the web page. This is done to prevent malicious websites from accessing sensitive data on other domains without permission.
// make sure it is above your route files








let allStudents = [
    { id: 1, name: "John", age: 20 },
    { id: 2, name: "Jane", age: 22 },
    { id: 3, name: "Doe", age: 21 },
    { id: 4, name: "Smith", age: 23 },
    { id: 5, name: "Emily", age: 19 }

]



let musicLink = [
    { id: 1, name: "Song A", artist: "wizkid", link: "https://music.apple.com/us/artist/wizkid/309335750" },
    { id: 2, name: "Song B", artist: "davido", link: "https://music.apple.com/us/artist/davido/254654363" },
    { id: 3, name: "Song C", artist: "burnaboy", link: "https://music.apple.com/us/artist/burna-boy/591899010" },
    { id: 4, name: "Song D", artist: "chris brown", link: "https://music.apple.com/us/artist/chris-brown/95705522" },
    { id: 5, name: "Song E", artist: "tems", link: "https://music.apple.com/us/artist/tems/1413909060" },
    { id: 6, name: "Song f", artist: "rema", link: "https://music.apple.com/us/artist/rema/1304716885" },
    { id: 7, name: "Song g", artist: "ayra star", link: "https://music.apple.com/us/artist/ayra-starr/1536429348" }
]

let URI = "mongodb+srv://peterwonder39:finestwizzy@cluster0.wpvrthi.mongodb.net/new_db?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(URI).then(() => {
    console.log("connected to mongoDB");
})
    .catch((err) => {
        console.log("error connecting to mongoDB", err);
    })

let customerSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: [true, "email already exists please choose another one"] },

    password: { type: String, required: true }
})


let customerModel = mongoose.model("customer", customerSchema)

let allCustomers = [];


// app.post("/register", (req, res) => {
//     console.log(req.body)
//     let newCustomer = new customerModel(req.body)
//     newCustomer.save()
//         .then(() => {
//             res.redirect("/dashboard")
//         })
//         .catch((err) => {
//             console.error("Error saving customer:", err);
//         })

// });






// app.post("/signin", (req, res) => {
//     res.send("confirmed again")
// })



// app.get("/music", (req, res) => {
//     res.send(musicLink)
// })


// app.get("/students", (req, res) => {
//     res.send(allStudents)
// })

app.use("/user",customerRouter)

// app.get("/dashboard", (req, res) => {
//     customerModel.find()
//         .then((data) => {
//             console.log(data)
//             allCustomers = data;

//             res.render("index", { allCustomers })
//         })
//         .catch((err) => {
//             console.error("Error retrieving customers:", err);
//             res.status(500).send("Internal Server Error");
//         });
// })



app.listen("3001", () => {
    console.log("app has started on port 3001");

})