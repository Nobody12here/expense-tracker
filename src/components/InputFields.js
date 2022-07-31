import React, { useState, useContext } from 'react';
import { Input, Button } from '@mui/material';
import { GlobalContext } from '../context/GlobalState';

function InputFields() {
    const [Description, setDescription] = useState('');
    const [Amount, setAmount] = useState(0);
    const { AddTrans } = useContext(GlobalContext)

    const submit = (e) => {
        e.preventDefault()
        const newTransaction = {
            id: Math.floor((Math.random() * 10000)),
            description: Description,
            amount: Number(Amount)
        }
        AddTrans(newTransaction);

    }
    return (
        <>
            <Input className="input" value={Description} onChange={(e) => { setDescription(e.target.value) }}
                placeholder="Enter description" disableUnderline={true}>
            </Input>

            <Input type="number" value={Amount} onChange={(e) => { setAmount(e.target.value) }}
                className="amountInput input" placeholder="Enter Amount" disableUnderline={true}>
            </Input>

            <Button onClick={(e) => { return submit(e) }} className="Button" variant="contained">Submit</Button>
        </>
    )
}
export default InputFields;