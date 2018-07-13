/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar
} from 'react-native';

import { Router, Scene, Tabs } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Guides from './src/screen/guides'
import Cities from './src/screen/Cities/cities'
import Guide from './src/screen/Guide'
import City from './src/screen/Cities/city'
import Restaurant from './src/screen/Cities/restaurant'
import Hotels from './src/screen/Cities/hotels'

console.ignoredYellowBox = ['Remote debugger', 'Warning: isMounted(...) is deprecated', 'Warning: `flexWrap: `wrap`` is not supported with the `VirtualizedList` components.Consider using `numColumns` with `FlatList` instead.']

export default class App extends Component {
  
  render() {

    const TabIcon = ({ focused, title }) => {
      switch (title) {
        case 'Guides':
          return (
            <Icon name='folder' size={33} color={focused ? '#FF9300' : '#999999'} />
          )
        case 'Cities':
          return (
            <Icon name='crop-square' size={33} color={focused ? '#FF9300' : '#999999'} />
          )
      }
    }

    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <Router>
          <Tabs tabs={true} key="root" hideNavBar={true} showLabel={false} tabBarPosition='bottom'>
            <Scene key="tab1" hideNavBar={true} title="Guides" icon={TabIcon}>
              <Scene key="guides" component={Guides} title="Guides" />
              <Scene key="guide" component={Guide} title="Guide" />
            </Scene>
            <Scene key="tab2" hideNavBar={true} title="Cities" icon={TabIcon}>

              <Scene key="cities" component={Cities} title="Cities" />
              <Scene key="city" component={City} title="City" />
              <Scene key="restaurant" component={Restaurant} title="Restaurant" />
              <Scene key="hotels" component={Hotels} title="Restaurant" />

            </Scene>
          </Tabs>
        </Router>
      </View>
    );
  }
}


