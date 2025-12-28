import React from 'react'
import { View ,Text, Image,StyleSheet,Pressable} from 'react-native'

type Restaurant = {
  id: number;
  name: string;
  rating: number;
  deliveryTime: string;
  status?: string;
  image?: string;
};
type RestaurantCardProps = {
  restaurant: Restaurant;
  onPress: () => void;
};

const RestaurantCard = ({restaurant, onPress}:RestaurantCardProps) => {
    if (!restaurant) return null;

  return (
     <Pressable
      onPress={onPress}
    >
    <View style={styles.container}>
    <Image source={{uri:restaurant.image}} style={styles.image} />
    <View style={styles.resinfo}>
    <View>
    <View>
     <Text style={styles.title}>{restaurant.name}</Text>
     <Text style={styles.description}>Delicious food from this restaurant</Text>
    </View>
    <View style={styles.open}> 
    <Text style={styles.opentext}>{restaurant.status}</Text>
    </View>
    </View>
    <View style={styles.rating}>
    <Text style={styles.ratingtext}>{restaurant.rating}</Text>
    <Text>{restaurant.deliveryTime}</Text>
    </View>
    </View>
    </View>
    </Pressable>
  )
}


const styles=StyleSheet.create({  
 container:{
   margin: 12,
   borderRadius: 8,
   borderWidth:1,
   borderColor: 'rgba(0,0,0,0.06)',
   paddingBottom:6

 },
 image: {
   width: '100%',
   height: 140,
   borderRadius: 8,
 },
 title: {
   fontSize: 18,
   fontWeight: 'bold',
   marginVertical: 4,
 },
 description: {
   fontSize: 14,
   color: '#666',
 },
 resinfo:{
 flexDirection:"row",
 justifyContent:"space-around",
 alignItems:"center",
 },
 rating:{
 gap:6,
 },

 opentext:{
 color: '#1E7F1E',
 },
open:{
backgroundColor: '#EAF7EA',
paddingHorizontal: 8,
paddingVertical: 2,
borderRadius: 6,
alignSelf: 'flex-start', 
marginTop:4,

},
ratingtext:{
marginLeft:50
 }
})

export default RestaurantCard

