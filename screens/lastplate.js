import React, { useContext } from "react";
import { StyleSheet, Text, View, Image, Button, ActivityIndicator } from "react-native";
import { GlobalContext } from "../GlobalContext";

const ShowLastPlate = props => {

	const [plate, setPlate, isLoading, setIsLoading, isError, setIsError, header, setHeader] = useContext(GlobalContext);

	const yesButton = () => {
		setPlate('');
		setIsLoading(true);
		setHeader('Merci, la plaque à bien été envoyée');
		props.navigation.navigate('LandingScreen')
	}
	
	const noButton = () => {
		setPlate('');
		setIsLoading(true);
		setIsError(false);
		setHeader('Assurez vous d\'isoler au maximum les chiffres de la plaque d\'éventuelles nuisances visuelles');
		props.navigation.navigate('LandingScreen')
	}

	return (
		<View style={styles.container}>

			{isError ? (
				<View style={styles.container}>
					<View style={styles.title}>
						<Text style={styles.subtext}>Désolé, nous n'avons pas pu traiter votre photo correctement.
						Veuillez réessayer.</Text>
					</View>

					<View style={styles.img}>
						<Image source={require('../assets/error.png')} style={{ width: 400, height: 400 }} />
					</View>

					<View style={styles.buttons}>
						<View style={styles.noButton}><Button color="#de2828" title="Revenir" onPress={noButton} /></View>
					</View>
				</View>
					
			) : isLoading ? (
				<View style={styles.container}>
					<View style={styles.title}>
						<Text style={styles.onLoad}>Traitement de l'image en cours...</Text>
					</View>

					<View>
						<ActivityIndicator size="large" color="#4066C7" />
					</View>
				</View>
			) : (
						<View style={styles.container}>
							<View style={styles.title}>
								<Text style={styles.title}>La plaque est-elle correcte ?</Text>
							</View>
			
							<View style={styles.plate}>
								<View style={styles.leftPlate}></View>
								<Text style={styles.plateNum}>{plate}</Text>
								<View style={styles.rightPlate}></View>
							</View>

							<View style={styles.buttons}>
								<View style={styles.noButton}><Button color="grey" title="Revenir" onPress={noButton} /></View>
								<View style={styles.yesButton}><Button color="#4066C7" title="Envoyer" onPress={yesButton} /></View>
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
			width:"90%",
			textAlign: "center",
			fontSize: 18,
			color:"white",
		fontWeight: "bold",
			letterSpacing:2
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
				backgroundColor: "#4066C7"
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
				backgroundColor: "#4066C7"
			},
	buttons: {
			flexDirection: "row",
			width: "75%",
			justifyContent:"space-between",
			alignItems:"center"
	},
	noButton: {
		width:150
	},
	yesButton: {
		width:150
}
});


export default ShowLastPlate