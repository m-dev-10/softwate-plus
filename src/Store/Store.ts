import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import productSlice from "./reducers/ProductsSlice";

const rootReducer = combineReducers({
	products: productSlice
})


export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	})
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']