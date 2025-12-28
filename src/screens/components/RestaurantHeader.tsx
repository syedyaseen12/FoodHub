import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';

type Props = {
  name: string;
  rating: number;
  deliveryTime: string;
  status?: string;
  image?:string;
  description?: string
};

const RestaurantHeader = (props: Props) => {
  return (
    <View style={styles.container}>
  <View style={styles.headerRow}>
    <Text style={styles.name}>{props.name}</Text>

    <View style={styles.ratingBadge}>
      <Text style={styles.ratingText}>⭐ {props.rating}</Text>
    </View>
  </View>

  <Image source={{ uri: props.image }} style={styles.image} />
</View>

  );
};

export default RestaurantHeader;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingTop: 8,
  },

  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },

  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111',
    flex: 1,
    marginLeft: 8,
  },

  ratingBadge: {
    backgroundColor: '#22c55e',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    marginRight:8
  },

  ratingText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },

  image: {
    width: '100%',
    height: 180,
    borderRadius: 12,
  },
});
