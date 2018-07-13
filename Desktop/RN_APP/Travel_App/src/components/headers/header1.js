import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    Text,
    ImageBackground,
    Dimensions,
    TouchableOpacity,
    Platform
} from 'react-native';

const Screen_Width = Dimensions.get('window').width
const Screen_Height = Dimensions.get('window').height
import Icon from 'react-native-vector-icons/dist/Ionicons'

export class Header extends Component {

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

    goBackFunc = () => {
        this.props.navigation.goBack()
    }

    render() {

        const { dataPerRow } = this.props

        return (
            <View style={styles.viewHeaderSmall}>
                <View style={styles.viewNavBar}>
                    <TouchableOpacity 
                        style={{ flexDirection: 'row', alignItems: 'center' }} 
                        onPress={this.goBackFunc}
                    >
                        <Icon 
                            name='ios-arrow-back' 
                            color='white' 
                            size={30} 
                            style={{ marginLeft: 6, paddingTop: 3 }} 
                        />

                        <Text style={{ color: 'white', fontSize: 21, marginLeft: 3 }}>Back</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.saveBtn} onPress={() => this.click(this.state.isClick)}>
                        <Icon 
                            name={this.state.isClick ? 'ios-bookmark' : 'ios-bookmark-outline'} 
                            color='white' 
                            size={30} 
                            style={{ marginRight: 4, paddingTop: 3 }} 
                        />
                    </TouchableOpacity>
                </View>

                <View style={{ position: 'absolute', bottom: 0, right: 0, left: 0, height: 52, }}>
                    <Text style={styles.viewCity}>{this.props.city}</Text>
                </View>
            </View>
        )
    }
}

export default class Header1 extends Component {
    render() {
        const { dataPerRow } = this.props
        console.log('dataPerRow', this.props)
        return (
            <View style={styles.viewHeaderBig}>
                <ImageBackground 
                    source={this.props.dataPerRow.src} 
                    style={{ width: '100%', height: '100%' }}
                >
                    <View style={styles.viewBlur}>
                    </View>
                    <Header {...this.props} city={dataPerRow.city} />
                    <View style={styles.viewDaysAndTemp}>
                        <View style={styles.viewPerDayAndTemp}>
                            <Icon name='ios-time-outline' size={31} color='#FF9300' />
                            <Text style={{ color: '#FF9300' }}>{dataPerRow.time}</Text>
                        </View>

                        <View style={styles.viewPerDayAndTemp}>
                            <Icon name='ios-cloudy-outline' size={31} color='#FF9300' style={{}} />
                            <Text style={{ color: '#FF9300' }}>Temperate</Text>
                        </View>
                    </View>
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
        height: Platform.OS === 'ios' ? 223 : 120,
    },

    viewNavBar: {
        width: Screen_Width,
        height: 44,
        flexDirection: 'row',
        position: 'absolute',
        top: Platform.OS === 'ios' ? 44 : 12,
        alignItems: 'center'
    },

    viewBlur: {
        opacity: 0.2,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'black'
    },

    viewDaysAndTemp: {
        backgroundColor: 'white',
        width: Screen_Width,
        height: 64,
        flexDirection: 'row'
    },

    viewPerDayAndTemp : {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },

    saveBtn: {
        flexDirection: 'row', 
        alignItems: 'center', 
        position: 'absolute', 
        right: 7
    },
    viewCity: {
        marginLeft: 14, 
        marginBottom: 9, 
        fontSize: 34, 
        color: 'white'
    }
})