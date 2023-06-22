import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
};

const calcToPrice = (items) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0)
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const fiendItem = state.items.find((obj) => obj.id === action.payload.id);

      if (fiendItem) {
        fiendItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }

      state.totalPrice = calcToPrice(state.items)
    },
    minusItem(state, action) {
      const fiendItem = state.items.find((obj) => obj.id === action.payload);

      if(fiendItem) {
        fiendItem.count--
      }

      state.totalPrice = calcToPrice(state.items)
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = calcToPrice(state.items)
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0
    },
  },
});

export const { addItem, removeItem, clearItems, minusItem, } = cartSlice.actions;

export default cartSlice.reducer;
