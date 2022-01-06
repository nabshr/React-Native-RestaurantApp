import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component} from 'react';
import navigationStrings from '../Constants/navigationStrings';
import HeatMapScreen from '../Screens/HeatMapScreen';
import Maps from '../Screens/Maps';
import Tabs from './Tabs';

class MainStack extends Component {
  Stack = createNativeStackNavigator();
  render() {
    return (
      <this.Stack.Navigator initialRouteName={navigationStrings.TABS}>
        <this.Stack.Screen
          options={{headerShown: false}}
          name={navigationStrings.TABS}
          component={Tabs}
        />
        <this.Stack.Screen name={navigationStrings.MAP} component={Maps} />
        <this.Stack.Screen
          name={navigationStrings.HEATMAP}
          component={HeatMapScreen}
        />
      </this.Stack.Navigator>
    );
  }
}
export default MainStack;
