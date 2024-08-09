import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../../../../hooks/hooks';
const ProductItemDesc: FC = () => {
	const params = useParams()
	const { apiProducts } = useAppSelector((state) => state.products)
	const obj = apiProducts.find((el) => el.id === Number(params.id))

	return <div>
		{!!obj && <div>desc: {obj.description}</div>}
	</div>
}

export default ProductItemDesc