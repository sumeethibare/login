
//-----------Step Zero----------------------------------------------------------

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.listen(3000, () => {
    console.log("applicaiton started and listening on the port 3000");
});


// ----------the Step 1-------------------------------------------------------


// app.get("/",(req,res)=>{
//     res.send('<html><body><h1>This is an example of the page is running at the desired server</h1></body></html>');
// });

//------------- Step 2-------------------------------------------------------

// app.get('/',(req,res)=>{
//     console.log(__dirname)
// })


app.use(express.static(__dirname));


app.use(bodyParser.urlencoded({ extended: true }))


// ----------------Step 3------------------------------------------------

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

// ---------Step 5 ---------------------------------

// app.post("/", (req, res) => {
//     res.send("thankyou for subscribing");
// });


// app.post("/", (req,res)=>{
//     console.log(req.body)
// });

// --------- The Final Step -----------------------

app.post("/",(req,res)=>{
    var subName = req.body.yourname;
    var subEmail = req.body.youremail;
    res.send("hello ,"+subName+ "Thankyou For Subscribing. Your Email is ," +subEmail);
});