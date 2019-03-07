import React, { Component } from 'react';
import { Platform, StyleSheet, NativeModules, Linking } from 'react-native';
import { AppContainer } from './src/navigation/navigation';
import { NavigationService } from './src/navigation/NavigationService';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu'
});

export default class App extends Component {
    componentDidMount() {
        Linking.addEventListener('url', this.handleOpenURL);
    }

    componentWillUnmount() {
        Linking.removeEventListener('url', this.handleOpenURL);
    }

    handleOpenURL = event => {
        console.log('event', event);
    };

    render() {
        NativeModules.RNCounter.increment();
        NativeModules.RNCounter.getCount(value => {
            console.log('count is ' + value);
        });
        NativeModules.RNCounter.decrement()
            .then(res => console.log('result ', res))
            .catch(e => console.log(e.message, e.code));
        return (
            <AppContainer
                ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                }}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});
