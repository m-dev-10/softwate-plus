import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProductApi, IProductUser } from "../../Types/IProduct"
import { getLocal } from "../../utils/utils";


interface StateTypes {
	switchData: boolean
	apiProducts: IProductApi[]
	userProducts: IProductUser[]
	isLoading: boolean
	error: string
}

const State: StateTypes = {
	switchData: false,
	apiProducts: getLocal('apiProducts'),
	userProducts: [],
	isLoading: false,
	error: ''
}


export const productSlice = createSlice({
	name: 'ProductSlice',
	initialState: State,
	reducers: {
		getProducts(State) {
			State.isLoading = true
		},
		getProductsSuccess(State, action: PayloadAction<IProductApi[]>) {
			State.isLoading = false
			State.error = ''
			State.apiProducts = action.payload
		},
		getProductsError(State, action: PayloadAction<string>) {
			State.isLoading = false
			State.error = action.payload
		},
		addProduct(State, action: PayloadAction<IProductUser>) {
			State.userProducts.push(action.payload)
		},
		changeSwitchData(State, action: PayloadAction<boolean>) {
			State.switchData = action.payload
		}
	},
})

export default productSlice.reducer

export const { getProducts, getProductsError, getProductsSuccess, addProduct, changeSwitchData } = productSlice.actions