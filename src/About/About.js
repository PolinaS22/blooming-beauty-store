import { useState } from 'react';
import './About.css'
import Sliders from './Sliders';
import { dataTeam } from './dataTeam';
import Team from './Team';
import { Link } from 'react-router-dom';
import { AccordionFAQ } from './FaQ/AccordionFAQ';

export default function About() {

    const [members, setMembers] = useState(dataTeam);

    return (
        <div>
            <div className='padding-box about-us-cont'>
                <div>
                    <div>
                        <h4 className='title-about-section'>Who We Are</h4>
                    </div>
                    <div className='cont-par-about'>
                        <p>Ready to embark on a fabulous beauty journey? 
                        Book your appointment now and treat yourself to a delightful day 
                        of magic and makeovers!</p>
                    </div>
                </div>
                
                <div >
                    <img className='image-about-us' src='https://images.squarespace-cdn.com/content/v1/66ec1accb984c3039f8efd32/1722369983.717766-NWWXLNCJYSCPQKBEYROD/imgg-od3-a_h_720q.png?format=2500w' alt='product'/>
                </div>
            </div>

            <div className='padding-box'>
                <Sliders/> 
            </div>

            <div className='box-color'>
                 <div className='padding-box'>
                    <div>
                        <h4>FAQ's</h4>
                    </div>
                    <AccordionFAQ/>
                </div>
            </div>

            <div>
                <div>
                    <h4>Team</h4>
                </div>
                <div>
                    <Team members={ members } setMembers={ setMembers }/>
                </div>
            </div>
           

            <div className="box-bg-img-about">
                <div>
                    <h4>Let the Fun Begin</h4>
                </div>
                <div>
                    <button className="btn-link"><Link to='/shop' className="link-in-btn">View Shop</Link></button>
                </div>
            </div>
           
           
           
        </div>
    )
}