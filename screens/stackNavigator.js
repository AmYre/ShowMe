import React, { useState } from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Landing from './landing';
import ScanPlate from './scanplate';
import SearchPlate from './searchplate';
import ShowLastPlate from './lastplate';
import SearchResult from './searchresult';
import Login from './login';
import About from './about';


const StackNavigator = createStackNavigator({
    LandingScreen: {
        screen: Landing,
        navigationOptions: {
            headerTitle: 'Accueil',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#e2e5ec'
            }
          }
    },
    LoginScreen: {
        screen: Login,
        navigationOptions: {
            headerTitle: 'Login',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#e2e5ec'
            }
        }
    },
    AboutScreen: {
        screen: About,
        navigationOptions: {
            headerTitle: 'En savoir plus',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#e2e5ec'
            }
        }
    },
    ScanPlateScreen: {
        screen: ScanPlate,
        navigationOptions: {
            headerTitle: 'Scannez une plaque',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#e2e5ec'
            }
        }
    },
    SearchScreen: {
        screen: SearchPlate,
        navigationOptions: {
            headerTitle: 'Recherchez une plaque',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#e2e5ec'
            }
        }
    },
    LastPlateScreen: {
        screen: ShowLastPlate,
        navigationOptions: {
            headerTitle: 'Confirmez le numéro de plaque',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#e2e5ec'
            }
        }
    },
    SearchResultScreen: {
        screen: SearchResult,
        navigationOptions: {
            headerTitle: 'Résultat de votre recherche',
            headerTintColor: 'white',
            headerStyle: {
                backgroundColor: '#e2e5ec'
            }
        }
    },
})

export default createAppContainer(StackNavigator);