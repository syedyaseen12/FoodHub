
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useCartStore } from './store/CartStore';
import { Alert } from 'react-native';

const CartScreen = () => {
  const items = useCartStore(state => state.items);
  const totalPrice = useCartStore(state => state.getTotalPrice());
  const addItem = useCartStore(state => state.addItem);
  const removeItem = useCartStore(state => state.removeItem);
  const totalItems = useCartStore(state => state.getTotalItems());

 const handleCheckout = () => {
  if (totalItems > 0) {
    Alert.alert('Order Placed Successfully!');
  } else {
    Alert.alert('Cart is empty', 'Please add items to cart');
  }
};
  return (
    <SafeAreaView style={styles.safe}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Your Cart</Text>
      </View>

      {/* Cart Items */}
      <FlatList
        data={items}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.itemCard}>
            <Text style={styles.itemName}>{item.name}</Text>

            <View style={styles.rightSection}>
              <View style={styles.counter}>
                <TouchableOpacity onPress={() => removeItem(item.id)}>
                  <Text style={styles.counterBtn}>−</Text>
                </TouchableOpacity>

                <Text style={styles.quantity}>{item.quantity}</Text>

                <TouchableOpacity
                  onPress={() =>
                    addItem({
                      id: item.id,
                      name: item.name,
                      price: item.price,
                    })
                  }
                >
                  <Text style={styles.counterBtn}>+</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.price}>
                ${item.price * item.quantity}
              </Text>
            </View>
          </View>
        )}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.total}>Total: ${totalPrice}</Text>
        <TouchableOpacity style={styles.checkoutBtn} onPress={handleCheckout}>
          <Text style={styles.checkoutText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },

  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#E5E7EB',
  },

  headerText: {
    fontSize: 20,
    fontWeight: '600',
  },

  list: {
    padding: 12,
    paddingBottom: 120,
  },

  itemCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 1,
  },

  itemName: {
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
  },

  rightSection: {
    alignItems: 'flex-end',
  },

  counter: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FF7A00',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginBottom: 6,
  },

  counterBtn: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FF7A00',
    paddingHorizontal: 6,
  },

  quantity: {
    marginHorizontal: 8,
    fontSize: 14,
    fontWeight: '500',
  },

  price: {
    fontSize: 14,
    fontWeight: '600',
  },

  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    borderTopWidth: 1,
    borderColor: '#E5E7EB',
    backgroundColor: '#fff',
  },

  total: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    textAlign:'center'
  },

  checkoutBtn: {
    backgroundColor: '#FF7A00',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },

  checkoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign:'center'
  },
});

export default CartScreen;
