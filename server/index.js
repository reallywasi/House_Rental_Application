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




// const express = require("express");
// const app = express();

// const listingRoutes=require("./routes/listing.js")
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const authRoutes= require("./routes/auth.js")
// dotenv.config();
// const cors = require("cors");


// app.use("/properties",listingRoutes)
// app.use(cors());
// app.use(express.json());
// app.use(express.static("public"));


// //ROUTES
// app.use("/auth",authRoutes);






// // Check if the MONGO_URL is correctly loaded
// console.log("MONGO_URL:", process.env.MONGO_URL);

// /* MONGOOSE SETUP */
// const PORT = 3001;
// mongoose
//   .connect(process.env.MONGO_URL, {
//     dbName: "Home_Rental_Application",
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
//   })
//   .catch((err) => console.log(`${err} did not connect`));


const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const listingRoutes = require("./routes/listing.js");
const authRoutes = require("./routes/auth.js");

dotenv.config();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json());
app.use(express.static("public"));

// Routes
app.use("/auth", authRoutes);
app.use("/properties", listingRoutes);

// MongoDB connection
const PORT = process.env.PORT || 3001; // Use the provided PORT from environment or default to 3001

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "Home_Rental_Application",
  })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(`Error connecting to MongoDB: ${err}`));
