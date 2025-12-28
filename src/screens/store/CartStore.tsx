import { create } from 'zustand';
import { CartItem } from '../../models/types';

type CartStore = {
  items: CartItem[];

  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;

  getItemQuantity: (id: number) => number;
  getTotalItems: () => number;
  getTotalPrice: () => number;
};

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],

  addItem: (item) => {
    const items = get().items;
    const existing = items.find(i => i.id === item.id);

    if (existing) {
      set({
        items: items.map(i =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        ),
      });
    } else {
      set({
        items: [...items, { ...item, quantity: 1 }],
      });
    }
  },

  removeItem: (id) => {
    set({
      items: get().items
        .map(i =>
          i.id === id ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter(i => i.quantity > 0),
    });
  },

  clearCart: () => set({ items: [] }),

  getItemQuantity: (id) =>
    get().items.find(i => i.id === id)?.quantity ?? 0,

  getTotalItems: () =>
    get().items.reduce((sum, i) => sum + i.quantity, 0),

  getTotalPrice: () =>
    get().items.reduce((sum, i) => sum + i.price * i.quantity, 0),
}));
