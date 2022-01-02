import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Favourite extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Favourite</Text>
      </View>
    );
  }
}
export default Favourite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
