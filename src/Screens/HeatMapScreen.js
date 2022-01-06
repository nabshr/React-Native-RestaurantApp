import React, {Component} from 'react';
import {StyleSheet, Platform} from 'react-native';
import MapView, {Heatmap, PROVIDER_GOOGLE} from 'react-native-maps';

class HeatMapScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 27.697832,
      long: 85.302563,
    };
  }

  points = [
    {latitude: 27.698877, longitude: 85.303737, weight: 1},
    {latitude: 27.697832, longitude: 85.305722, weight: 1},
    {latitude: 27.696915, longitude: 85.304859, weight: 1},
    {latitude: 27.696188, longitude: 85.305036, weight: 1},
    {latitude: 27.696226, longitude: 85.303706, weight: 1},
    {latitude: 27.694141, longitude: 85.302563, weight: 1},
    {latitude: 27.69768, longitude: 85.304424, weight: 1},
    {latitude: 27.693143, longitude: 85.304982, weight: 1},
    {latitude: 27.691025, longitude: 85.301453, weight: 1},
    {latitude: 27.697815, longitude: 85.304668, weight: 1},
    {latitude: 27.698652, longitude: 85.306799, weight: 1},
    {latitude: 27.693456, longitude: 85.309724, weight: 1},
    {latitude: 27.699414, longitude: 85.303817, weight: 1},
    {latitude: 27.704686, longitude: 85.306866, weight: 1},
    {latitude: 27.704214, longitude: 85.306559, weight: 1},
    {latitude: 27.703587, longitude: 85.309267, weight: 1},
    {latitude: 27.701683, longitude: 85.311017, weight: 1},
    {latitude: 27.699981, longitude: 85.310701, weight: 1},
    {latitude: 27.700081, longitude: 85.304519, weight: 1},
    {latitude: 27.699073, longitude: 85.305463, weight: 1},
    {latitude: 27.698816, longitude: 85.308377, weight: 1},
    {latitude: 27.698163, longitude: 85.298768, weight: 1},
    {latitude: 27.699673, longitude: 85.299847, weight: 1},
    {latitude: 27.701617, longitude: 85.291067, weight: 1},
    {latitude: 27.70537, longitude: 85.301433, weight: 1},
    {latitude: 27.706196, longitude: 85.295564, weight: 1},
    {latitude: 27.713456, longitude: 85.3166, weight: 1},
    {latitude: 27.715208, longitude: 85.284732, weight: 1},
    {latitude: 27.71444, longitude: 85.276517, weight: 1},
    {latitude: 27.695501, longitude: 85.314322, weight: 1},
    {latitude: 27.69449, longitude: 85.315534, weight: 1},
    {latitude: 27.698413, longitude: 85.315377, weight: 1},
    {latitude: 27.699249, longitude: 85.315844, weight: 1},
    {latitude: 27.70158, longitude: 85.319193, weight: 1},
    {latitude: 27.700408, longitude: 85.319992, weight: 1},
    {latitude: 27.700611, longitude: 85.317116, weight: 1},
    {latitude: 27.70171, longitude: 85.316551, weight: 1},
    {latitude: 27.700669, longitude: 85.314647, weight: 1},
    {latitude: 27.707815, longitude: 85.315375, weight: 1},
    {latitude: 27.714146, longitude: 85.312827, weight: 1},
    {latitude: 27.714812, longitude: 85.310596, weight: 1},
    {latitude: 27.716695, longitude: 85.310358, weight: 1},
  ];

  render() {
    return (
      <MapView
        provider={PROVIDER_GOOGLE}
        ref={map => (this._map = map)}
        style={styles.map}
        // initialRegion={this.state.initialPosition}>
        region={{
          latitude: this.state.lat,
          longitude: this.state.long,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Heatmap
          points={this.points}
          radius={25}
          //   opacity={1}
          gradient={{
            colors: ['black', 'purple', 'red', 'orange', 'white'],
            startPoints:
              Platform.OS === 'ios'
                ? [0.01, 0.04, 0.1, 0.45, 0.5]
                : [0.1, 0.25, 0.5, 0.75, 1],
            colorMapSize: 2000,
          }}
        />
      </MapView>
    );
  }
}
export default HeatMapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    marginTop: 45,
    width: '100%',
    height: '93.3%',
  },
});
