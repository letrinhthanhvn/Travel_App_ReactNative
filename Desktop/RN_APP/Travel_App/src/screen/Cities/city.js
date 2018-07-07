import React, { Component } from 'react';

import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    FlatList,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';

import { Actions } from 'react-native-router-flux'

import Icon from 'react-native-vector-icons/MaterialIcons'

const width = Dimensions.get('window').width

const color = '#FF9300'


import HeaderCity from '../../components/headers/headerCity'



export default class City extends Component {

    click = () => {
        Actions.restaurant({
        
        })
    }

    render() {
        const { dataPerRow } = this.props
        return (
            <ScrollView contentContainerStyle={{}}>
                <View style={{ flex: 1 }}>
                    <View style={{ height: 223, width }}>
                        <HeaderCity {...this.props} />
                    </View>

                    <View style={{ height: 76, width }}>
                        <View style={{ margin: 16, height: 44, justifyContent: 'space-between', flexDirection: 'row' }}>
                            <TouchableOpacity
                                style={styles.btnRestaurant}
                                onPress={this.click}
                            >
                                <Icon name="restaurant" size={28} color='white' />
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={styles.btnHotel}
                            >
                                <Icon name="hotel" size={30} color='white' />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ height: 270, width }}>
                        <Text
                            style={{ flex: 1, margin: 16, textAlign: 'left', padding: 8, fontSize: 17 }}

                        >{dataPerRow.des}</Text>
                    </View>

                    <View style={styles.bottomView}>
                        <Image source={{ uri: dataPerRow.travelImage }} style={{ flex: 1 }} resizeMode='cover' />
                        <View style={styles.viewTextBtm}>

                            <Text style={styles.textDesTravel}>{dataPerRow.destinationTravel}</Text>
                            <Text style={styles.textDes}>{dataPerRow.nameDestination}</Text>
                        </View>
                    </View>

                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    btnRestaurant: {
        flex: 1,
        marginRight: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color
    },

    btnHotel: {
        backgroundColor: color,
        flex: 1,
        marginLeft: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },

    viewTextBtm: {
        height: 80, 
        position: 'absolute', 
        top: 0, 
        right: 0, 
        left: 0, 
        paddingLeft: 20
    },

    textDesTravel: {
        flex: 1, 
        paddingTop: 20, 
        fontSize: 17, 
        color: '#CCCCCC'
    },

    textDes: {
        flex: 1, 
        fontSize: 25, 
        color: 'white',
        fontWeight: 'bold'
    },

    bottomView: {
        height: 236, 
        marginTop: 16, 
        marginRight: 16, 
        marginLeft: 16 
    }
})