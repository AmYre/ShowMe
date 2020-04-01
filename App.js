import React, { useState, useEffect } from "react";
import { Text, View, Button } from "react-native";
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import MainNavigator from "./screens/drawerNavigator";

import { DataContext } from "./GlobalContext";

function getFonts() {
	return Font.loadAsync({
		'Roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
		'Roboto-bold': require('./assets/fonts/Roboto-Bold.ttf'),
		'Roboto-light' : require('./assets/fonts/Roboto-Light.ttf')
	})
};

export default function App() {

	const [fontLoaded, setFontLoaded] = useState(false);

	if (!fontLoaded) { 
		return <AppLoading startAsync={getFonts} onFinish={ () => setFontLoaded(true) } />
	}

	return (
		<DataContext>
			<MainNavigator />
		</DataContext>
		
	);
};