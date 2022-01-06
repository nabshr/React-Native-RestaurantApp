import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Button} from 'react-native';
import MapView, {Marker, Callout, PROVIDER_GOOGLE} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import navigationStrings from '../Constants/navigationStrings';

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 27.69768,
      long: 85.304424,
    };
  }

  navigateTo(navigate) {
    this.props.navigation.navigate(navigate);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Button
            title="Heat Map"
            onPress={() => this.navigateTo(navigationStrings.HEATMAP)}
          />
          <View style={styles.searchView}>
            <GooglePlacesAutocomplete
              placeholder="Search"
              onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(data, details);
              }}
              query={{
                key: 'AIzaSyCBx_wAqgoDdZbTvt1556Ntc6hsnM8L16U',
                language: 'en',
              }}
              styles={{
                textInputContainer: {
                  backgroundColor: '#ccc',
                },
                textInput: {
                  backgroundColor: '#ccc',
                  color: '#5d5d5d',
                  fontSize: 16,
                },
                predefinedPlacesDescription: {
                  color: '#1faadb',
                },
              }}
              onFail={error => console.error('MAP SEARCH FAIL: ' + error)}
            />
          </View>
          <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
              latitude: this.state.lat,
              longitude: this.state.long,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}>
            <Marker
              coordinate={{
                latitude: this.state.lat,
                longitude: this.state.long,
              }}
              draggable={true}
              onDragStart={drag => {
                console.log('Drag Start ', drag.nativeEvent.coordinate);
              }}
              onDragEnd={drag => {
                this.setState({
                  lat: drag.nativeEvent.coordinate.latitude,
                  long: drag.nativeEvent.coordinate.longitude,
                });
              }}>
              <Callout>
                <Text style={{color: '#000'}}>I'm Here</Text>
              </Callout>
            </Marker>
          </MapView>
        </View>
      </SafeAreaView>
    );
  }
}
export default Maps;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    padding: 10,
  },
  textInput: {
    height: 50,
    backgroundColor: '#eee',
    marginVertical: 5,
  },
  searchView: {
    flex: 2,
    flexDirection: 'column',
    margin: 5,
    borderRadius: 10,
  },
  map: {
    marginTop: 45,
    width: '100%',
    height: '93.3%',
  },
});
