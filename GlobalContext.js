import React, { useState, useEffect, createContext } from "react";
import axios from 'axios';

export const GlobalContext = createContext()

export const DataContext = props => {
	const [plate, setPlate] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

/* 	useEffect( () => {
		axios.get('https://a-mir-pi.herokuapp.com/plates')
			.then(response => {setPlate(response.data[0].num);setIsLoading(false)} )
			.catch(err => setIsError(true))
	}, []); */


	return (

		<GlobalContext.Provider value={[plate, setPlate, isLoading, setIsLoading, isError, setIsError]}>
			{props.children}
		</GlobalContext.Provider>

	)
}