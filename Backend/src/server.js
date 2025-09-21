import express from "express";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
import transactionsRoutes from "./Routes/transactionsRoutes.js";
import { initDB } from "./config/db.js";


dotenv.config();


const app = express();
const PORT = process.env.PORT || 6000;




app.use(express.json());
app.use(rateLimiter);



app.get("/", (req, res) => {
    res.send("Hello from the server");
})

app.use("/api/transactions",transactionsRoutes);


initDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        })
    })
