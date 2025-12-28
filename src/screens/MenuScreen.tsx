import React from 'react'
import {StyleSheet,FlatList} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useQuery } from '@tanstack/react-query'
import { useRoute } from '@react-navigation/native';
import { MenuItem } from '../models/types';
import MenuCard from './components/MenuCard';
import RestaurantHeader from './components/RestaurantHeader';
import MenuCartbutton from './components/MenuCartbutton';
import MenuSkeleton from './components/Loader';
type RouteParams = {
  restaurantId: number;
  restaurant:{
    name:string,
    rating:number,
    deliveryTime: string;
    status: string;
    image?: string;
    description:string;
  }
};
const MenuScreen = () => {
 const route = useRoute();
  const { restaurantId,restaurant } = route.params as RouteParams;

  const fetchmenus =async()=>{
    const res = await fetch(`http://localhost:3000/menus?restaurantId=${restaurantId}`)
    return res.json()
  }

  const {data,isLoading}= useQuery<MenuItem[]>({
    queryKey:['menu',restaurantId],
    queryFn:fetchmenus
})
{isLoading && (
  <>
    <MenuSkeleton />
    <MenuSkeleton />
    <MenuSkeleton />
  </>
)}
  return (
  <SafeAreaView style={{ flex: 1 }}>
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <MenuCard menu={item} />}
      ListHeaderComponent={
        <RestaurantHeader
          name={restaurant.name}
          rating={restaurant.rating}
          deliveryTime={restaurant.deliveryTime}
          status={restaurant.status}
          image={restaurant.image}
        />
      }
    />
    <MenuCartbutton />
  </SafeAreaView>
);

}

export default MenuScreen

const styles=StyleSheet.create({  
 container:{
   margin: 12,
   borderRadius: 8,
   borderWidth:1,
   borderColor: 'rgba(0,0,0,0.06)',
   paddingBottom:6,
   flex:1
 }
})