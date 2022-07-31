import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'
import { Typography, Card, CardContent, Divider } from '@mui/material'

function IncomeExpense() {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map((transaction) => { return transaction.amount })

    const income = amounts.filter((amount) => { return amount > 0 })
        .reduce((current, amount) => { return current += amount }, 0).toFixed(2)

    const expense = Math.abs(amounts.filter((amount) => { return amount < 0 })
        .reduce((current, amount) => { return current += amount }, 0).toFixed(2))

    return (
        <>

            <Card elevation={5} sx={{ maxWidth: "350px", display: "flex" }}>

                <CardContent>
                    <Typography variant="h4">
                        Income
                    </Typography>
                    <Typography variant="h5">
                        ${income}
                    </Typography>
                </CardContent>

                <Divider />

                <CardContent >
                    <Typography variant="h4">
                        Expense
                    </Typography>
                    <Typography variant="h5">
                        ${expense}
                    </Typography>
                </CardContent>

            </Card>

        </>
    )
}
export default IncomeExpense;