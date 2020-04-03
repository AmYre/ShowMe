import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, Button, Image, ActivityIndicator } from "react-native";
import { GlobalContext } from "../GlobalContext";

const SearchResult = props => {

	const [plate, setPlate, isLoading, setIsLoading, isError, setIsError, header, setHeader, result, setResult, date, setDate, long, setLong, lat, setLat, address, setAddress] = useContext(GlobalContext);

	const backButton = () => {
		setIsLoading(true);
		setIsError(false);
		props.navigation.navigate('SearchScreen')
	}

	return (
		<View style={styles.container}>

			{isError ? (
				<View style={styles.container}>
					<View style={styles.errorWrap}>
						<Text style={styles.errorText}>Désolé, aucune correspondance n'a été trouvée pour votre recherche</Text>
					</View>

					<View style={styles.img}>
						<Image source={require('../assets/error.png')} style={{ width: 400, height: 400 }} />
					</View>

					<View style={styles.buttons}>
						<View style={styles.noButton}><Button color="#de2828" title="Revenir" onPress={backButton} /></View>
					</View>
				</View>
			
			) : isLoading ? (
					<View style={styles.container}>
						<Text style={styles.onLoad}>Recherche de correspondance en cours...</Text>
						<ActivityIndicator size="large" color="#4066C7" />
					</View>
				) : (

					<View style={styles.container}>
						<View style={styles.title}>
							<Text style={styles.title}>Une correspondance à été trouvée :</Text>
						</View>
		
						<View style={styles.plate}>
							<View style={styles.leftPlate}></View>
							<Text style={styles.plateNum}>{result}</Text>
							<View style={styles.rightPlate}></View>
						</View>

						<View>
							<Text style={styles.address}><Text style={styles.title}>Localisation :</Text> {address}</Text>
						</View>

						<View style={styles.buttons}>
							<View style={styles.noButton}><Button color="#4066C7" title="Revenir" onPress={backButton} /></View>
						</View>
					</View>
			)}
				
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
			width: "80%",
			fontSize: 18,
		textAlign: "center",
		color:"white",
		fontWeight:'bold'
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
},errorWrap: {
	flexDirection: "row",
	width: "80%",
	justifyContent:"space-between",
	alignItems:"center"
},
errorText: {
		textAlign: "center",
		fontSize: 18,
		color:"white",
	fontWeight: "bold"
}
});


export default SearchResult