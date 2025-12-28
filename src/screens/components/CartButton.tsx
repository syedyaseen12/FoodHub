import React from 'react'
import { TouchableOpacity,  StyleSheet, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../models/types'

const CartButton = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <TouchableOpacity style={styles.button} onPress={()=>{
      navigation.navigate('Cart')
    }}>
      <Image style={styles.buttonImage} source={require('../../../Assets/shopping-cart.png')} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight:6
  },
  buttonImage: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
});

export default CartButton