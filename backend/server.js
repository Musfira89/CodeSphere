// server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from './mongoConnect.js';  // DB connection
// import authRoutes from './routes/auth.js';


dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: ["http://localhost:5173", "https://www.xtremeft.com"],
  methods: ["GET", "POST"],
  credentials: true 
}));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use("/uploads", express.static("uploads"));


// app.use(express.json({ limit: "50mb" }));
// app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Connect to DB
connectDB();

// Routes
// app.use('/api/auth', authRoutes);


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
