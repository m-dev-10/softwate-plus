import { IProductApi } from "../Types/IProduct"

// функция типизации ошибки
export function getErrorMessage(error: unknown) {
	if (error instanceof Error) return error.message
	return String(error)
}

//функция для работа с localStorage
export const getLocal = (field: string) => {
	const data = localStorage.getItem(field)
	return data ? JSON.parse(data) as IProductApi[] : []
}