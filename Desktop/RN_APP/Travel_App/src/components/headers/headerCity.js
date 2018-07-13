import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    ImageBackground
} from 'react-native';

import { Header } from './header1'

export default class HeaderCity extends Component {
    render() {
        const { dataPerRow } = this.props
        console.log('dataPerRow', this.props)
        return (
            <View style={styles.viewHeaderBig}>
                <ImageBackground source={this.props.dataPerRow.src} style={{ width: '100%', height: '100%' }}>
                    <View style={{ opacity: 0.2, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'black' }}>
                    </View>
                    <Header {...this.props} city={dataPerRow.city} />

                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    viewHeaderBig: {
        flex: 1,
    },

    viewHeaderSmall: {
        height: 223,
    }
})
