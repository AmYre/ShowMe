import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";
import { GlobalContext } from "../GlobalContext";

const SearchPlate = props => {

	const [plate, setPlate, isLoading, setIsLoading, isError, setIsError, header, setHeader, result, setResult, date, setDate, long, setLong, lat, setLat, address, setAddress] = useContext(GlobalContext);
	const [inputVal, setInputVal] = useState('');

	const search = () => {
		fetch(`https://a-mir-pi.herokuapp.com/search/${inputVal}`)
			.then(response => response.json())
			.then(result => {
				props.navigation.navigate('SearchResultScreen');

				if ( (result.num !== null) || (result.long !== null) ) {
					fetch(`https://api.opencagedata.com/geocode/v1/json?key=9b58345250c04bd28d80090c442dacca&q=${result.long}+${result.lat}`)
					.then(res => res.text())
					.then(geo => {
						let obj = JSON.parse(geo)
						setAddress(obj.results[0].formatted);
					})
					.catch(error => { console.log(error); setIsError(true) });

					setResult(result.num);
					setDate(result.date);
					setIsLoading(false);

				} else { setIsError(true) }
				
			}).catch(error => { console.log(error); setIsError(true) });
	};

	return (
		<View style={styles.container}>
			<View><Image source={require('../assets/search.png')} style={{width: 300,height: 150}} /></View>
			<TextInput
				style={styles.input}
				onChangeText={inputVal => setInputVal(inputVal)}
				defaultValue={inputVal}
				placeholder="Tapez la plaque ici sans tirets - ex: DE672SK" />
				<Button title="Lancez la recherche" color="#4066C7" onPress={search} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#e2e5ec",
		alignItems: "center",
		justifyContent: "center"
	},
	input: {
		width:"90%",
		height: 160,
		fontSize: 18,
		textAlign:"center"
	},
	home_text: {
		textAlign: "center"
	}
});


export default SearchPlate