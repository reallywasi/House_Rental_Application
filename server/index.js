// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const dotenv = require("dotenv").config();
// const cors = require("cors");

// app.use(cors());
// app.use(express.json());
// // const userRoutes = require("public")



// /* MONGOOSE SETUP */
// const PORT = 3001;
// mongoose
//   .connect(process.env.MONGO_URL, {
//     dbName: "Dream_Nest",
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
//   })
//   .catch((err) => console.log(`${err} did not connect`));




const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes= require("./routes/auth.js")
dotenv.config();
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


//ROUTES
app.use("/auth",authRoutes);






// Check if the MONGO_URL is correctly loaded
console.log("MONGO_URL:", process.env.MONGO_URL);

/* MONGOOSE SETUP */
const PORT = 3001;
mongoose
  .connect(process.env.MONGO_URL, {
    dbName: "Home_Rental_Application",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((err) => console.log(`${err} did not connect`));
