import Icon from 'react-native-vector-icons/MaterialIcons';
import {TextInput} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  FlatList,
  TouchableHighlight,
} from 'react-native';

import categories from '../../consts/categories';
import COLORS from '../../consts/colors';
import foods from '../../consts/foods';

const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const HomeScreen = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  const ListCategories = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesListContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            <View
              style={{
                backgroundColor:
                  selectedCategoryIndex === index
                    ? COLORS.primary
                    : COLORS.secondary,
                ...styles.categoryBtn,
              }}>
              <View style={styles.categoryBtnImgCon}>
                <Image source={category.image} style={styles.image} />
              </View>
              <Text
                style={{
                  ...styles.category,
                  color:
                    selectedCategoryIndex === index
                      ? COLORS.white
                      : COLORS.primary,
                }}>
                {category.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  const Card = ({food}) => {
    const {navigate} = useNavigation();
    return (
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigate('DetailsScreen', food)}>
        <View style={styles.card}>
          <View style={styles.cardImgctnr}>
            <Image source={food.image} style={styles.cardImg} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.cardHeading}>{food.name}</Text>
            <Text style={styles.cardSubhead}>{food.ingredients}</Text>
          </View>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>${food.price}</Text>
            <View style={styles.addToCartBtn}>
              <Icon name="add" size={20} color={COLORS.white} />
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <View style={styles.head}>
            <Text style={styles.hello}>Hello, </Text>
            <Text style={styles.abhi}>Abhi</Text>
          </View>
          <Text style={styles.subHead}>What do you want today</Text>
        </View>
        <Image
          source={require('../../assets/person.png')}
          style={styles.profileImg}
        />
      </View>
      <View style={styles.contain}>
        <View style={styles.inputContainer}>
          <Icon name="search" size={28} color={'black'} />
          <TextInput
            style={styles.input}
            placeholder="Search for food"
            placeholderTextColor={COLORS.grey}
          />
        </View>
        <View style={styles.sortBtn}>
          <Icon name="tune" size={28} color={COLORS.white} />
        </View>
      </View>
      <View>
        <ListCategories />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={foods}
        renderItem={({item}) => <Card food={item} />}
      />
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {height: 35, width: 35, resizeMode: 'cover'},
  category: {
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  cardImgctnr: {alignItems: 'center', top: -40},
  cardImg: {height: 120, width: 120},
  textContainer: {marginHorizontal: 10},
  cardHeading: {fontSize: 18, color: COLORS.dark, fontWeight: 'bold'},
  cardSubhead: {fontSize: 14, color: COLORS.grey, marginTop: 2},
  priceContainer: {
    marginTop: 10,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {fontSize: 18, color: COLORS.dark, fontWeight: 'bold'},
  head: {flexDirection: 'row'},
  hello: {fontSize: 28, color: COLORS.dark},
  abhi: {
    fontSize: 28,
    color: COLORS.dark,
    fontWeight: 'bold',
    marginLeft: 1,
  },
  subHead: {color: COLORS.grey, marginTop: 5, fontSize: 22},
  profileImg: {height: 50, width: 50, borderRadius: 25},
  contain: {
    marginTop: 40,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {fontSize: 18},
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    height: 50,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  sortBtn: {
    width: 50,
    height: 50,
    marginLeft: 10,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesListContainer: {
    paddingVertical: 30,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  categoryBtn: {
    height: 45,
    width: 110,
    marginRight: 7,
    borderRadius: 30,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  categoryBtnImgCon: {
    height: 35,
    width: 35,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default HomeScreen;
