import  './Footer.css'

export default function Footer() {
    return (
            <div className='padding-box footer-box'>
            <div  className='box'>
                <h5 className='title-footer'>Blooming Beauty</h5>
            </div>
            <div className='footer-cont'>
                <div className='box'>
                    <div>
                        <p>Location</p>
                    </div>
                    <div>
                        <p>123 Demo Street</p>
                        <p>Sydney, NSW 12345</p>
                    </div>
                </div>
                <div className='box'>
                    <div>
                        <p>Contact</p>
                    </div>
                    <div>
                        <p>blooming_beauty@gmail.com</p>
                        <p>(455) 656-8086</p>
                    </div>
                </div>
            </div>
           
        </div>
    )
}