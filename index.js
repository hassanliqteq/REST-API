const express = require("express");
const path = require("path");
//Initiallization of the App
const app = express();
const PORT = 3000;
const fs = require("fs");
const cors = require("cors");
const data = fs.readFileSync(path.join(__dirname, "text.txt")).toString();

//Event Emitter
// const EventEmitter = require("events");
// const emitter = new EventEmitter();

// emitter.on("log", () => {
//   console.log("You just consoled!");
// });

// emitter.emit("log");

var whitelist = ["https://www.google.com", "https://localhost:3000"];
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
};

// app.use(cors(corsOptions));

app.get("/", cors(corsOptions), (req, res) => {
  res.send(data);
});

app.listen(PORT, () => console.log(`Server Started at Port: ${PORT}`));

// app.use((req, res, next) => {
//   const text = Editor(data, "Asmar", 20);
//   next(text);
// });

// app.use((req, res) => {
//   try {
//     const writeData = async () => {
//       const data = await (
//         await fsPromise.readFile(path.join(__dirname, "text.txt"))
//       ).toString();
//       console.log("Here:\n", data);
//     };
//     writeData();
//   } catch (error) {
//     console.error(error);
//   }
//   //   const data = fs.readFileSync(path.join(__dirname, "text.txt")).toString();
//   //   console.log(text);
// });

//Route Handlers
// app.get(
//   "/*",
//   (req, res, next) => {
//     console.log("Here!");
//     next();
//   },

//   (req, res) => {
//     console.log("Here now!");
//   }
// );

//Route Handlers 2

// let count = 0;
// //Middleware ( Kind of )
// const one = (req, res, next) => {
//   console.log("One");
//   count += 1;
//   next();
// };
// const two = (req, res, next) => {
//   console.log("Two");
//   count += 1;
//   next();
// };
// const three = (req, res) => {
//   count += 1;
//   console.log("Count: ", count);
// };

// app.get("/", [one, two, three]);
