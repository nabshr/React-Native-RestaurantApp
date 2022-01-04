import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Keyboard,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import ButtonComponent from '../Components/ButtonComponent';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

class Loaction extends Component {
  render() {
    return (
      <KeyboardAvoidingView
        // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <Text style={styles.textView}>Name</Text>
            <TextInput style={styles.textInput} placeholder="Name" />
            <Text style={styles.textView}>Email</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              keyboardType="email-address"
            />
            <Text style={styles.textView}>Contact No.</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Contact No."
              keyboardType="phone-pad"
            />
            <Text style={styles.textView}>House No.</Text>
            <TextInput
              style={styles.textInput}
              placeholder="House No."
              keyboardType="numeric"
            />
            <View style={styles.buttonView}>
              <ButtonComponent
                title="Search"
                onPressFunction={() => {}}
                color="#3ed"
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}
export default Loaction;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textView: {
    width: 370,
    color: '#000',
    marginTop: 10,
  },
  textInput: {
    borderRadius: 10,
    backgroundColor: '#ccc',
    marginTop: 10,
    marginBottom: 10,
  },
  buttonView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
