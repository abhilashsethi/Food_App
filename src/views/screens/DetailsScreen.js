//import liraries
import {Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';

// create a component
const DetailsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>DetailsScreen</Text>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default DetailsScreen;
