import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { GlobalContext } from "../GlobalContext";

const SearchResult = props => {

	const [plate, setPlate, isLoading, setIsLoading, isError, setIsError, header, setHeader] = useContext(GlobalContext);

	return (
		<View style={styles.container}>
			
			<View style={styles.title}>
				{isLoading ? (
					<Text style={styles.onLoad}>Recherche en cours...</Text>) : (
					<Text style={styles.subtext}>Aucune correspondance existante
						
					</Text>
				)}
			</View>

			<View style={styles.plate}>
				<View style={styles.leftPlate}></View>{!isLoading ? (<Text style={styles.plateNum}>{plate}</Text>) : (<Text style={styles.plateNum}>...</Text>)}<View style={styles.rightPlate}></View>
			</View>
				
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#e2e5ec",
		alignItems: "center",
		justifyContent: "space-around"
	},
		title: {
			textAlign: "center"
		},
			onLoad: {
				textAlign: "center"
			},
			subtext: {
				textAlign: "center",
				fontSize: 18,
		},
	plate: {
		width: "80%",
			flexDirection: "row",
			borderColor: "black",
		borderWidth: 2,
			borderRadius: 5,
		},
	leftPlate: {
				flex: 1,
				width: "10%",
				backgroundColor: "blue"
			},
	plateNum: {
		flex: 8,
		flexDirection: "row",
				textAlign: "center",
				backgroundColor: "white",
				fontSize: 30,
				fontWeight: "bold"
			},
			rightPlate: {
				flex:1,
				width: "10%",
				backgroundColor: "blue"
			},
		buttons: {
			flexDirection: "row",
			width:"80%"
	},
	noButton: {
		flex: 1
	},
	yesButton: {
		flex: 1
}
});


export default SearchResult