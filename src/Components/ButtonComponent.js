import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const ButtonComponent = props => {
  return (
    <View style={styles.buttonView}>
      <Pressable
        style={({pressed}) => [
          styles.button,
          {backgroundColor: pressed ? '#ddd' : props.color},
        ]}
        // onLongPress={onPressHandler}
        onPress={props.onPressFunction}
        android_ripple={{color: '#00f', borderless: true}}
        // activeOpacity={0.2}
      >
        <Text style={styles.text}>{props.title}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 22,
    margin: 12,
    textAlign: 'center',
  },
  button: {
    height: 51,
    paddingHorizontal: 35,
  },
  buttonView: {
    marginStart: 60,
    marginEnd: 60,
    marginBottom: 90,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#dddddd00',
  },
});

export default ButtonComponent;
