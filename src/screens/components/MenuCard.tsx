import React from 'react'
import { MenuItem } from '../../models/types';
import { Text,View,StyleSheet,Image, TouchableOpacity} from 'react-native'
import { useCartStore } from '../store/CartStore';

type Props = {
menu: MenuItem;
};
const MenuCard = ({menu}:Props) => {
const quantity = useCartStore(state =>
  state.getItemQuantity(menu.id)
);

const addItem = useCartStore(state => state.addItem);
const removeItem = useCartStore(state => state.removeItem);
  return (
    <View style={styles.container}>
     <Image source={{uri:menu.image}} style={styles.image}></Image>
   <View style={styles.textsection}>
    <View>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center' }}>
     <Text style={styles.menutext}>{menu.name}</Text>
     <Text style={styles.description}>{menu.categoryType}</Text>
     </View>
   <View><Text style={styles.description}  numberOfLines={2}
    ellipsizeMode="tail">{menu.description}</Text>
    </View>
    </View>
    <View style={styles.priceandcart}>
     <View>
    <Text style={styles.menuprice}>{menu.currency} {menu.price}</Text>
        </View>
  {quantity === 0 ? (
  <TouchableOpacity
    onPress={() =>
      addItem({
        id: menu.id,
        name: menu.name,
        price: menu.price,
      })
    }
  >
    <Text style={styles.addbtn}>Add</Text>
  </TouchableOpacity>
) : (
  <View style={styles.counter}>
    <TouchableOpacity onPress={() => removeItem(menu.id)}>
      <Text>-</Text>
    </TouchableOpacity>

    <Text style={styles.count}>{quantity}</Text>

    <TouchableOpacity
      onPress={() =>
        addItem({
          id: menu.id,
          name: menu.name,
          price: menu.price,
        })
      }
    >
      <Text>+</Text>
    </TouchableOpacity>
  </View>
)}

        </View>
     </View>
    </View>
  )
}

const styles =StyleSheet.create({
  container:{
  backgroundColor:'white',
  borderRadius:12,
  margin:6,
  flexDirection:'row',
  borderColor: 'rgba(0,0,0,0.06)',
   borderWidth:2,
  },
  textsection:{
  margin: 10,
  gap:3,
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'        
  },
   menutext:{
   fontSize:20,
   paddingBottom: 2,
  fontWeight: 'bold',

   },
   menuprice:{
  fontSize:18,
  fontWeight: 'bold',
   },
   description:{
   fontSize:13,
   textAlign:'left',
  color: '#6B7280',
  fontFamily: 'Inter-Regular',
   },
   image:{
   width: '35%',
   height: 120,
   padding:10,
   borderRadius: 8,
  },
  
   priceandcart:{
   flexDirection:'row',
   justifyContent:'space-between',
  //  backgroundColor:'yellow'
  },
  addbtn:{
    backgroundColor: '#FF7A00',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 8,
    color:'white'
  },
  addText: {
    color: '#fff',
    fontWeight: '600',
  },

  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF7A00',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    gap: 10,
  },

  counterText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },

  count: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
})


export default MenuCard;


