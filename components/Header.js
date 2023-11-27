// Header.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = ({ title, navigation, onSearchPress, onHeartPress, onCartPress, isLiked }) => {

  const handleHeartPress = () => {
    // Implement your logic when the heart icon is pressed
    console.log('Heart pressed for product:', name);
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.icon}>
        <Icon name="arrow-left" size={20} color="black" />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.headerText}>{title}</Text>
      </View>
      <View style={styles.iconsContainer}>
        <TouchableOpacity onPress={onSearchPress} style={styles.icon}>
          <View style={styles.blankIconContainer}>
            <Icon name="search" size={20} color="black" style={styles.blankIcon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onHeartPress} style={styles.icon}>
          <View style={styles.blankIconContainer}>
            <Icon name="heart" size={20} color="black" style={styles.blankIcon} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onCartPress} style={styles.icon}>
          <View style={styles.blankIconContainer}>
            <Icon name="shopping-cart" size={20} color="black" style={styles.blankIcon} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: "2px",
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  icon: {
    padding: 10,
  },
  headerText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  blankIconContainer: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;
