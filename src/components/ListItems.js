import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'
import Lists from "./List.js"



function ListsItems() {
    const { transactions } = useContext(GlobalContext);
    return (
        <>
            {
                transactions.map((transaction) => {
                    return (
                        <Lists key={transaction.id} transaction={transaction} />
                    )
                })
            }
        </>
    );
}
export default ListsItems;