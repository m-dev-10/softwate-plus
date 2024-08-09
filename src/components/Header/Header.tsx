import { FC } from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./Header.css"
const Header: FC = () => {

	return (
		<header className='header'>
			<div className="header__container">
				<nav className='navigation'>
					<ul className='navigation__items'>
						<li className='navigation__item'><NavLink to='/'>Home</NavLink></li>
						<li className='navigation__item'><NavLink to='/products'>Products</NavLink></li>
						<li className='navigation__item'><NavLink to='/form'>Form</NavLink></li>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header