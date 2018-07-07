import React, { Component } from 'react';

import {
    View,
    FlatList,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity,
    Text
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { Actions } from 'react-native-router-flux'

const data = [
    { id: 1, src: require('../../assets/image/japan_kyoto.jpg'), country: "JAPAN", city: 'Kyoto', time: '2 days' },
    { id: 2, src: require('../../assets/image/canada_alberta.jpeg'), country: "CANADA", city: 'Alberta', time: '7 days' },
    { id: 3, src: require('../../assets/image/portugal_porto.jpg'), country: "PORTUGAL", city: 'Porto', time: '3 days' },
    { id: 4, src: require('../../assets/image/south_africa.jpg'), country: "SOUTH AFRICA", city: 'Durban', time: '5 days' },
    { id: 5, src: require('../../assets/image/Italy.jpg'), country: "ITALY", city: 'Roma', time: '4 days' },
]

const { width } = Dimensions.get('window');
const margin = 16

class ViewSmall extends Component {
    render() {
        const { row } = this.props

        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                    Actions.guide({
                        dataPerRow: row
                    })
                }}>
                <View style={[styles.viewRowSmall,
                {
                    marginLeft: this.props.row.id % 3 == 1 ? margin : margin / 2,
                    marginRight: this.props.row.id % 3 == 1 ? margin / 2 : margin,
                }]}>
                    <Image
                        source={row.src}
                        style={{
                            width: (width - margin * 3) / 2,
                            height: (width - margin * 3) / 2,
                            borderRadius: 10
                        }}
                        resizeMode='cover' />
                    <LinearGradient
                        colors={['#212121', 'transparent', 'transparent', '#212121']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        locations={[0, 0.3, 0.7, 1]}
                        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, borderRadius: 10 }}
                    >
                    </LinearGradient>
                    <View style={{ height: 80, position: 'absolute', top: 0, right: 0, left: 0, paddingLeft: 20 }}>

                        <Text style={{ flex: 1, paddingTop: 20, fontSize: 17, color: '#CCCCCC' }}>{row.country}</Text>
                        <Text style={{ flex: 1, fontSize: 25, color: 'white', fontWeight: 'bold' }}>{row.city}</Text>
                    </View>

                </View>
            </TouchableOpacity >
        )
    }
}

class ViewBig extends Component {
    render() {
        const { row } = this.props
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                    Actions.guide({
                        dataPerRow: row
                    })

                }}>
                <View style={styles.viewBigRow}>

                    <Image
                        source={row.src}
                        style={{
                            width: width - margin * 2,
                            height: (width - margin * 3),
                            borderRadius: 10,
                            // borderWidth: 1
                        }}
                        resizeMode='cover' />
                    <LinearGradient
                        colors={['#212121', 'transparent', '#212121']}
                        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, borderRadius: 10 }}
                    >
                    </LinearGradient>
                    <View style={{ height: 80, position: 'absolute', top: 0, right: 0, left: 0, paddingLeft: 20, }}>
                        <Text style={{ flex: 1, paddingTop: 20, fontSize: 17, color: '#CCCCCC' }}>{row.country}</Text>
                        <Text style={{ flex: 1, fontSize: 25, color: 'white', fontWeight: 'bold', paddingTop: 0 }}>{row.city}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

export default class FlatList1 extends Component {

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'flex-start', }}>
                <FlatList
                    data={data}
                    contentContainerStyle={{ flexDirection: 'row', alignItems: 'flex-start', flexWrap: 'wrap' }}
                    // numColumns={1}
                    renderItem={({ item }) => {
                        console.log('item', item.id % 3 != 0)
                        if (item.id % 3 != 0) {
                            return (
                                <ViewSmall row={item} {...this.props} />
                            )
                        } else {
                            return (
                                <ViewBig row={item} {...this.props} />
                            )
                        }
                    }
                    }
                    keyExtractor={(item) => String(item.id)}
                />
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        // position: 'absolute',

    },

    viewRowSmall: {
        width: (width - margin * 3) / 2,
        height: (width - margin * 3) / 2,
        marginTop: margin,
    },

    viewBigRow: {
        width: width - margin * 2,
        marginTop: margin,
        marginLeft: margin,
        marginRight: margin,
        height: (width - margin * 3),
    }
})