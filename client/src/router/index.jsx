import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
	Authorization,
	About,
	Catalog,
	Contacts,
	Delivery,
	Home,
	Order,
	PageNotFound,
	Basket,
} from '../pages';
import Nav from '../components/Nav';
import { Provider, useSelector } from 'react-redux';
import { useState, createContext } from 'react';

export const Quantity = createContext();

export default function AppRouter() {
	const [orderAmount, setOrderAmount] = useState(0);
	const token = useSelector((state) => state.token.token);

	return (
		<Quantity.Provider value={[orderAmount, setOrderAmount]}>
			<Nav />
			<Routes>
				<Route path="/about" element={<About />} />
				<Route path="/" element={<Home />} index />
				<Route path="/catalog" element={<Catalog />} />
				<Route path="/delivery" element={<Delivery />} />
				<Route path="/contacts" element={<Contacts />} />
				<Route path="/shop" element={<Basket />} />
				<Route path='/order' element={<Order />} />
				<Route path="/authorization" element={<Authorization />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</Quantity.Provider>
	);
}
