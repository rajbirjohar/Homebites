import create from 'zustand';

export interface foodItem {
    food: string;
}

const addFoodItem = (foodItems: foodItem): foodItem[] => [
    ...foodItems,
    {
        
    },
];

type State = {
    items: number,
    foodItems: foodItem[],
    addFoodItem: (item: string) => void,
    increaseCart: () => void,
};

export const useCart = create<State>(set => ({
    items: 0,
    foodItems: [],
    addFoodItem: (item: string) => 
        set((state) => ({
            foodItems: [...(state.foodItems ?? []), item]
    })),
    increaseCart: () => set(state => ({
        ...state,
        items: state.items + 1
    })),
    
}));