import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import navigationStrings from '../Constants/navigationStrings';
import Home from '../Screens/Home';
import Location from '../Screens/Location';
import Order from '../Screens/Order';
import Favourite from '../Screens/Favourite';
import More from '../Screens/More';
import AntDesign from 'react-native-vector-icons/AntDesign';

class Tabs extends Component {
  CustomTabBarButton = ({children, onPress}) => (
    <TouchableOpacity style={styles.shadow} activeOpacity={1} onPress={onPress}>
      <View style={styles.customTabButton}>
        <View style={styles.customTabButtonView}>{children}</View>
      </View>
    </TouchableOpacity>
  );

  Tab = createBottomTabNavigator();
  render() {
    return (
      <this.Tab.Navigator
        initialRouteName={navigationStrings.HOME}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, size, color}) => {
            let iconName;
            if (route.name === navigationStrings.HOME) {
              iconName = 'home';
              size = focused ? 23 : 18;
            } else if (route.name === navigationStrings.NEARBY) {
              iconName = 'enviromento';
              size = focused ? 23 : 18;
            } else if (route.name === navigationStrings.FAVOURITE) {
              iconName = 'hearto';
              size = focused ? 23 : 18;
            } else if (route.name === navigationStrings.MORE) {
              iconName = 'menuunfold';
              size = focused ? 23 : 18;
            }
            return <AntDesign name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#fc6011',
          tabBarInactiveTintColor: '#8f9bb3',
          tabBarShowLabel: true,
          tabBarLabelStyle: {fontSize: 12, marginBottom: 5},
          tabBarStyle: {
            position: 'absolute',
            // backgroundColor: 'transparent',
            elevation: 0,
            height: 60,
            borderRadius: 15,
            bottom: 15,
            marginHorizontal: 15,
          },
        })}>
        <this.Tab.Screen
          options={{headerShown: false}}
          name={navigationStrings.HOME}
          component={Home}
        />
        <this.Tab.Screen name={navigationStrings.NEARBY} component={Location} />
        <this.Tab.Screen
          name={navigationStrings.ORDER}
          component={Order}
          options={{
            tabBarIcon: ({focused}) => (
              <AntDesign
                name="shoppingcart"
                size={focused ? 24 : 19}
                color={focused ? '#fc6011' : '#8f9bb3'}
              />
            ),
            tabBarButton: props => <this.CustomTabBarButton {...props} />,
          }}
        />
        <this.Tab.Screen
          name={navigationStrings.FAVOURITE}
          component={Favourite}
        />
        <this.Tab.Screen name={navigationStrings.MORE} component={More} />
      </this.Tab.Navigator>
    );
  }
}
export default Tabs;

const styles = StyleSheet.create({
  shadow: {
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#7f5df0',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  customTabButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 72,
    height: 72,
    backgroundColor: '#f9f5f6',
    borderRadius: 35,
  },
  customTabButtonView: {
    width: 60,
    height: 60,
    borderRadius: 35,
    backgroundColor: '#c6ccd8',
  },
});
