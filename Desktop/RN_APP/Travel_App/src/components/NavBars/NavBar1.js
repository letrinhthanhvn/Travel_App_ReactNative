import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';

import Icon from 'react-native-vector-icons/dist/Ionicons'

export default class NavBar1 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.iconView}>
                    <TouchableOpacity >
                        <Icon name='ios-search' size={30} color='white' />
                    </TouchableOpacity>
                </View>
                <View style={styles.titleView}>
                    <Text style={{fontSize: 34, paddingLeft: 14, paddingBottom: 9, color: 'white'}}>{this.props.name}</Text>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        height: 140,
        backgroundColor: '#FF9300'
    },

    iconView: {
        position: 'absolute',
        top: 44,
        right: 0,
        width: 30,
        height: 44,
    },

    titleView: {
        position: 'absolute',
        top: 88,
        left: 0,
        right: 0,
        height: 52,
    },

    textStyle: {
        fontSize: 34, 
        paddingLeft: 14, 
        paddingBottom: 9, 
        color: 'white'
    }
})