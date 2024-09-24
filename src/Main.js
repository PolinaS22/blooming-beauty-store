import { Link } from "react-router-dom"

export default function Main() {
    return (
        <div>
            <div className="container padding-box">
                <div>
                    <div className="cont-center">
                        <h2>Unleash Your Inner Glow</h2>             
                    </div>
                    <div className="cont-par-header">
                        <p>Welcome to a world where beauty meets playfulness! 
                        Dive into our vibrant collection of products designed to spark 
                        creativity and bring joy to your beauty routine.
                        </p>
                        <button className="btn-link"><Link to='/about' className="link-in-btn">Learn more</Link></button>
                    </div>
                    <div className="img-header-cont"></div>
                </div>
                
            </div>

            <div className="padding-box space-top">
                <div className="cont-center">
                    <h4>Featured Products</h4>
                </div>
                <div className="cont-products">
                    <div className="product-card">
                        <Link className="link-underline" to='/shop'>
                            <img className="product-image-main" alt='product' src="https://images.squarespace-cdn.com/content/v1/66ec1accb984c3039f8efd32/1722369983.717766-NWWXLNCJYSCPQKBEYROD/imgg-od3-a_h_720q.png?format=2500w"/> 
                            <p className="product-name">Pout Parade</p>         
                        </Link>
                        <p>$25</p>
                    </div>
                    <div>
                         <Link className="link-underline" to='/shop'>
                            <img className="product-image-main" alt='product' src="https://images.squarespace-cdn.com/content/v1/66ec1accb984c3039f8efd32/1722369983.984915-NKGAKGBCEGSRIQPTWSNI/imgg-od3-xhcj3iq8.png?format=2500w"/> 
                            <p className="product-name">Autumn Glow Palette</p>
                        </Link>
                        <p>$40</p>
                    </div>
                    <div>
                        <Link className="link-underline" to='/shop'>
                            <img className="product-image-main" alt='product' src="https://images.squarespace-cdn.com/content/v1/66ec1accb984c3039f8efd32/1722369984.063375-DGKVWBCHEMRJXWKRXCEC/imgg-od3-7_jkrr_4.png?format=2500w"/> 
                            <p className="product-name">Nail Bliss Buffers</p>
                        </Link>
                        <p>$20</p>
                    </div>
                   
                </div>
                <div className="cont-center">
                    <button className="btn-link"><Link to='/shop' className="link-in-btn">Shop All</Link></button>
                </div>
            </div>

            <div className="dark-bg">
                <div  className="padding-box cont-center mobile-column">
                    <div>
                        <img className="img-services" alt='services' src='https://images.squarespace-cdn.com/content/v1/66ec1accb984c3039f8efd32/1722369984.284198-RIJLXOFCFSPXBJMCVXLZ/imgg-od3-btq151rd.png?format=2500w'/>
                    </div>
                    <div className="cont-services-main">
                        <div>
                            <h4 className="par-services">Check out <br/> our services</h4>
                        </div>
                        <div>
                            <ul>
                                <li className="promotion-reasons">Over 20 hours of video content</li>
                                <li className="promotion-reasons">Unlimited lifetime access</li>
                                <li className="promotion-reasons">Priceless knowledge</li>
                            </ul>
                        </div>
                        <div>
                            <button className="btn-link"><Link to='/shop' className="link-in-btn">Learn More</Link></button>
                        </div>
                        
                    </div>       
                </div>
                
            </div>


            <div className="padding-box cont-center">
                <div>
                    <div>
                        <div>
                            <h4 className="par-services">Get to <br/>
                                know us</h4> 
                            </div>
                            <div className="par-ad">
                                <p>Tell people about who you are, your origin, your process, or your inspirations. 
                                Tap into your creativity. 
                                You’ve got this. The way you tell your story online can make all the difference.
                                </p>
                            </div>
                            <div>
                                <button className="btn-link"><Link to='/about' className="link-in-btn">Learn more</Link></button>
                            </div>
                        </div>
                    
                    <div>
                        <img className="image-ad" alt='product' src='https://images.squarespace-cdn.com/content/v1/66ec1accb984c3039f8efd32/1722369984.03062-ZJISWOOSQPJDWQQNCBWC/imgg-od3-3n1d9nd5.png?format=2500w'/>
                    </div>
                </div>

                <div>
                    <img className="image-ad-second" alt='product' src='https://images.squarespace-cdn.com/content/v1/66ec1accb984c3039f8efd32/1722369983.953092-QVFEORHHZQHBPSMVCZSN/imgg-od3-tz5guwcf.png?format=2500w'/>
                </div>
            </div>

        </div>
    )
}