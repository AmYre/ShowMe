import React, { useState, createContext } from "react";

export const GlobalContext = createContext()

export const DataContext = props => {
	const [plate, setPlate] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [header, setHeader] = useState('Watcher, la communauté de veilleurs à votre service pour trouver ou déclarer une immatriculation');
	const [result, setResult] = useState('');
	const [date, setDate] = useState('');
	const [long, setLong] = useState('');
	const [lat, setLat] = useState('');
	const [address, setAddress] = useState('');

	return (

		<GlobalContext.Provider value={[plate, setPlate, isLoading, setIsLoading, isError, setIsError, header, setHeader, result, setResult, date, setDate, long, setLong, lat, setLat, address, setAddress]}>
			{props.children}
		</GlobalContext.Provider>

	)
}