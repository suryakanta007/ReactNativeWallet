import express from "express";
import { createTransactions, deleteTransactions, getSumaryByUserId, getTransactionsByUserId } from "../controllers/transactions.controllers.js";

const router = express.Router();

router.get("/:userId",getTransactionsByUserId);

router.post("/",createTransactions);

router.delete("/:id",deleteTransactions);

router.get("/summary/:userId",getSumaryByUserId);

export default router;