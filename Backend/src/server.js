import express from "express";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import transactionsRoutes from "./Routes/transactionsRoutes.js";
import { initDB } from "./config/db.js";
import cors from "cors"
import job from "./config/cron.js";

dotenv.config();


const app = express();
const PORT = process.env.PORT || 6000;

if(process.env.NODE_ENV === "production")job.start();



app.use(cors({origin:"http://localhost:8081"}))
app.use(express.json());
app.use(rateLimiter);



app.get("/api/health", (req, res) => {
    res.status(200).json({status:"ok"})
})

app.use("/api/transactions",transactionsRoutes);


initDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        })
    })
