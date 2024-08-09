import { FC } from 'react'
import './NotFound.css'
import { Link } from 'react-router-dom'


const NotFound: FC = () => {
	return <div>404 NOT FOUND.  <Link className="notFoundBack" to="/">Go to home</Link></div>
}

export default NotFound