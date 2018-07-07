import React, { Component } from 'react'
import {
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux' 
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/dist/MaterialIcons'

export const heightTabbar = true ? 74 : 54
export const paddingBottom = true ? 10 : 0

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: heightTabbar,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'green',
    shadowColor: '#000000',
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 5,
    shadowOpacity: 0.2
  },
  separator: {
    height: 0,
    // backgroundColor: common.COLOR_SEPARATOR_TABBAR
  },
  tabbarView: {
    height: heightTabbar,
    opacity: 1,
    backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewTab: {
    flex: 1,
    width: (width / 4 + 0.1),
    height: heightTabbar,
    justifyContent: 'center'
  },
  viewIcon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: paddingBottom,
    paddingTop: 2
  },
  next: {
    position: 'absolute',
    top: 20,
    right: 2,
    backgroundColor: 'transparent'
  },
  prew: {
    position: 'absolute',
    top: 20,
    left: 2,
    backgroundColor: 'transparent'
  },
  icon: {
    width: 28,
    height: 28,
    marginBottom: 2
  }
})

const icon = [
  'dashboard',
  'notifications',
  'location-city',
  'settings'
]

class CustomTabBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: true,
      show: true
    }
  }

  render() {
    let {
      renderIcon,
      navigation,
      getLabel,
      activeTintColor,
      inactiveTintColor,
      jumpToIndex
    } = this.props;
    console.log('props', this.props)

    const numberTab = navigation.state.routes.length;

    const viewDirection = numberTab > 4 ? (
      this.state.page ? <Icon style={styles.next} name="keyboard-arrow-right" size={20} color="#fff" /> : <Icon style={styles.prew} name="keyboard-arrow-left" size={20} color="#fff" />
    ) : <View/>

    const contentsView = (
      <View style={styles.tabbarView}>
        {
          navigation.state.routes.map((route, id) => {
            const color = navigation.index === id ? activeTintColor : inactiveTintColor;
            const isActive = navigation.index === id;
            const label = getLabel({ route });

            return (
              <TouchableOpacity
                onPress={() => {
                  if (navigation.index !== id) {
                    navigation.navigate(route.routeName);
                  } else {
                    if (route.index > 0) {
                      for (let i=0; i< route.index; i++) {
                        Actions.pop()
                      }
                    }
                  }
                }}
                style={styles.viewTab}
                activeOpacity={.8}
                key={route.routeName}
              >
                {
                  icon ? (
                    <View style={[styles.viewIcon]}>
                      <Icon name={icon[id]} size={isActive ? 32 : 28} color={isActive ? 'red' : 'gray'} />
                      <Text style={{ color, fontSize: 18, marginBottom: 2, fontWeight: '500' }}>{label}</Text>
                    </View>
                  ) : <Text style={{ color, fontSize: 10 }}>{label}</Text>
                }
              </TouchableOpacity>
            )
          })
        }
      </View>
    )

    return (
      <View style={styles.container}>
        <View style={styles.separator} />
        <ScrollView
          horizontal
          pagingEnabled
          scrollEnabled={numberTab > 4}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={(o) => {
            var c = o.nativeEvent.contentOffset.x;
            if (c > 0) {
              this.setState({ page: false })
            } else {
              this.setState({ page: true })
            }
            if (c == 0 || (c > (numberTab - 4) * width / 4 - 1 && c < (numberTab - 4) * width / 4 + 1)) {
              this.setState({
                show: true
              })
            } else {
              this.setState({
                show: false
              })
            }
          }}
        >
          {contentsView}
        </ScrollView>
        {this.state.show ? viewDirection : <View />}
      </View>
    )
  }
}

export default CustomTabBar