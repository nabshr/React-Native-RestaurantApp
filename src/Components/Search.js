import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

class SearchComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput} placeholder="Search" />
        <View>
          <Pressable
            style={styles.iconStyle}
            android_ripple={{color: '#ccc', borderless: true}}>
            <Feather name="filter" size={23} />
            <Text>Filter</Text>
          </Pressable>
        </View>
      </View>
    );
  }
}
export default SearchComponent;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    width: '78%',
    height: 45,
    fontSize: 15,
    marginStart: 10,
    borderRadius: 10,
    backgroundColor: '#ccc',
  },
  iconStyle: {
    margin: 3,
    marginEnd: 25,
  },
});
