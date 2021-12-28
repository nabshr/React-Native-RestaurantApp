import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class RestaurantCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorite: false,
    };
  }

  toggleFavorite = () => this.setState({isFavorite: !this.state.isFavorite});

  render() {
    return (
      <View style={styles.imageView}>
        <View style={styles.imageAlign}>
          <View>
            <Image source={this.props.imageSource} style={styles.imageStyle} />
          </View>
          <View style={styles.textViewStyle}>
            <Text style={styles.textName}>{this.props.name}</Text>
            <Text style={styles.textSubName}>{this.props.type}</Text>
            <View style={styles.alignStars}>
              <AntDesign name="star" size={15} color={'#e9a71d'} />
              <Text style={styles.text}> {this.props.stars}</Text>
              <Text style={styles.textSubName}>
                {'  '}({this.props.reviews} Reviews)
              </Text>
            </View>
          </View>
          <View style={styles.favroiteViewStyle}>
            <View style={styles.favroiteStyle}>
              <TouchableOpacity
                onPress={this.toggleFavorite}
                hitSlop={{top: 20, bottom: 20, left: 20, right: 20}}>
                <FontAwesome
                  name={this.state.isFavorite ? 'heart' : 'heart-o'}
                  size={22}
                  color={'#fc6011'}
                />
              </TouchableOpacity>
              <Text style={styles.textSubName}>{this.props.distance}</Text>
            </View>
          </View>
        </View>
        <View style={styles.divider} />
      </View>
    );
  }
}
export default RestaurantCategory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageView: {
    height: 130,
    marginTop: 10,
    marginStart: 10,
  },
  textViewStyle: {flex: 1.1, marginStart: 10},
  imageAlign: {flex: 2, alignItems: 'flex-start', flexDirection: 'row'},
  imageViewAlignCenter: {alignItems: 'center'},
  imageStyle: {width: 115, height: 115, borderRadius: 10},
  textName: {
    color: '#212a44',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  textSubName: {
    color: '#768092',
    fontSize: 13,
    fontWeight: '400',
  },
  textDivider: {color: '#ddd'},
  text: {color: '#212a44', fontSize: 15},
  alignStars: {flexDirection: 'row', alignItems: 'center', marginTop: 5},
  favroiteViewStyle: {height: 100, marginEnd: 20},
  favroiteStyle: {
    marginTop: -25,
    flex: 2,
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
  },
  divider: {
    borderBottomColor: '#e1e1e1',
    borderBottomWidth: 1,
    marginLeft: 5,
    marginRight: 15,
  },
});
