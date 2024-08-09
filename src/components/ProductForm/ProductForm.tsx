import { FC, useRef, useState, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'
import { addProduct } from '../../Store/reducers/ProductsSlice'
import { IProductUser } from '../../Types/IProduct'
import './ProductForm.css'


const ProductForm: FC = () => {
	//состояние для сбора данных , отправляем в стейт
	const [productItem, setProductItem] = useState<IProductUser>({ id: 0, title: "", price: 0, image: "" })

	const fileRef = useRef<HTMLInputElement | null>(null)
	const { userProducts } = useAppSelector((state) => state.products)
	const dispatch = useAppDispatch()

	// удаляем созданный url, чтобы избежать утечки памяти
	useEffect(() => {
		return () => {
			if (productItem.image) {
				URL.revokeObjectURL(productItem.image);
			}
		};
	}, []);

	//создаём url с файлом
	const fileHandler = () => {
		if (fileRef.current && fileRef.current.files) {
			const file = fileRef.current.files[0];
			setProductItem((prevState) => ({
				...prevState,
				image: URL.createObjectURL(file) // сохраняем ссылку на изображение
			}));
		}
	};

	//Функция отвечает за обновление состояния
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setProductItem((prevState) => ({
			...prevState,
			[name]: value
		}));
	};

	//Функция отправки формы
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const newId = Date.now();
		const newProduct = { ...productItem, id: newId }
		dispatch(addProduct(newProduct))
		setProductItem({
			id: 0,
			title: "",
			price: 0,
			image: ""
		});
		if (fileRef.current) {
			fileRef.current.value = "";
		}
	};


	return (
		<>
			<form onSubmit={handleSubmit} className="form">
				<h1 className="form__title">Create product</h1>
				<div className="form__item">
					<label htmlFor="forTitle" className="form__label">Title</label>
					<input type="text" id="forTitle" name="title" value={productItem.title} onChange={handleChange} className="form__input" placeholder="Enter product title" />
				</div>
				<div className="form__item">
					<label htmlFor="forPrice" className="form__label">Price</label>
					<input type="number" id="forPrice" name="price" min={0} value={productItem.price} onChange={handleChange} className="form__input" placeholder="Enter product price" />
				</div>
				<div className="form__item">
					<input type='file' onChange={fileHandler} ref={fileRef} id='inputFile' />
				</div>
				<button className="form__button" type="submit">Add Product</button>
			</form>
		</>
	)
}

export default ProductForm