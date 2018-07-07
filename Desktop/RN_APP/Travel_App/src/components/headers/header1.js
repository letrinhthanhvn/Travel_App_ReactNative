import React, { Component } from 'react';

import {
    View,
    StyleSheet,
    Text,
    ImageBackground,
    Dimensions,
    TouchableOpacity
} from 'react-native';

const Screen_Width = Dimensions.get('window').width
const Screen_Height = Dimensions.get('window').height
import Icon from 'react-native-vector-icons/dist/Ionicons'
// import Icon from 'react-native-vector-icons/FontAwesome'

export class Header extends Component {

    constructor(props) {
        super(props) 

        this.state={
            isClick: false,
        }
    }

    click(isClick) {
        this.setState({
            isClick: !isClick

        })
    }

    render() {

        const { dataPerRow } = this.props

        return (
            <View style={styles.viewHeaderSmall}>
                <View style={{ width: Screen_Width, height: 44, flexDirection: 'row', position: 'absolute', top: 44, alignItems: 'center' }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => this.props.navigation.goBack()}>
                        <Icon name='ios-arrow-back' color='white' size={30} style={{ marginLeft: 6, paddingTop: 3 }} />

                        <Text style={{ color: 'white', fontSize: 21, marginLeft: 3 }}>Back</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', right: 7 }} onPress={() => this.click(this.state.isClick)}>
                        <Icon name={ this.state.isClick ? 'ios-bookmark' : 'ios-bookmark-outline'} color='white' size={30} style={{ marginRight: 4, paddingTop: 3}} />
                    </TouchableOpacity>
                </View>

                <View style={{ position: 'absolute', bottom: 0, right: 0, left: 0, height: 52, }}>
                    <Text style={{ marginLeft: 14, marginBottom: 9, fontSize: 34, color: 'white' }}>{this.props.city}</Text>
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
                <ImageBackground source={this.props.dataPerRow.src} style={{ width: '100%', height: '100%' }}>
                    <View style={{ opacity: 0.2, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'black' }}>
                    </View>
                    <Header {...this.props} city={dataPerRow.city}/>
                    <View style={{ backgroundColor: 'white', width: Screen_Width, height: 64, flexDirection: 'row' }}>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Icon name='ios-time-outline' size={31} color='#FF9300' style={{}} />
                            <Text style={{ color: '#FF9300' }}>{dataPerRow.time}</Text>
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
        flex:  1,
    },

    viewHeaderSmall: {
        height: 223,
    }
})