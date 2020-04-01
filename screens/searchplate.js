import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

const SearchPlate = props => {

	const [homeText, setHomeText] = useState("Recherchez une plaque");
	const [inputVal, setInputVal] = useState('');

	const search = async inputVal => {
		
	};

	return (
		<View style={styles.container}>
			<TextInput
				style={{height: 60}}
				onChangeText={inputVal => setInputVal(inputVal)}
				defaultValue={inputVal}
				placeholder="Tapez la plaque ici ex: DE-672-SK" />
				<Button title="Lancez la recherche" onPress={search} />
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

	home_text: {
		textAlign: "center"
	}
});


export default SearchPlate