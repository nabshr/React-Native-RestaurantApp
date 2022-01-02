import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Loaction extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Loaction</Text>
      </View>
    );
  }
}
export default Loaction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
