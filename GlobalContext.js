import React, { useState, createContext } from "react";

export const GlobalContext = createContext()

export const DataContext = props => {
	const [plate, setPlate] = useState('');
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [header, setHeader] = useState('Watcher, la communauté de veilleurs à votre service pour trouver ou déclarer une immatriculation');

	return (

		<GlobalContext.Provider value={[plate, setPlate, isLoading, setIsLoading, isError, setIsError, header, setHeader]}>
			{props.children}
		</GlobalContext.Provider>

	)
}