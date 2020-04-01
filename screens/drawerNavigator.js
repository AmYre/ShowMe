import { createDrawerNavigator } from 'react-navigation-drawer';
import {createAppContainer} from 'react-navigation';

import StackNavigator from './stackNavigator';
import About from './about';
import Login from './login';
import SearchPlate from './searchplate';


const MainNavigator = createDrawerNavigator(
    {
        MainScreen: {
            screen: StackNavigator,
            navigationOptions: {
                drawerLabel: 'Home'
            }
        },
        LoginScreen: {
            screen: Login,
            navigationOptions: {
                drawerLabel: 'Connexion',
            }
        },
        AboutScreen: {
            screen: About,
            navigationOptions: {
                drawerLabel: 'Qui Sommes Nous',
                headerTitle: 'En savoir plus',
                headerTintColor: 'white',
                headerStyle: {
                    backgroundColor: 'green'
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
        }
    },
    {
        contentOptions: {
            activeTintColor : 'red',
        }
    }
)

export default createAppContainer(MainNavigator);