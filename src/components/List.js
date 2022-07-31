import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'
import { List, Button, ListItem, ListItemText, Divider } from '@mui/material'


function Lists({ transaction }) {

    const { delTrans } = useContext(GlobalContext);


    return (
        <>
            <List>
                <ListItem className="Items">

                    <ListItemText>
                        {transaction.description}
                    </ListItemText>

                    <ListItemText>
                        ${transaction.amount}
                    </ListItemText>
                    <Button onClick={() => delTrans(transaction.id)} size="small" color="secondary" variant="contained">Delete</Button>
                </ListItem>
                <Divider />
            </List>
        </>
    )
}
export default Lists;