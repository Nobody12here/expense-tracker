import { React, createContext, useReducer } from 'react';
import AppReducer from './AppReducer'
const initialState = {
	transactions: [
		{ id: 0, description: "Rent", amount: -500 },
		{ id: 1, description: "Savings", amount: 1000 },
		{ id: 2, description: "Tax", amount: 120 }

	]
}
const GlobalContext = createContext(initialState);

const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);
	function delTrans(id) {
		dispatch({
			type: 'DELETE_TRANS',
			payload: id
		})

	}
	function AddTrans(transaction) {
		dispatch({
			type: 'ADD_TRANS',
			payload: transaction
		})
	}

	return (
		<GlobalContext.Provider value={{ transactions: state.transactions, delTrans, AddTrans }}>
			{children}
		</GlobalContext.Provider>
	);
}
export { GlobalProvider, GlobalContext };