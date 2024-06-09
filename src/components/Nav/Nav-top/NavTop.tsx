import '../Nav.scss'
import { Link } from 'react-router-dom'
import { FaRegBell } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import { useNavigate } from 'react-router-dom'
import WishlistPanel from '../../WishlistPanel/WishlistPanel';
import { useState } from 'react';
import { IoChevronDownOutline } from "react-icons/io5";

const NavTop = () => {
    const Navigate = useNavigate()
    const [isWishlistActive, setIsWishlistActive] = useState<boolean>(false)
  return (
    <div className='nav__top'>
        <div className="nav-top__wrapper">
            <ul className='nav-top__list'>
                <li className='nav-top__item'>Hi! <Link className='nav-top__link nav-top__link--blue' to={'/sign-in'}>Sign in</Link> or <Link className='nav-top__link nav-top__link--blue' to={'/register'}>register</Link></li>
                <li className='nav-top__item'><Link className='nav-top__link' to={'/'}>Daily Deals</Link></li>
                <li className='nav-top__item'><Link className='nav-top__link' to={'/'}>Brand Outlet</Link></li>
                <li className='nav-top__item'><Link className='nav-top__link' to={'/'}>Help & Contact</Link></li>
            </ul>
            <div className='nav-top__icons'>
                 <Link className='nav-top__link' to={'/'}>Sell</Link> 
                 <div data-active={isWishlistActive} onClick={() => setIsWishlistActive(!isWishlistActive)} className='nav-top__wishlist'>
                    <p className='nav-top__wishlist-text'>Wishlist</p>
                    <IoChevronDownOutline className='nav-top__wishlist-icon'/>
                    {isWishlistActive && <WishlistPanel />}
                 </div>
                <select className='nav-top__select'>
                    <option>My eBay</option>
                </select>
                <FaRegBell className='nav-top__icon'/>
                <BsCart3 onClick={() => Navigate('/cart')} className='nav-top__icon'/>
            </div>
        </div>
    </div>
  )
}

export default NavTop