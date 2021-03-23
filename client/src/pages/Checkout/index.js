import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Index = (props) => {
    const [coverImageUrl, setCoverImageUrl] = useState() 
    
    useEffect(() => {
        const setCoverImage = () => {
            window.innerWidth < 768 ? setCoverImageUrl("./images/out-hollywood-1.jpg") : setCoverImageUrl("./images/out-hollywood-cover.jpg")  
            console.log(props.location.seats)
        }
        setCoverImage()
    }, [props.location.seats])

    window.addEventListener('resize', () => {
        window.innerWidth < 768 ? setCoverImageUrl("./images/out-hollywood-1.jpg") : setCoverImageUrl("./images/out-hollywood-cover.jpg")  
    })

    return (
        <section className="book-checkout-container">
            <div className="cover-image-container" style={{backgroundImage: `url(${coverImageUrl})`}}></div>
            <div className="book-checkout-content">
                <Link to="/book"><img src="./images/arrow-back.svg" alt="go-back"/></Link>
                <div className="checkout-title">
                    <h1>Checkout Page</h1>
                    <div className="selected-seats">
                        <div className="selected-seat">A01</div>
                        <div className="selected-seat">A02</div>
                        <div className="selected-seat">A03</div> 
                        <div className="selected-seat">A03</div> 
                    </div>
                </div>
                <form className="checkout-form" action="">
                    <div className="checkout-input">
                        <label htmlFor="first-name">First Name</label>
                        <input type="text"/>
                    </div>
                    <div className="checkout-input">
                        <label htmlFor="email">Email</label>
                        <input type="text"/>
                    </div>
                    <div className="payment-method-container">
                        <div className="payment-method">
                            <div className="payment-method-checkbox"></div>
                            <span>Pay at the box office</span>
                        </div>
                        <div className="payment-method off">
                            <div className="payment-method-checkbox"></div>
                            <span>Credit card</span>
                        </div>
                    </div>
                    <button className="btn" type="submit">Book</button>
                </form>
            </div>
        </section>
    )
}

export default Index
