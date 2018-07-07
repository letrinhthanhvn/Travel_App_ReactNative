import React, { Component } from 'react';

import {
    View,

} from 'react-native';

import NavBar1 from '../components/NavBars/NavBar1'
import FlatList1 from '../components/Body/FlatList1'

export default class Guides extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <NavBar1 name="Guides"/>
                <FlatList1 {...this.props}/>
            </View>
        )
    }
}