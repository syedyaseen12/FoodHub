import React from 'react';
import { Text, StyleSheet,Image,View,FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useQuery } from '@tanstack/react-query'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../models/types'
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import RestaurantCard from './components/RestaurantCard';
import CartButton from './components/CartButton';
import SearchBar from './components/SearchBar';

  const HomeScreen = () => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList,'Home'>>();;
  const[query, setQuery]=useState('')
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filterbuttons =["All", "Fast Food", "Healthy", "Desserts","Beverages"]

  const fetchRestaurants = async () => {
    const res = await fetch('http://localhost:3000/restaurants');
    return res.json();
  };

type Restaurant = {
  id: number;
  name: string;
  rating: number;
  deliveryTime: string;
  description:string;
  categories: "Fast Food" | "Healthy" | "Desserts" | "Beverages";

};
  const { data } = useQuery<Restaurant[]>({
    queryKey: ['restaurants'],
    queryFn: fetchRestaurants,
  });
  const filteredRestaurants = data?.filter((restaurant) =>
  restaurant.name.toLowerCase().includes(query.toLowerCase())
)
  ?.filter((restaurant)=>selectedFilter==="All"? true:restaurant.categories===selectedFilter)

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={filteredRestaurants}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
        <RestaurantCard restaurant={item} 
         onPress={() =>
         navigation.navigate('Menu', {
         restaurantId: item.id,
         restaurant:item,
         })
         }
         />
        )}
        ListHeaderComponent={
          <>
            {/* HEADER */}
            <View style={styles.header}>
              <View>
                <View style={styles.textContainer}>
                  <Image
                    source={require('../../Assets/food-logo.png')}
                    style={styles.logo}
                  />
                  <Text style={styles.text}>Food Hub</Text>
                </View>

                <View style={styles.locationContainer}>
                  <Image
                    source={require('../../Assets/gps.png')}
                    style={styles.locationIcon}
                  />
                  <Text style={styles.locationText}>HSR Layout</Text>
                </View>
              </View>
              <CartButton />
            </View>

            {/* SUB HEADER */}
            <View style={styles.subheader}>
              <Text style={styles.subheaderText}>Discover Restaurants</Text>
              <Text style={styles.subheadersubline}>
                Find your favorite food from local restaurants
              </Text>
            </View>

            {/* SEARCH BAR */}
            <SearchBar value={query} onChange={setQuery} filters={filterbuttons}
            selectedFilter={selectedFilter}
            onFilterSelect={setSelectedFilter}/>
          </>
        }
      />
    </SafeAreaView>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
textContainer:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    padding:6,
    gap:4,
    marginTop:12,
  },
  logoContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical:6,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
  },
  logo: {
    width: 50,
    height: 50,
    alignSelf: 'center',
  },
  locationContainer:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"flex-start",
    paddingLeft: 4
  },
  locationIcon:{
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  locationText: {
    color: 'black',
  },
  subheader: {
    padding: 4,
    marginLeft:8,
    gap: 8,
  },
  subheaderText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subheadersubline: {
    fontSize: 14,
    color: '#666',
  },
});
