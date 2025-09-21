import { sql } from "../config/db.js";


export const getTransactionsByUserId =  async (req, res) => {
    try {
        const { userId} = req.params;

       const transactions =  await sql`
            SELECT * FROM transactions WHERE user_id = ${userId} ORDER BY created_at DESC
        `

        res.status(200).json({
            transactions
        })

    } catch (error) {
        console.log("Error creating the tractions", error);
        res.status(500).json({
            message: "Internal Server error"
        })
    }
}

export const createTransactions = async (req, res) => {
    // title,amount , category
    try {

        const { title, amount, category, user_id } = req.body;

        if (!title || !user_id || !category || amount === undefined) {
            return res.status(400).json({
                message: "All fields are required"
            })
        }
        const transaction = await sql`
                INSERT INTO transactions(user_id,title,amount,category)
                VALUES (${user_id},${title},${amount},${category})
                RETURNING *
        `

        res.status(201).json({
            message: "Transaction created successfully",
            transaction: transaction[0]
        })

    } catch (error) {
        console.log("Error creating the tractions", error);
        res.status(500).json({
            message: "Internal Server error"
        })
    }
}

export const deleteTransactions = async (req,res)=>{
    try {
        const {id} =  req.params;

        if(isNaN(parseInt(id))){
            return res.status(400).json({message:"Invalid transaction ID"});
        }

        const result = await  sql`
            DELETE FROM transactions WHERE id = ${id} RETURNING * 
        `
        if(result.length === 0){
            return res.status(404).json({
                message:"Transation not found"
            })
        }

        res.status(200).json({
            message:"Transaction deleted successfully."
        })
    } catch (error) {
        console.log("Error creating the tractions", error);
        res.status(500).json({
            message: "Internal Server error"
        })
    }
}

export const getSumaryByUserId = async (req,res)=>{
    try {
        const {userId} = req.params;

        const balanceResult = await sql`
            SELECT COALESCE(SUM(amount),0) as balance from transactions WHERE user_id = ${userId}
        `

        const incomeResult = await sql`
            SELECT COALESCE(SUM(amount),0) as income from transactions
            WHERE user_id = ${userId} AND amount>0
        `

        const expensesResult = await sql`
            SELECT COALESCE(SUM(amount),0) as expenses FROM transactions
            WHERE user_id = ${userId} AND amount < 0
        `

        res.status(200).json({
            balance: balanceResult[0].balance,
            income:incomeResult[0].income,
            expenses:expensesResult[0].expenses
        })


    } catch (error) {
        console.log("Error geting the summary",error);
        res.status(500).json({message:"Internal server error."})
    }
}



