import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { GlobalContext } from "../GlobalContext";

const ShowLastPlate = props => {

	const [homeText, setHomeText] = useState("Recherchez une plaque");
	const [plate, setPlate, isLoading, isError] = useContext(GlobalContext);

	return (
		<View style={styles.container}>
			
			{isLoading ? (<Text>Traitement de l'image en cours...</Text>) : (<Text>La plaque est-elle correct ? {plate}</Text>)}
                
            <Button title="OUI"/>
			<Button title="Reprendre la photo"/>
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


export default ShowLastPlate