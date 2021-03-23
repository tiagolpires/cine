import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Index = () => {
    const checkoutPage = {
        pathname: '/checkout',
        seats: ['A1', 'A2', 'A3']
    }
    const [coverImageUrl, setCoverImageUrl] = useState() 
    
    useEffect(() => {
        const setCoverImage = () => {
            window.innerWidth < 768 ? setCoverImageUrl("./images/out-hollywood-1.jpg") : setCoverImageUrl("./images/out-hollywood-cover.jpg")  
        }
        setCoverImage()
    }, [])

    window.addEventListener('resize', () => {
        window.innerWidth < 768 ? setCoverImageUrl("./images/out-hollywood-1.jpg") : setCoverImageUrl("./images/out-hollywood-cover.jpg")  
    })

    return (
        <section className="book-checkout-container">
            <div className="cover-image-container" style={{backgroundImage: `url(${coverImageUrl})`}}></div>
            <div className="book-checkout-content">
                <Link to="/"><img src="./images/arrow-back.svg" alt="go-back"/></Link>
                <h1>ONCE UPON A TIME IN HOLLYWOOD</h1>
                <p>
                    <b>Description: </b>A faded television actor and his stunt double strive to achieve fame and success in the final years of Hollywood's Golden Age in 1969 Los Angeles.
                </p>
                <div className="book-seats-container">
                    <span><b>Seats:</b></span>
                    <div className="book-seats">
                        <div className="seats-group">
                            <div className="seats-row">
                                <div className="seat occupied"></div>
                                <div className="seat occupied"></div>
                                <div className="seat occupied"></div>
                                <div className="seat"></div>
                            </div>
                            <div className="seats-row">
                                <div className="seat"></div>
                                <div className="seat"></div>
                                <div className="seat"></div>
                                <div className="seat"></div>
                            </div>
                            <div className="seats-row">
                                <div className="seat selected"></div>
                                <div className="seat selected"></div>
                                <div className="seat"></div>
                                <div className="seat"></div>
                            </div>
                            <div className="seats-row">
                                <div className="seat"></div>
                                <div className="seat"></div>
                                <div className="seat occupied"></div>
                                <div className="seat occupied"></div>
                            </div>
                            <div className="seats-row">
                                <div className="seat"></div>
                                <div className="seat"></div>
                                <div className="seat"></div>
                                <div className="seat"></div>
                            </div>
                            <div className="seats-row">
                                <div className="seat"></div>
                                <div className="seat occupied"></div>
                                <div className="seat occupied"></div>
                                <div className="seat"></div>
                            </div>
                        </div>
                        <div className="seats-group">
                            <div className="seats-row">
                                <div className="seat occupied"></div>
                                <div className="seat occupied"></div>
                                <div className="seat occupied"></div>
                                <div className="seat"></div>
                            </div>
                            <div className="seats-row">
                                <div className="seat"></div>
                                <div className="seat"></div>
                                <div className="seat"></div>
                                <div className="seat"></div>
                            </div>
                            <div className="seats-row">
                                <div className="seat selected"></div>
                                <div className="seat selected"></div>
                                <div className="seat"></div>
                                <div className="seat"></div>
                            </div>
                            <div className="seats-row">
                                <div className="seat"></div>
                                <div className="seat"></div>
                                <div className="seat occupied"></div>
                                <div className="seat occupied"></div>
                            </div>
                            <div className="seats-row">
                                <div className="seat"></div>
                                <div className="seat"></div>
                                <div className="seat"></div>
                                <div className="seat"></div>
                            </div>
                            <div className="seats-row">
                                <div className="seat"></div>
                                <div className="seat occupied"></div>
                                <div className="seat occupied"></div>
                                <div className="seat"></div>
                            </div>
                        </div>
                        <div className="seats-group">
                            <div className="seats-row">
                                <div className="seat occupied"></div>
                                <div className="seat occupied"></div>
                                <div className="seat occupied"></div>
                                <div className="seat"></div>
                            </div>
                            <div className="seats-row">
                                <div className="seat"></div>
                                <div className="seat"></div>
                                <div className="seat"></div>
                                <div className="seat"></div>
                            </div>
                            <div className="seats-row">
                                <div className="seat selected"></div>
                                <div className="seat selected"></div>
                                <div className="seat"></div>
                                <div className="seat"></div>
                            </div>
                            <div className="seats-row">
                                <div className="seat"></div>
                                <div className="seat"></div>
                                <div className="seat occupied"></div>
                                <div className="seat occupied"></div>
                            </div>
                            <div className="seats-row">
                                <div className="seat"></div>
                                <div className="seat"></div>
                                <div className="seat"></div>
                                <div className="seat"></div>
                            </div>
                            <div className="seats-row">
                                <div className="seat"></div>
                                <div className="seat occupied"></div>
                                <div className="seat occupied"></div>
                                <div className="seat"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to={checkoutPage} className="btn checkout-btn">Checkout</Link>
            </div>
        </section>
    )
}

export default Index
