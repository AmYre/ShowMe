import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import MyHeaderButton from './MyHeaderButton';

const Login = props => {

	const [homeText, setHomeText] = useState("Connectez vous");

	function handleButton() {
		setHomeText("Inscrivez vous");
	}

	return (
		<View style={styles.container}>
			<Text style={styles.home_text}>{homeText}</Text>
			<Button title="Change Text" onPress={handleButton} />
		</View>
	);
}

Login.navigationOptions = navData => {
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
		alignItems: "center",
		justifyContent: "center"
	},

	home_text: {
		textAlign: "center"
	}
});


export default Login