import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    Dimensions,
    FlatList,
    TouchableOpacity,
    Text,
    Image
} from 'react-native';

import Icon from 'react-native-vector-icons/dist/Ionicons'
import Stars from 'react-native-stars-rating';
import {
    CachedImage,
    ImageCacheProvider
} from 'react-native-cached-image';

const width = Dimensions.get('window').width
const color = '#FF9300'

class Row extends Component {

    constructor(props) {
        super(props)

        // this.state = {
        //     data: [],
        //     image: []
        // }
    }

    // const {data} = this.props.data
    // componentDidMount() {

    //     this.setState({
    //         data: this.props.data
    //     })

    //     console.log('data', this.state.data)
    // }

    // getImages(data) {
    //     for (i = 0; i < this.props.data.length; i++) {
    //         this.state.image.push(data[i].image)
    //     }

    //     return image
    // }

    render() {

        const { data } = this.props

        return (
            <View style={styles.sPerRow}>
                <View style={styles.leftView}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ flex: 1, color: 'black', fontSize: 16 }}>{data.name}</Text>
                        <Text style={{ flex: 1, color: 'black' }}>{data.type}</Text>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        <Stars
                            isActive={true}
                            rateMax={5}
                            isHalfStarEnabled={false}
                            onStarPress={(rating) => console.log(rating)}
                            rate={3}
                            size={20}
                            style={{ flex: 1 }}
                        />
                        <Text style={styles.reviewText}>{data.numberReview}</Text>
                    </View>

                </View>

                <View style={{ flex: 1, padding: 0, marginBottom: 12 }}>
                    {/* <Image
                        source={{ uri: data.image }}
                        style={{ flex: 1 }}
                        resizeMode='cover'
                    /> */}
                    <CachedImage
                        source={{
                            uri: data.image
                        }}
                        style={{flex: 1}}
                        
                    />
                </View>
            </View>
        )
    }
}

class RowFirst extends Component {

    render() {

        const { data } = this.props
        return (
            <View style={styles.bottomView}>
                <Image source={data.image} style={{ flex: 1 }} resizeMode='cover' />
                <View style={styles.viewTextFirst}>

                    <Text style={styles.textDesTravel}>{data.name}</Text>
                    <Text style={styles.textDes}>{data.type}</Text>
                </View>

                <View style={{position: 'absolute', bottom: 0, left: 20, right: 0, height: 30}}>
                    <Stars
                        isActive={true}
                        rateMax={5}
                        isHalfStarEnabled={false}
                        onStarPress={(rating) => console.log(rating)}
                        rate={3}
                        size={10}
                        style={{ flex: 1 }}
                    />
                </View>
            </View>

        )
    }
}


export default class Hotels extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isClick: false,
        }
    }

    click(isClick) {
        this.setState({
            isClick: !isClick
        })
    }



    render() {

        const { data } = this.props

        console.log('data', data)

        return (
            <View style={styles.container}>
                <View style={{ height: 88, width, backgroundColor: color }}>
                    <View style={{ width: width, height: 44, flexDirection: 'row', position: 'absolute', top: 44, alignItems: 'center', backgroundColor: color }}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => this.props.navigation.goBack()}>
                            <Icon name='ios-arrow-back' color='white' size={30} style={{ marginLeft: 6, paddingTop: 3 }} />

                            <Text style={{ color: 'white', fontSize: 21, marginLeft: 3 }}>Paris</Text>
                        </TouchableOpacity>

                        <Text style={styles.title}>Hotels</Text>

                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', right: 7 }} onPress={() => this.click(this.state.isClick)}>
                            <Icon name={this.state.isClick ? 'ios-bookmark' : 'ios-bookmark-outline'} color='white' size={30} style={{ marginRight: 4, paddingTop: 3 }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.mapView}>

                </View>

                <View style={styles.flatListView}>
                    <FlatList
                        data={data}
                        renderItem={({ item, index }) => {
                            if (index != 0) { return <Row {...this.props} data={item} /> }
                            else {
                                return <RowFirst {...this.props} data={item} />
                            }
                        }
                        }
                        keyExtractor={(item) => String(item.name)}
                    />
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
    },

    flatListView: {
        position: 'absolute',
        top: 290,
        right: 16,
        left: 16,
        bottom: 0,
    },

    title: {
        position: 'absolute',
        left: 100,
        right: 100,
        top: 10,
        bottom: 10,
        fontSize: 21,
        textAlign: 'center',
        color: 'white'
    },

    // Row

    sPerRow: {
        height: 100,
        width: width - 32,
        marginTop: 16,
        flexDirection: 'row',
        padding: 10
    },

    leftView: {
        flex: 2,
        flexDirection: 'column',
    },

    reviewText: {
        marginLeft: 5,
        flex: 1,
        paddingTop: 2
    },

    bottomView: {
        height: 236,
        marginTop: 16,
        marginRight: 8,
        marginLeft: 8
    },

    viewTextFirst: {
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

})