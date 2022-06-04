import create from "zustand";

interface Store {
  count: number;
  addToCart: () => void;
  removeFromCart: () => void;
  removeAll: () => void;

}

export const useStore = create<Store>(set => ({
  count: 0,
  addToCart: () => set(state => ({ count: state.count + 1 })),
  removeFromCart: () => set(state => ({ count: state.count - 1 })),
  removeAll: () => set({ count: 0 })
}))
