import './Header.css'
import Products from './Products.js'
import like from './like.png'
import cart from './cart.png'
import profile from './profile.png'
import About from './About.js'
import {Routes,Route} from 'react-router-dom'

function Header(){
    return(
        <>     
        <div className='header-and-shop'>
            <div className="header">
                <div className="list-header">
                <ul>
                        
                    <li><a href="/">Home</a></li>
                    <li><a href="About">About</a></li>
                    <li><a href="">FAQ</a></li>
                    <li><a href="">Blog</a></li>
                </ul>
                </div>
                <div className="list-icons">
                    <img src={like} alt='like' className='like'></img>
                    <img src={cart} alt='cart' className='cart'></img>
                    <img src={profile} alt='profile' className='profile'></img>

                </div>
            </div>
            <div className='shop-image'>
                <div className='shop-heading'>
                    <h4>Home > Shop</h4>
                    <h1>Shop</h1>
                </div>
                <div className='image'>
                    <img className="bg-image" src='https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?cs=srgb&dl=pexels-kai-pilger-996329.jpg&fm=jpg'></img>
                </div>
            </div>

        </div>
        <Products/>

        </>
        
    )
}

export default Header