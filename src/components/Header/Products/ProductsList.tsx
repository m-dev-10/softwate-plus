import { FC, useEffect, useState } from 'react'
import './ProductsList.css'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { fetchProducts } from '../../../Store/AsyncActionCreators/AsyncActionCreators'
import ProductItem from './ProductItem/ProductItem'
import { changeSwitchData } from '../../../Store/reducers/ProductsSlice';


const ProductsList: FC = () => {
	const dispatch = useAppDispatch()
	const { apiProducts, userProducts, error, isLoading, switchData } = useAppSelector((state) => state.products)
	useEffect(() => {
		dispatch(fetchProducts())
	}, [])

	//изменяем состояние для переключения между списками
	const switchArr = () => {
		dispatch(changeSwitchData(!switchData))
	}

	//Отрисовываем тот или иной список в зависимости от состояния
	const productsToShow = switchData ? userProducts : apiProducts;

	return <section className='products'>
		<h2 onClick={switchArr} className="products__switch-button">SWITCH LIST</h2>
		<div className='products__items'>
			{isLoading ? <span>Загрузка...</span> : error ?
				<span>Не удалось получить данные</span>
				: productsToShow.length === 0 ? <span>Список пуст</span> : productsToShow.map((el) => {
					return <ProductItem key={el.id} id={el.id} image={el.image} title={el.title} price={el.price} />
				})}
		</div>
	</section>
}

export default ProductsList