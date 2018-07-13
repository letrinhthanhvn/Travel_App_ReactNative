import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    Platform
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

        height: Platform.OS === 'ios' ? 140 : 80,
        backgroundColor: '#FF9300'
    },

    iconView: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 44 : 20,
        right: 0,
        width: 30,
        height: Platform.OS === 'ios' ? 44 : 20,
    },

    titleView: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 88 : 40,
        left: 0,
        right: 0,
        height: Platform.OS === 'ios' ? 52 : 40,
    },

    textStyle: {
        fontSize: 34, 
        paddingLeft: 14, 
        paddingBottom: 9, 
        color: 'white'
    }
})