import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProductCard = ({ product }) => {
  const { name, description, variants, mediaUrl, isLiked } = product;

  const handleHeartPress = () => {
    // Implement your logic when the heart icon is pressed
    console.log('Heart pressed for product:', name);
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: mediaUrl }} style={styles.image} />
      <TouchableOpacity onPress={handleHeartPress} style={styles.heartIconContainer}>
        {isLiked ? (
          <Icon name="heart" size={20} color="black" style={styles.heartIconFill} />
        ) : (
          <Icon name="heart-o" size={20} color="black" style={styles.heartIconOutline} />
        )}
      </TouchableOpacity>
      <View style={styles.cardDetails}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>{description}</Text>
        <Text style={styles.price}>${variants[0].sellingPrice}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    margin: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
    height: '5',
    width: '45%',
    position: 'relative'
  },
  image: {
    width: 150,
    height: 150,
  },
  heartIconContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    padding: 5,
    zIndex: 1,
  },
  cardDetails: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
  },
  price: {
    fontSize: 18,
    color: 'green',
    marginTop: 5,
  },
});

export default ProductCard;
