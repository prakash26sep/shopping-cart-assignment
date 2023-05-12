import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_BASE_URL } from "../../utils/constants";
import endpoints from "../../utils/endpoints";

interface Banner {
  id: number;
  bannerImageAlt: string;
  bannerImageUrl: string;
}

interface BannerState {
  banners: Banner[];
}

const initialState: BannerState = {
  banners: [],
};

export const fetchBanners = createAsyncThunk(
  "fetch/banners",
  async (thunkAPI) => {
    const response = await fetch(API_BASE_URL + endpoints.banners);
    return await response.json();
  }
);

export const BannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBanners.fulfilled, (state, action) => {
      state.banners = action.payload;
    });
  },
});

export default BannerSlice.reducer;
