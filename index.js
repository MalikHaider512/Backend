const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authentication");

const app = express();

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("Connected to MongoDB");

    // Indexing Logic (Only in development environment)
    if (process.env.NODE_ENV === "development") {
      try {
        await itemModel.createIndexes();
        console.log("Indexes ensured for the Item model.");
      } catch (indexingError) {
        console.error("Error creating indexes:", indexingError);
      }
    }
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error);
  });

// Middleware setup
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes declaration
app.use("/authentication", authRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Backend Response" });
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
