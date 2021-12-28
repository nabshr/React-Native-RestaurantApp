import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

class DishCategory extends Component {
  render() {
    return (
      <View style={styles.imageView}>
        <View style={styles.imageAlign}>
          <View style={styles.imageViewAlignCenter}>
            <Image source={this.props.imageSource} style={styles.imageStyle} />
            <Text style={styles.textStyle}>{this.props.name}</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default DishCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageView: {
    height: 120,
    marginTop: 10,
    marginStart: 10,
  },
  imageAlign: {flex: 2, alignItems: 'flex-start'},
  imageViewAlignCenter: {alignItems: 'center'},
  imageStyle: {width: 85, height: 85, borderRadius: 15},
  textStyle: {color: '#212a44', fontSize: 14, fontWeight: '400'},
});
