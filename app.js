require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const productsRoutes = require("./routes/products");

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Parse JSON bodies

// Routes
app.get("/", (req, res) => {
    res.send("Hi, I am live");
});

app.use("/api/products", productsRoutes);

// Start function to connect to MongoDB and start server
const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("Error starting server:", error.message);
        process.exit(1); // Exit with failure
    }
};

start();