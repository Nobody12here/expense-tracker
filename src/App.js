
import React from "react";
import Heading from "./components/Heading"
import Balance from "./components/Balance"
import IncomeExpense from "./components/IncomeExpense"
import ListItems from "./components/ListItems"
import InputFields from "./components/InputFields"
import {Box} from "@mui/material"
import './App.css'
import {GlobalProvider} from './context/GlobalState'
function App() {
    return (
          <GlobalProvider>
            <Box  className="Box">
            <Heading/>
            <Balance/>
            <IncomeExpense/>
            <ListItems/>
            <InputFields/>
            </Box>
            </GlobalProvider>
        
    );
}

export default App;
