import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    Dimensions,
    FlatList,
    Text,
    Platform
} from 'react-native';

const Screen_Width = Dimensions.get('window').width
const Screen_Height = Dimensions.get('window').height

const color = '#FF9300'

const dataFlatList = [
    { city: "Adentro Data Center Solutions", street: 'Av. Bahia, 1260' },
    { city: "Maila Networks DC1", street: 'R. Siqueira Campos 1193 - 901' },
    { city: "Rua de Santa Catarina", street: 'Puro 4050 and Paladar' },
    { city: "Rua de Mouzinho da Silveira", street: 'Rua de Cedofeita 395' },
    { city: "Ribeira", street: '25 de Abril' },
]

import Header1 from '../components/headers/header1'

export default class Guide extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>

                <View style={styles.flatListBottom}>
                    <FlatList
                        data={dataFlatList}
                        ListHeaderComponent={
                            <View style={{ flex: 1 }}>
                                <View style={{ height: Platform.OS === 'ios' ? 287 : 120, width: Screen_Width }}>
                                    <Header1 {...this.props} />
                                </View>

                                <View style={{ height: 220, width: Screen_Width }}>

                                </View>
                            </View>
                        }
                        renderItem={({ item, index }) =>
                            <View style={styles.viewPerRow}>
                                <View style={{ flex: 1, alignItems: 'center' }}>
                                    <View style={styles.leftView}>
                                        {index != 0 ? <View style={styles.lineTop}></View> : null}
                                        <View style={styles.circleView}></View>
                                        {index != 4 ? <View style={styles.lineBottom}></View> : null}
                                    </View>
                                </View>

                                <View style={{ flex: 6, }}>
                                    <Text style={styles.textCity}>{item.city}</Text>
                                    <Text style={styles.textStreet}>{item.street}</Text>
                                </View>
                            </View>
                        }

                        keyExtractor={(item) => String(item.city)}
                    />
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    flatListBottom: {
        flex: 240,
        width: Screen_Width,
    },

    leftView: {
        justifyContent: 'center',
        height: 65,
        width: 14,
    },

    lineBottom: {
        width: 3,
        backgroundColor: color,
        height: 25.5,
        position: 'absolute',
        top: 39.5,
        left: 5.5
    },

    lineTop: {
        width: 3,
        backgroundColor: color,
        height: 25.5,
        position: 'absolute',
        bottom: 39.5,
        left: 5.5
    },

    viewPerRow: {
        flex: 1,
        height: 65,
        flexDirection: 'row',
        borderBottomColor: '#CCCCCC',
        borderBottomWidth: 1,
        marginLeft: 8,
        marginRight: 8
    },

    circleView: {
        width: 14,
        height: 14,
        borderRadius: 7,
        borderWidth: 3,
        borderColor: color
    },

    textCity: {
        flex: 1, 
        paddingTop: 7, 
        fontSize: 18
    },

    textStreet: {
        flex: 1, 
        color: 'gray', 
        fontSize: 18
    }
})