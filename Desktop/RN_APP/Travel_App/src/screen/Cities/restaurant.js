import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    Dimensions,
} from 'react-native';

const width = Dimensions.get('window').width

export default class Restaurant extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.mapView}>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    mapView: {
        height: 220, 
        width,
        backgroundColor: 'green'
    }
})