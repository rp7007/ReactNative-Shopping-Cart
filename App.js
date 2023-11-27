import { Text, SafeAreaView, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import homeScreen from './components/homeScreen';
import AssetExample from './components/AssetExample';
import FlatList from './components/homeScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={homeScreen} options={{ headerShown: false }} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
