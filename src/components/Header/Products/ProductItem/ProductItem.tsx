import { FC } from 'react'
import { IProductUser } from '../../../../Types/IProduct'
import './ProductItem.css'
import { Link } from 'react-router-dom';
interface ProductItemProps extends IProductUser {
}


const ProductItem: FC<ProductItemProps> = ({ id, image, title, price }) => {
	return (
		<article className='productItem'>
			<div className='itemProduct'>
				<Link to={`/products/${id}`} className="itemProduct__picture _ibg">
					<img className='itemProduct__image' src={image} alt="product-image" />
				</Link>
				<div className="productItem__body">
					<h2 className="productItem__title">{title}</h2>
					<p className="productItem__price">Price: {price}</p>
				</div>
			</div>
		</article>
	)
}

export default ProductItem