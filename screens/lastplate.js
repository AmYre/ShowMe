import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { GlobalContext } from "../GlobalContext";

const ShowLastPlate = props => {

	const [title, setTitle] = useState("Vérifiez la plaque");
	const [plate, setPlate, isLoading, isError] = useContext(GlobalContext);

	return (
		<View style={styles.container}>
			
			<View style={styles.title}>
				<Text>{title}</Text>
			</View>
			

			<View style={styles.content}>
				{isLoading ? (
					<Text style={styles.onLoad}>Traitement de l'image en cours...</Text>) : (
					<Text style={styles.subtext}>La plaque est-elle correct ?
						<Text style={styles.plate}>{plate}</Text>
					</Text>
				)}
					
				<Button title="OUI"/>
				<Button title="Reprendre la photo"/>
			</View>
				
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