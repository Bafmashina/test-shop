import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0,
};

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

      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price + sum;
      }, 0);
    },
    minusItem(state, action) {
      const fiendItem = state.items.find((obj) => obj.id === action.payload);
      if(fiendItem) {
        fiendItem.count--
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearItems(state) {
      state.items = [];
      state.totalPrice = 0
    },
  },
});

export const { addItem, removeItem, clearItems, minusItem, } = cartSlice.actions;

export default cartSlice.reducer;
