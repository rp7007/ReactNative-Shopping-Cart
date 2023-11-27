import React, { useEffect, useState } from 'react';
import { View, FlatList, Alert, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ProductCard from './productList';
import Header from './Header';

const HomeScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
   const totalProducts = 100; 
  const productsPerPage = 10; 
  const [isAscending, setIsAscending] = useState(true);

 

  useEffect(() => {
  const getProduct = async () => {
    try {
      const response = await fetch(
        'https://storeapi.wekreta.in/api/v4/product/customer?id=0&secondaryKey=3d70712a-26fb-11ee-b277-029ff3b26cce&productName=&categoryName=serveware,kitchenware&subCategoryName=&subSubCategoryName=&brandName=&isFeatured=0&search=&currentPage=1&itemsPerPage=10&sortBy=createdDate&sortOrder=desc&isFetchListing=0&searchTag=&storeUuid=cb910d4a-bf60-11ed-814d-0252190a7100'
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setProducts([...data.object]);
    } catch (error) {
      console.error('Error fetching products:', error);
      // You can display an error message or handle it in a way suitable for your app
      Alert.alert('Error', 'Failed to fetch products. Please try again later.');
    }
  };

  getProduct();
}, []);


const handleSortPress = () => {
    // Toggle sorting order when the "Sort" button is pressed
    setIsAscending((prev) => !prev);
    // Implement your sorting logic here
    console.log('Sort pressed');
  };

  const handleFilterPress = () => {
    // Implement your filtering logic here
    console.log('Filter pressed');
  };

  const handleSearchPress = () => {
    // Implement your search logic
    console.log('Search pressed');
  };

  const handleHeartPress = () => {
    // Implement your heart icon logic
    console.log('Heart pressed');
  };

  const handleCartPress = () => {
    // Implement your cart icon logic
    console.log('Cart pressed');
  };

  return (
    <View>
      <Header
        title="Jar"
        navigation={navigation}
        onSearchPress={handleSearchPress}
        onHeartPress={handleHeartPress}
        onCartPress={handleCartPress}
      />
      <View style={styles.productInfoContainer}>
        <Text>{`${productsPerPage} / ${totalProducts} Products`}</Text>
        <TouchableOpacity onPress={handleSortPress} style={styles.sortFilterContainer}>
          <Text style={styles.sortFilterText}>Sort</Text>
          <Text style={styles.sortFilterArrow}>{isAscending ? '▲' : '▼'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleFilterPress} style={styles.sortFilterContainer}>
          <Text style={styles.sortFilterText}>Filter</Text>
          <Text style={styles.sortFilterArrow}>▼</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.productListContainer}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          renderItem={({ item }) => <ProductCard product={item} />}
        />
      </View>
    </View>
  );
};

const styles = {
  productInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#ecf0f1',
  },
  sortFilterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortFilterText: {
    marginRight: 5,
  },
  sortFilterArrow: {
    fontSize: 12,
  },
  productListContainer: {
    padding: 10,
    // Add additional styles as needed
  },
};

export default HomeScreen;