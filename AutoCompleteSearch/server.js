const express = require("express");
const bodyparser = require("body-parser");

const path = require("path");
const exphbs = require("express-handlebars");
const app = express();
const mongoose = require("mongoose");
const Model = require("/home/mxnxn/Desktop/AJAX/models/Model");
mongoose.Promise = global.Promise;

//! FOR PUBLIC FOLDER
app.use(express.static(path.join(__dirname, "public")));

//! CONNECT LOCAL MONGODB
mongoose
  .connect("mongodb://localhost:27017/cms")
  .then(db => {
    console.log("MONGO CONNECTED");
  })
  .catch(error => console.log("NOT CONNECTED" + error));

app.use(
  bodyparser.urlencoded({
    extended: true
  })
);

//! BODY PARSING
app.use(bodyparser.json());

//! FOR LOCAL GET REQUEST
app.get("/lol", (req, res) => {
  const data = {
    data: {
      fn: "manan",
      ln: "soni"
    },
    job: "Data from /data using ajax"
  };
  res.send(data);
});

//! AJAX IS GETTING DATA FROM HERE
app.get("/posted/:q", async (req, res) => {
  // var name = req.body.mData;
  var name = req.params.q; //! TO TAKE PARAMS FROM URL
  //! LOCAL DATA WHICH IS NOT COMMING FROM DATABASE
  // data = ["manan", "bclk", "zzzz", "xxxx", "mxnxn", "bcz"];
  // console.log("CALLED POST MATHOD");
  try {
    if (name !== null) {
      //! FOR THAT DATA
      // data.forEach(element => {
      //   if (element.includes(name)) {
      //     res.json(element);
      //   }
      // });
      arr = [];
      Model.createIndexes({ posts: "text" });
      Model.find({ posts: { $regex: new RegExp(name) } }, (err, data) => {
        // res.json(data);
        // console.log(data);
        data.forEach(Element => {
          arr.push(Element.posts);
        });
        console.log(arr); //! WHATS COMMING FROM MONGODB
        res.json(arr);
      });
    }
  } catch (err) {}
});

//! DEFAULT LAYOUT
app.use("/", (req, res) => {
  res.render("layouts/index");
});

//! IT NOT MANDATORY BUT TO EXECUTE HANDLEBARS
app.engine("handlebars", exphbs({ defaultLayout: "index" }));

app.set("view engine", "handlebars");

//! PORT FOR RUN
app.listen(3001, () => {
  console.log("listening");
});
