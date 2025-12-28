import React from 'react';
import { View, StyleSheet } from 'react-native';

const MenuSkeleton = () => {
  return (
    <View style={styles.card}>
      <View style={styles.image} />

      <View style={styles.content}>
        <View style={styles.title} />
        <View style={styles.desc} />
        <View style={styles.descSmall} />

        <View style={styles.footer}>
          <View style={styles.price} />
          <View style={styles.button} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 12,
    margin: 12,
    backgroundColor: '#fff',
    borderRadius: 12,
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: '#E5E7EB',
    borderRadius: 8,
  },
  content: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },
  title: {
    height: 18,
    width: '60%',
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
  },
  desc: {
    height: 12,
    width: '90%',
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    marginTop: 6,
  },
  descSmall: {
    height: 12,
    width: '70%',
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
    marginTop: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    height: 16,
    width: 60,
    backgroundColor: '#E5E7EB',
    borderRadius: 4,
  },
  button: {
    height: 32,
    width: 32,
    backgroundColor: '#E5E7EB',
    borderRadius: 6,
  },
});

export default MenuSkeleton;
