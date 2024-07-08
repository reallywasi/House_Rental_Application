// const router = require("express").Router();
// const multer = require("multer");

// const Listing = require("../models/Listing");
// const User = require("../models/User")

// /* Configuration Multer for File Upload */
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "public/uploads/"); // Store uploaded files in the 'uploads' folder
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname); // Use the original file name
//   },
// });

// const upload = multer({ storage });

// /* CREATE LISTING  API SetUp*/
// router.post("/create", upload.array("listingPhotos"), async (req, res) => {
//   try {
//     /* Take the information from the form */
//     const {
//       creator,
//       category,
//       type,
//       streetAddress,
//       aptSuite,
//       city,
//       province,
//       country,
//       guestCount,
//       bedroomCount,
//       bedCount,
//       bathroomCount,
//       amenities,
//       title,
//       description,
//       highlight,
//       highlightDesc,
//       price,
//     } = req.body;
//     const listingPhotos = req.files

//     if (!listingPhotos) {
//       return res.status(400).send("No file uploaded.")
//     }

//     const listingPhotoPaths = listingPhotos.map((file) => file.path)

//     const newListing = new Listing({
//       creator,
//       category,
//       type,
//       streetAddress,
//       aptSuite,
//       city,
//       province,
//       country,
//       guestCount,
//       bedroomCount,
//       bedCount,
//       bathroomCount,
//       amenities,
//       listingPhotoPaths,
//       title,
//       description,
//       highlight,
//       highlightDesc,
//       price,
//     })

//     await newListing.save()

//     res.status(200).json(newListing)
//   } catch (err) {
//     res.status(409).json({ message: "Fail to create Listing", error: err.message })
//     console.log(err)
//   }
// });

// /* GET lISTINGS BY CATEGORY */
// router.get("/", async (req, res) => {
//   const qCategory = req.query.category

//   try {
//     let listings
//     if (qCategory) {
//       listings = await Listing.find({ category: qCategory }).populate("creator")
//     } else {
//       listings = await Listing.find().populate("creator")
//     }

//     res.status(200).json(listings)
//   } catch (err) {
//     res.status(404).json({ message: "Fail to fetch listings", error: err.message })
//     console.log(err)
//   }
// })

// /* GET LISTINGS BY SEARCH */
// router.get("/search/:search", async (req, res) => {
//   const { search } = req.params

//   try {
//     let listings = []

//     if (search === "all") {
//       listings = await Listing.find().populate("creator")
//     } else {
//       listings = await Listing.find({
//         $or: [
//           { category: {$regex: search, $options: "i" } },
//           { title: {$regex: search, $options: "i" } },
//         ]
//       }).populate("creator")
//     }

//     res.status(200).json(listings)
//   } catch (err) {
//     res.status(404).json({ message: "Fail to fetch listings", error: err.message })
//     console.log(err)
//   }
// })

// /* LISTING DETAILS */
// router.get("/:listingId", async (req, res) => {
//   try {
//     const { listingId } = req.params
//     const listing = await Listing.findById(listingId).populate("creator")
//     res.status(202).json(listing)
//   } catch (err) {
//     res.status(404).json({ message: "Listing can not found!", error: err.message })
//   }
// })

// module.exports = router

// // router.post()


const router = require("express").Router();
const multer = require("multer");
const Listing = require("../models/Listing");

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

// POST - Create a new listing
router.post("/create", upload.array("listingPhotos"), async (req, res) => {
  try {
    const {
      creator,
      category,
      type,
      streetAddress,
      aptSuite,
      city,
      province,
      country,
      guestCount,
      bedroomCount,
      bedCount,
      bathroomCount,
      amenities,
      title,
      description,
      highlight,
      highlightDesc,
      price,
    } = req.body;

    const listingPhotos = req.files.map((file) => file.path);

    const newListing = new Listing({
      creator,
      category,
      type,
      streetAddress,
      aptSuite,
      city,
      province,
      country,
      guestCount,
      bedroomCount,
      bedCount,
      bathroomCount,
      amenities,
      listingPhotoPaths: listingPhotos,
      title,
      description,
      highlight,
      highlightDesc,
      price,
    });

    await newListing.save()

    res.status(200).json(newListing)
  } catch (err) {
    res.status(409).json({ message: "Fail to create Listing", error: err.message })
    console.log(err)
  }
});

//_________________________________________________________________________________________

// GET - Fetch listings by category
router.get("/", async (req, res) => {
  const qcategory  = req.query.category;

  try {
    let listings;

    if (qcategory) {
      listings = await Listing.find({ category:qcategory }).populate("creator");
    } else {
      listings = await Listing.find().populate("creator");
    }

    res.status(200).json(listings);
  } catch (error) {
    console.error("Error fetching listings:", error.message);
    res.status(400).json({ error: "Failed to fetch listings" });
  }
});


//____________________________________________________________

// GET - Search listings by category or title
router.get("/search/:search", async (req, res) => {
  const { search } = req.params;

  try {
    let listings=[];

    if (search === "all") {
      listings = await Listing.find().populate("creator");
    } else {
      listings = await Listing.find({
        $or: [
          { category: { $regex: search, $options: "i" } },
          { title: { $regex: search, $options: "i" } },
        ],
      }).populate("creator");
    }

    res.status(200).json(listings);
  } catch (error) {
    console.error("Error searching listings:", error.message);
    res.status(404).json({ error: "Failed to search listings" });
  }
});



//__________________________________________________________________

//  LISTING DETAILS 

// router.get("/:listingId", async (req, res) => {
//   const { listingId } = req.params;

//   try {
//     const listing = await Listing.findById(listingId).populate("creator");

//     if (!listing) {
//       return res.status(404).json({ error: "Listing not found" });
//     }

//     res.status(200).json(listing);
//   } catch (error) {
//     console.error("Error fetching listing details:", error.message);
//     res.status(404).json({ error: "Failed to fetch listing details" });
//   }
// });


// router.get("/:listingId", async (req, res) => {
//   try {
//     const { listingId } = req.params
//     const listing = await Listing.findById(listingId)
//     res.status(202).json(listing)
//   } catch (err) {
//     res.status(404).json({ message: "Listing can not found!", error: err.message })
//   }
// })
//fewigfewgfl shflg lige ihew dfssfdsf
// GET - Get listing details by ID
router.get("/:listingId", async (req, res) => {
  try {
    const { listingId } = req.params;
    const listing = await Listing.findById(listingId).populate("creator");

    if (!listing) {
      return res.status(404).json({ error: "Listing not found" });
    }

    res.status(200).json(listing);
  } catch (error) {
    console.error("Error fetching listing details:", error.message);
    res.status(404).json({ error: "Failed to fetch listing details" });
  }
});




//______________________________________________________
module.exports = router;
