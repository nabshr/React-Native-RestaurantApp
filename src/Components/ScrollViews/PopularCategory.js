import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

class PopularCategory extends Component {
  render() {
    return (
      <View style={styles.imageView}>
        <View style={styles.imageAlign}>
          <Image source={this.props.imageSource} style={styles.imageStyle} />
          <Text style={styles.textHeadingStyle}>{this.props.heading}</Text>
          <Text style={styles.textSubHeadingStyle}>
            {this.props.subHeading}
          </Text>
        </View>
      </View>
    );
  }
}
export default PopularCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageView: {
    height: 180,
    marginTop: 10,
    marginStart: 10,
  },
  imageAlign: {flex: 2, alignItems: 'flex-start'},
  imageStyle: {width: 180, height: 120, borderRadius: 10},
  textHeadingStyle: {color: '#212a44', fontSize: 18, fontWeight: 'bold'},
  textSubHeadingStyle: {color: '#768092', fontSize: 15, fontWeight: '400'},
});
