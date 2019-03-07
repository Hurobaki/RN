import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import { ROUTES } from '../constants/routes';
import { BottomPopUpScreen } from '../screens/bottomPopUpScreen';

// const ApplicationStack = createStackNavigator({});

const SignInScreen = () => (
    <View>
        <Text>Ok</Text>
    </View>
);

const AuthentificationStack = createStackNavigator({
    SignIn: BottomPopUpScreen
});

const createSwitch = createSwitchNavigator(
    {
        [ROUTES.LOGIN]: AuthentificationStack
    },
    {
        initialRouteName: ROUTES.LOGIN
    }
);

export const AppContainer = createAppContainer(createSwitch);
