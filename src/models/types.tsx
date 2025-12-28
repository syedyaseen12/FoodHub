export type Restaurant = {
  id: number;
  name: string;
  rating: number;
  deliveryTime: string;
  description:string;
};
export type MenuItem = {
  id: number;
  restaurantId: number;
  name: string;
  price: number;
  image?: string;
  description:string;
  currency: string
  categoryType?: string
};

export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export type RootStackParamList = {
  Home: undefined;
  Cart: undefined;
  Menu: { restaurantId: number; restaurant: Restaurant }; 
 };

