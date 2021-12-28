import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

class OfferCatagory extends Component {
  render() {
    return (
      <View style={styles.imageView}>
        <ImageBackground
          source={this.props.imageSource}
          style={styles.image}
          imageStyle={styles.imageStyle}>
          <View>
            <Text style={styles.imageTitleText}>{this.props.offerTitle}</Text>
            <Text style={styles.imageDiscountText}>{this.props.discount}</Text>
            <Text style={styles.imageDiscount}>Discount</Text>
          </View>
        </ImageBackground>
        <View />
      </View>
    );
  }
}
export default OfferCatagory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageView: {
    height: 150,
    marginTop: 16,
    marginStart: 10,
    borderRadius: 15,
  },
  image: {width: 320, height: 130},
  imageStyle: {borderRadius: 20},
  imageTitleText: {
    fontSize: 20,
    color: '#fff',
    marginStart: 20,
    marginTop: 20,
  },
  imageDiscountText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'darkorange',
    marginStart: 20,
    marginTop: -10,
  },
  imageDiscount: {
    fontSize: 20,
    color: '#fff',
    marginStart: 20,
    marginTop: -10,
  },
});
