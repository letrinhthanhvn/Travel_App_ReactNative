import React, { Component } from 'react';
import { View, Image, Text, findNodeHandle, StyleSheet, Dimensions, ImageBackground, Platform } from 'react-native';

// import MapView  from 'react-native-maps'

const Screen_Width = Dimensions.get('window').width
const Screen_Height = Dimensions.get('window').height

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: 21.0064118,
                longitude: 105.8400045,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121
            }
        }
    }
        render() {
            return (
                <View styles={{ flex: 1 }}>
                  
                </View>
            );
        }
    }

    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
        },
        absolute: {
            position: "absolute",
            top: 0, left: 0, bottom: 0, right: 0,
        },

        imageView: {
            flex: 1,
            width: null,
            height: null,
            justifyContent: 'center',
            alignItems: 'center',
        }
    });