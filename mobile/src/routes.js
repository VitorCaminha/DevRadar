import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer'
import { MaterialIcons } from '@expo/vector-icons';

import Main from './pages/Main';
import Profile from './pages/Profile';
import Account from './pages/Profile';
import About from './pages/About';

const mainStack = createStackNavigator({
    Main: {
        screen: Main,
        navigationOptions: {
            title: 'DevRadar',
        },
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            title: 'Perfil no Github',
        },
    },
},{
    defaultNavigationOptions: {
        headerTintColor: '#FFF',
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerStyle: {
            backgroundColor: '#7D40E7',

        },
    }
});

const App = createDrawerNavigator({
    Home: {
        screen: mainStack,
    },
    Account: {
        screen: Account,
        navigationOptions: {
            title: 'Account'
        },
    },
    About: {
        screen: About,
        navigationOptions: {
            title: 'About'
        },
    },
    Logout: {
        screen: Account,
        navigationOptions: {
            title: 'Log out'
        },
    },

}, {
    drawerBackgroundColor: '#7D40E7',
    drawerPosition: 'right',
    drawerType: 'front',
    drawerWidth: 120,
    
});

const Routes = createAppContainer(App);

export default Routes;