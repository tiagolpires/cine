import { Link } from 'react-router-dom'
import './style.css'

const index = ({ image, alt, title, desc, href }) => {
    return (
        <div className="movie">
            <img src={image} alt={alt}/>
            <div className="movie-info">
                <h2>{title}</h2>
                <p>{desc}</p>
                <Link to={href} className="btn">Book Now</Link>
            </div>
        </div>
    )
}

export default index
