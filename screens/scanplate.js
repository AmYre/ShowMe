import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import * as ImagePicker from 'expo-image-picker';

const ScanPlate = props => {

	const [homeText, setHomeText] = useState("Scannez votre plaque");

	function handleButton() {
		ImagePicker.launchCameraAsync();
	}

	return (
		<View style={styles.container}>
			<Text style={styles.home_text}>{homeText}</Text>
			<Button title="Change Text" onPress={handleButton} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		alignItems: "center",
		justifyContent: "center"
	},

	home_text: {
		textAlign: "center"
	}
});


export default ScanPlate