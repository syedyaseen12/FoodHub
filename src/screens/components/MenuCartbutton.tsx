import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useCartStore } from '../store/CartStore';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../models/types'


const MenuCartbutton = () => {

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList,'Cart'>>();;

const totalItems = useCartStore(state => state.getTotalItems());
const totalPrice = useCartStore(state => state.getTotalPrice());

if (totalItems === 0) return null;
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() =>
         navigation.navigate('Cart')
        }
    activeOpacity={0.9} style={styles.button}>
        <Text style={styles.text}>   View Cart • {totalItems} items • ${totalPrice} </Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuCartbutton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 22,
    left: 16,
    right: 16,
  },
  button: {
    backgroundColor: '#FF7A00',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
