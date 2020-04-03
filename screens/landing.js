import React, {useState, useContext, ocrSpaceApi } from "react";
import { StyleSheet, Text, View, Button, Alert, Image, ActivityIndicator, Platform } from "react-native";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import MyHeaderButton from './MyHeaderButton';

import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import * as FileSystem from 'expo-file-system';
import * as Crypto from 'expo-crypto';

import { GlobalContext } from "../GlobalContext";

const Landing = props => {

	const [plate, setPlate, isLoading, setIsLoading, isError, setIsError, header, setHeader] = useContext(GlobalContext);

	const allowCam = async () => {
		const result = await Permissions.askAsync(Permissions.CAMERA)

		if (result.status !== 'granted') {
			Alert.alert('Permission nécessaire', 'Votre permission est nécessaire pour utiliser l\'appareil photo', [{ text: 'Compris' }]);
			return false;
		}

		return true;
	};

	const allowLoc = async () => {
		const result = await Permissions.askAsync(Permissions.LOCATION)

		if (result.status !== 'granted') {
			Alert.alert('Permission localisation nécessaire', 'Votre permission est nécessaire afin d\'aider les services concernés à localiser le véhicule scané', [{ text: 'Compris' }]);
			return false;
		}

		return true;
	};

	const launchCam = async () => {
		const allowedCam = await allowCam();
		const allowedLoc = await allowLoc();
		if (!allowedCam || !allowedLoc ) {
			return;
		}
		const image = await ImagePicker.launchCameraAsync();
		if (image.cancelled) {
			props.navigation.navigate('LandingScreen');
			return;
		}
		const imageFormat = await ImageManipulator.manipulateAsync(image.uri, [{ resize: {width:1000} }], {compress: 1, base64: true});
		let base64Img = `data:image/jpg;base64,${imageFormat.base64}`;

		let data = {
			"file": base64Img,
			"upload_preset": "elkl8a21",
		  }

		fetch('https://api.cloudinary.com/v1_1/amircloud/image/upload', {
			body: JSON.stringify(data),
			headers: {
				'content-type': 'application/json'
			},
			method: 'POST'
		})
			.then(async response => {
				let data = await response.json();

				var myHeaders = new Headers();
				myHeaders.append("apikey", "739498b88588957");
				myHeaders.append('Accept', 'image / jpg');
		
				var formdata = new FormData();
				formdata.append("language", "fre");
				formdata.append("isOverlayRequired", "false");
				formdata.append("filetype", "jpg");
				formdata.append("url", data.url);
				formdata.append("iscreatesearchablepdf", "false");
				formdata.append("issearchablepdfhidetextlayer", "false");
				formdata.append("OCREngine", "2");

				var requestOptions = {
					method: 'POST',
					headers: myHeaders,
					body: formdata,
					redirect: 'follow'
				};

				fetch("https://api.ocr.space/parse/image", requestOptions)
					.then(response => response.text())
					.then(async result => {
						const location = await Location.getCurrentPositionAsync();
						if ((JSON.parse(result).ParsedResults[0].ParsedText == '')||
						(JSON.parse(result).ParsedResults[0].ParsedText == undefined)) {
							const screen = await props.navigation.navigate('LastPlateScreen');
							setIsError(true)
						} else {
							fetch('https://a-mir-pi.herokuapp.com/plates', {
								method: 'post',
								headers: {
									'Accept': 'application/json, text/plain, */*',
									'Content-Type': 'application/json'
								},
								body: JSON.stringify({
									num: JSON.parse(result).ParsedResults[0].ParsedText,
									long: location.coords['latitude'],
									lat: location.coords['longitude'],
									date: new Date()
								})
							}).catch(err => { console.log(err); setIsError(true) });
							setPlate(JSON.parse(result).ParsedResults[0].ParsedText);
							setIsLoading(false);
						}

					}).catch(err => { console.log(err); setIsError(true) });
						
			}).catch(err => { console.log(err); setIsError(true) });
		
		
		const screen = await props.navigation.navigate('LastPlateScreen');
	};

	return (
		<View style={styles.container}>

			<View style={styles.header}>
				<Text style={styles.headerText}>{header}</Text>
			</View>
			
			<View style={styles.tileCam}>
				<Image source={require('../assets/camera.png')} style={{width: 300,height: 180}} />
				<Button title="Plaque" color="#e2e5ec" onPress={launchCam} />
			</View>
			
			<View style={styles.tileSearch}>
				<Image source={require('../assets/search.png')} style={{width: 300,height: 150}} />
				<Button title="Rechercher" color="#e2e5ec" onPress={() => props.navigation.navigate('SearchScreen')} />
			</View>
		</View>
	);
}

Landing.navigationOptions = navData => {
	return {
	  headerLeft: (
		<HeaderButtons HeaderButtonComponent={MyHeaderButton}>
		  <Item
			title="Menu"
			iconName="ios-menu"
			onPress={() => {
			  navData.navigation.toggleDrawer();
			}}
		  />
		</HeaderButtons>
	  )
	};
  };

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#e2e5ec",
		justifyContent: "space-around",
		alignItems: "center"
	},
	header: {
		width: "90%"
	},
	headerText: {
		fontSize: 20,
		textAlign: "center",
		color:"white",
		fontWeight:'bold'
	},
	tileCam: {
		width: "70%"
	},
	tileSearch: {
		width:"70%"
	},
});

export default Landing