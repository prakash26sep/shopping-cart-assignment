import { configureStore } from "@reduxjs/toolkit";
import { BannerSlice } from "./features/bannerSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { CategorySlice } from "./features/categorySlice";
import { ProductSlice } from "./features/productSlice";

export const store = configureStore({
  reducer: {
    banner: BannerSlice.reducer,
    category: CategorySlice.reducer,
    product: ProductSlice.reducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
