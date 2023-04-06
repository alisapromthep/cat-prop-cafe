import './NotFoundPage.scss';
import {Link} from 'react-router-dom';


function NotFoundPage() {
    return (
        <div className='notfound'>
            <h1 className='notfound__title'>404</h1>
            <p className='notfound__text'>Page not found</p>
            <Link to="/" className='notfound__link'>Go Home</Link>
        </div>
    )
}

export default NotFoundPage