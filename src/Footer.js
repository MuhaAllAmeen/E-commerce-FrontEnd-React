import logo2 from './logo2.png'
import location from './location.png'
import email from './email.png'
import phonefooter from './phonefooter.png'
import './Footer.css'
function Footer(){
    return(
        <>
        <div className="footer">
            <div className='footer-content'>
                <div className="footer-heading">
                    <div className="logo-heading-footer">
                        <div className='logoandheading'>
                            <img src={logo2} alt='logo' className='logo2'></img>
                            <h2><span className="headingbold">logo</span><span className='light-heading'>ipsum</span></h2>
                        </div>
                    Our Studio is a digital agency UI/UX Design and Webiste Development Located in Ohio, United States of America
                    </div>
                    <div className="copyright">
                    Copyright Ameen
                    </div>
                </div>
                <div className="social">
                    <ul>
                        <li className='socialmedia'>Our Social Media</li>
                        <li>FaceBook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Youtube</li>
                    </ul>

                </div>
                <div className="contact">
                    <div className='socialmedia'>Contact</div>
                    <div className='location'>
                        <img src={location} alt='loc' className='ico'></img>
                        8819,Ohio
                    </div>
                    <div className='email'>
                        <img src={email} alt='email' className='ico'></img>
                        muhaallameen@gmail.com
                    </div>
                    <div className='phone-footer'>
                        <img src={phonefooter} alt='phone' className='ico'></img>
                        +971 58 686 2539
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer