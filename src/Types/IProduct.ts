
interface Rating {
	rate: number
	count: number
}

export interface IProductUser {
	id: number
	title: string
	price: number
	image: string
}

export interface IProductApi extends IProductUser {
	description: string
	category: string
	rating: Rating
}

