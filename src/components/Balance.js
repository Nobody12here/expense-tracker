import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'
import { Typography } from '@mui/material'

function Balance() {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map((trans) => { return trans.amount });
    const balance = amounts.reduce((curr, amount) => { return curr += amount }, 0).toFixed(2);
    return (
        <>
            <Typography mt={2} variant="h5">
                Your balance
            </Typography>
            <Typography variant="h5">
                <b>${balance}</b>
            </Typography>
        </>
    )
}
export default Balance;