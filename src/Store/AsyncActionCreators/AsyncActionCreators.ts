import { ApiService } from "../../API/api"
import { getErrorMessage } from "../../utils/utils"
import { getProducts, getProductsError, getProductsSuccess } from "../reducers/ProductsSlice"
import { AppDispatch } from "../Store"


export const fetchProducts = () => {
	return async function (dispatch: AppDispatch) {
		try {
			dispatch(getProducts())
			const response = await ApiService.fetchProducts()
			localStorage.setItem('apiProducts', JSON.stringify(response))
			dispatch(getProductsSuccess(response))
		}
		catch (error) {
			dispatch(getProductsError(getErrorMessage(error)))
		}
	}
}


