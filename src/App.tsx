import { Routes, Route } from 'react-router-dom';
import './App.css';
import ProductItem from './components/Header/Products/ProductItem/ProductItem';
import ProductItemDesc from './components/Header/Products/ProductItem/ProductItemDesc/ProductItemDesc';
import ProductsList from './components/Header/Products/ProductsList';
import Layout from './components/Layout/Layout';
import NotFound from './components/NotFound/NotFound';
import ProductForm from './components/ProductForm/ProductForm';

function App() {
	return (
		<div className="app">
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="products" element={<ProductsList />} />
					<Route path="products/:id" element={<ProductItemDesc />} />
					<Route path="form" element={<ProductForm />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
