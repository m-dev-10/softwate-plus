import { IProductApi } from '../Types/IProduct';
import axios from 'axios';

const instance = axios.create({
	baseURL: `https://fakestoreapi.com`,
})

export const ApiService = {
	fetchProducts: async () => {
		const response = await instance.get<IProductApi[]>(`/products`)
		return response.data
	},
}