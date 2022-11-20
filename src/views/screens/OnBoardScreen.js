//import liraries
import {View, Text, SafeAreaView, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {PrimaryButton} from '../components/Button';
import React from 'react';

import COLORS from '../../consts/colors';

const OnBoardScreen = () => {
  const {navigate} = useNavigation();

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../../assets/onboardImage.png')}
        />
      </View>
      <View style={styles.textContainer}>
        <View>
          <Text style={styles.text}>Delicious Food</Text>
          <Text style={styles.paragraph}>
            We help you to find best and delicious food
          </Text>
        </View>
        <View style={styles.indicatorContainer}>
          <View style={styles.currentIndicator}></View>
          <View style={styles.indicator}></View>
          <View style={styles.indicator}></View>
        </View>
        <PrimaryButton title={'Get Started'} onPress={() => navigate('Home')} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {flex: 1, backgroundColor: COLORS.white},
  container: {height: 400},
  image: {width: '100%', resizeMode: 'contain', top: -150},
  textContainer: {
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.dark,
  },
  paragraph: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
    color: COLORS.grey,
  },
  indicatorContainer: {
    height: 50,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  currentIndicator: {
    height: 12,
    width: 30,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    marginHorizontal: 5,
  },
  indicator: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: COLORS.grey,
    marginHorizontal: 5,
  },
});

export default OnBoardScreen;
