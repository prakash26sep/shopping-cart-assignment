import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_BASE_URL } from "../../utils/constants";
import endpoints from "../../utils/endpoints";

export interface Product {
  id: string;
  imageURL: string;
  description: string;
  name: string;
  category: string;
  price: number;
  sku: string;
  stock: number;
}

export interface Cart {
  id: string;
  imageURL: string;
  description?: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
}

interface ProductState {
  products: Product[];
  productsInCart: Cart[];
}

const initialState: ProductState = {
  products: [],
  productsInCart: [],
};

export const fetchProducts = createAsyncThunk(
  "fetch/products",
  async (thunkAPI) => {
    const response = await fetch(API_BASE_URL + endpoints.products);
    return await response.json();
  }
);

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProductToCart: (
      state,
      action: PayloadAction<{
        id: string;
        imageURL: string;
        name: string;
        category: string;
        price: number;
      }>
    ) => {
      const cartItemIndex = state.productsInCart.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (cartItemIndex > -1) {
        state.productsInCart[cartItemIndex].quantity += 1;
      } else {
        state.productsInCart.push({
          id: action.payload.id,
          imageURL: action.payload.imageURL,
          name: action.payload.name,
          category: action.payload.category,
          price: action.payload.price,
          quantity: 1,
        });
      }
    },
    removeProductFromCart: (
      state,
      action: PayloadAction<{
        id: string;
        imageURL: string;
        name: string;
        category: string;
        price: number;
      }>
    ) => {
      const cartItemIndex = state.productsInCart.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (
        cartItemIndex > -1 &&
        state.productsInCart[cartItemIndex].quantity > 1
      ) {
        state.productsInCart[cartItemIndex].quantity -= 1;
      } else {
        state.productsInCart.splice(cartItemIndex, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default ProductSlice.reducer;
export const { addProductToCart, removeProductFromCart } = ProductSlice.actions;
