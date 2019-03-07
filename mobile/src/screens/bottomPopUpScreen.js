import React, { Component } from 'react';
import { View, Text, Animated, StyleSheet, TouchableWithoutFeedback } from 'react-native';

let isHidden = true;

class BottomPopUpScreenComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bounceValue: new Animated.Value(150), //This is the initial position of the subview
            buttonText: 'Show Subview'
        };
    }

    _toggleSubview() {
        this.setState({
            buttonText: !isHidden ? 'Show Subview' : 'Hide Subview'
        });

        let toValue = 150;

        if (isHidden) {
            toValue = 0;
        }

        //This will animate the transalteY of the subview between 0 & 100 depending on its current state
        //100 comes from the style below, which is the height of the subview.
        Animated.spring(this.state.bounceValue, {
            toValue: toValue,
            velocity: 3,
            tension: 2,
            friction: 8
        }).start();

        isHidden = !isHidden;
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableWithoutFeedback
                    style={styles.button}
                    onPress={() => {
                        this._toggleSubview();
                    }}
                >
                    <Text style={styles.buttonText}>{this.state.buttonText}</Text>
                </TouchableWithoutFeedback>
                <Animated.View style={[styles.subView, { transform: [{ translateY: this.state.bounceValue }] }]}>
                    <View
                        style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap'
                        }}
                    >
                        <View style={{ flex: 0.8, padding: 10 }}>
                            <Text style={{ color: 'white' }}>
                                En poursuivant votre navigation, vous acceptez l'utilisation de cookies pour vous
                                proposer des offres et services adaptés à vos centres d'intérêt.
                            </Text>
                        </View>
                        <View style={{ flex: 0.2 }}>
                            <Text style={{ alignSelf: 'flex-end', color: 'white', padding: 10 }}>Croix</Text>
                        </View>
                    </View>

                    <View>
                        <Text style={{ color: 'white', padding: 10 }}>En savoir plus</Text>
                    </View>
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginTop: 66
    },
    button: {
        padding: 8
    },
    buttonText: {
        fontSize: 17,
        color: '#007AFF'
    },
    subView: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'black',
        opacity: 0.8
    }
});

export const BottomPopUpScreen = BottomPopUpScreenComponent;
