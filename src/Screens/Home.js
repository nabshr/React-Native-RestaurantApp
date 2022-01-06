/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import OfferCategory from '../Components/ScrollViews/OfferCategory';
import DishCategory from '../Components/ScrollViews/DishCategory';
import SearchComponent from '../Components/Search';
import PopularCategory from '../Components/ScrollViews/PopularCategory';
import RestaurantCategory from '../Components/ScrollViews/RestaurantCategory';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  DishCategoryData,
  NearestRestaurantCategoryData,
  OfferData,
  PopularCategoryData,
  RestaurantCategoryData,
} from '../Constants/Data';
import navigationStrings from '../Constants/navigationStrings';

class Home extends Component {
  navigateTo(navigate) {
    this.props.navigation.navigate(navigate);
  }

  render() {
    return (
      <SafeAreaView>
        <View
          style={{
            elevation: 0.5,
            backgroundColor: '#fff',
            height: 56,
            width: '100%',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => this.navigateTo(navigationStrings.MAP)}
            style={{
              flexDirection: 'row',
              margin: 20,
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={{color: '#ccc'}}>Delivering to</Text>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
                Nayabazar, Kathmandu - 16
              </Text>
            </View>
            <View style={{justifyContent: 'center'}}>
              <AntDesign name="down" size={20} color="#ccc" />
            </View>
          </TouchableOpacity>
        </View>
        {/* <StatusBar barStyle={isDarkMode ? 'dark-content' : 'light-content'} /> */}
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.container}>
            <SearchComponent />
            <View>
              <FlatList
                keyExtractor={(item, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={OfferData}
                renderItem={({item}) => (
                  <TouchableOpacity activeOpacity={0.7}>
                    <OfferCategory
                      imageSource={{
                        uri: item.image,
                      }}
                      offerTitle={item.title}
                      discount={item.discount}
                    />
                  </TouchableOpacity>
                )}
              />
              <Text style={styles.textTitle}>Categories</Text>
              <FlatList
                keyExtractor={(item, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={DishCategoryData}
                renderItem={({item}) => (
                  <TouchableOpacity activeOpacity={0.7}>
                    <DishCategory
                      imageSource={{
                        uri: item.image,
                      }}
                      name={item.name}
                    />
                  </TouchableOpacity>
                )}
              />
              <View style={styles.titleView}>
                <Text style={styles.textTitle}>Most Popular</Text>
                <TouchableOpacity>
                  <Text style={styles.textLink}>view all</Text>
                </TouchableOpacity>
              </View>
              <FlatList
                keyExtractor={(item, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={PopularCategoryData}
                renderItem={({item}) => (
                  <TouchableOpacity activeOpacity={0.7}>
                    <PopularCategory
                      imageSource={{
                        uri: item.image,
                      }}
                      heading={item.heading}
                      subHeading={item.subHeading}
                    />
                  </TouchableOpacity>
                )}
              />
              <View style={styles.titleView}>
                <Text style={styles.textTitle}>Nearest Restaurents</Text>
                <TouchableOpacity>
                  <Text style={styles.textLink}>view all</Text>
                </TouchableOpacity>
              </View>
              {NearestRestaurantCategoryData.map((item, index) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    key={index}
                    onPress={() => Alert.alert(item.name, item.type)}>
                    <RestaurantCategory
                      imageSource={{
                        uri: item.image,
                      }}
                      name={item.name}
                      type={item.type}
                      stars={item.stars}
                      reviews={item.reviews}
                      distance={item.distance}
                    />
                  </TouchableOpacity>
                );
              })}
              {/* ---- Not using flatlist because giving <<VirtualizedLists should never be nested inside plain ScrollViews>> Error ---- */}
              {/* <FlatList
            keyExtractor={(item, index) => index.toString()}
            // showsHorizontalScrollIndicator={false}
            data={NearestRestaurantCategoryData}
            renderItem={({item}) => (
              <RestaurantCategory
                imageSource={{
                  uri: item.image,
                }}
                name={item.name}
                type={item.type}
                stars={item.stars}
                reviews={item.reviews}
                distance={item.distance}
              />
            )}
          /> */}
            </View>
            <View style={styles.titleView}>
              <Text style={styles.textTitle}>All Resturant</Text>
              <TouchableOpacity>
                <Text style={styles.textLink}>view all</Text>
              </TouchableOpacity>
            </View>
            {RestaurantCategoryData.map((item, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.7}
                  key={index}
                  onPress={() => Alert.alert(item.name, item.type)}>
                  <RestaurantCategory
                    imageSource={{
                      uri: item.image,
                    }}
                    name={item.name}
                    type={item.type}
                    stars={item.stars}
                    reviews={item.reviews}
                    distance={item.distance}
                  />
                </TouchableOpacity>
              );
            })}
            {/* ---- Not using flatlist because giving <<VirtualizedLists should never be nested inside plain ScrollViews>> Error ---- */}
            {/* <FlatList
          keyExtractor={(item, index) => index.toString()}
          // showsHorizontalScrollIndicator={false}
          data={RestaurantCategoryData}
          renderItem={({item}) => (
            <RestaurantCategory
              imageSource={{
                uri: item.image,
              }}
              name={item.name}
              type={item.type}
              stars={item.stars}
              reviews={item.reviews}
              distance={item.distance}
            />
          )}
        /> */}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
    marginBottom: 140,
  },
  titleView: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textTitle: {
    marginTop: 5,
    marginStart: 10,
    marginBottom: 3,
    fontSize: 20,
    color: '#212a44',
  },
  textLink: {
    marginTop: 10,
    marginEnd: 15,
    color: '#fc6011',
    textDecorationLine: 'underline',
  },
});
