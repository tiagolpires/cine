import { useState, useEffect } from 'react'
import './style.css'

const Index = () => {
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
        <div className="book-container">
            <div className="book-cover-image-container" style={{backgroundImage: `url(${coverImageUrl})`}}></div>
            <div className="book-content">
                <a href="/"><img src="./images/arrow-back.svg" alt="go-back"/></a>
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
                <a href="/book" className="btn checkout-btn">Checkout</a>
            </div>
        </div>
    )
}

export default Index
