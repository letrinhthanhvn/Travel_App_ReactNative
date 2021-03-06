import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    Dimensions,
    FlatList,
    TouchableOpacity,
    Text,
    Image,
    Platform
} from 'react-native';

import {
    CachedImage,
    ImageCacheProvider
} from 'react-native-cached-image';
import Icon from 'react-native-vector-icons/dist/Ionicons'
import Stars from 'react-native-stars-rating';

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
                        <Text style={{ flex: 1, color: 'black' }}>{data.country}</Text>
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


export default class Restaurant extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isClick: false,
            dataImages: []
        }
    }

    click(isClick) {
        this.setState({
            isClick: !isClick
        })
    }



    render() {

        const { data } = this.props

        return (
            <View style={styles.container}>
                <View style={{ height: Platform.OS === 'ios' ? 88 : 60, width, backgroundColor: color }}>
                    <View style={{ width: width, height: 44, flexDirection: 'row', position: 'absolute', top: 44, alignItems: 'center', backgroundColor: color }}>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => this.props.navigation.goBack()}>
                            <Icon name='ios-arrow-back' color='white' size={30} style={{ marginLeft: 6, paddingTop: 3 }} />

                            <Text style={{ color: 'white', fontSize: 21, marginLeft: 3 }}>Paris</Text>
                        </TouchableOpacity>

                        <Text style={styles.title}>Restaurant</Text>

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
                        renderItem={({ item }) =>
                            <Row {...this.props} data={item} />
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
        // backgroundColor: 'green'
    },

    flatListView: {
        position: 'absolute',
        top: 290,
        right: 16,
        left: 16,
        bottom: 0,
        // backgroundColor: 'red'
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
    }
})