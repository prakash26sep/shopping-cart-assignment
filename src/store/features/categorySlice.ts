import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_BASE_URL } from "../../utils/constants";
import endpoints from "../../utils/endpoints";

export interface Category {
  id: string;
  imageUrl: string;
  description: string;
  name: string;
  key: string;
  enabled: boolean;
}

interface CategoryState {
  categories: Category[];
}

const initialState: CategoryState = {
  categories: [],
};

export const fetchCategories = createAsyncThunk(
  "fetch/categories",
  async (thunkAPI) => {
    const response = await fetch(API_BASE_URL + endpoints.categories);
    return await response.json();
  }
);

export const CategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export default CategorySlice.reducer;
