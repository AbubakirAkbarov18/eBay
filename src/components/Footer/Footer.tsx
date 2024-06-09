import { Link } from 'react-router-dom'
import './Footer.scss'
import { FaXTwitter } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="container">
            <div className="footer__wrapper">
                <ul className='footer__list'>
                    <li className='footer__item'>Buy</li>
                    <li className='footer__item'><Link to={'/'} className='footer__link'>Registration</Link></li>
                    <li className='footer__item'><Link to={'/'} className='footer__link'>eBay Money Back Guarantee</Link></li>
                    <li className='footer__item'><Link to={'/'} className='footer__link'>Bidding & buying help</Link></li>
                    <li className='footer__item'><Link to={'/'} className='footer__link'>Stores</Link></li>
                    <li className='footer__item'><Link to={'/'} className='footer__link'>eBay for Charity</Link></li>
                    <li className='footer__item'><Link to={'/'} className='footer__link'>Charity Shop</Link></li>
                    <li className='footer__item'><Link to={'/'} className='footer__link'>Seasonal Sales and events</Link></li>
                </ul>
                <div className="footer__big-list">
                <ul className='footer__list'>
                    <li className='footer__item'>Sell</li>
                    <li className='footer__item'><Link to={'/'} className='footer__link'>Start selling</Link></li>
                    <li className='footer__item'><Link to={'/'} className='footer__link'>How to sell</Link></li>
                    <li className='footer__item'><Link to={'/'} className='footer__link'>Business sellers</Link></li>
                    <li className='footer__item'><Link to={'/'} className='footer__link'>Affiliates</Link></li>
                </ul>
                <ul className='footer__list'>
                    <li className='footer__item'>Tools & apps</li>
                    <li className='footer__item'><Link to={'/'} className='footer__link'>Developers</Link></li>
                    <li className='footer__item'><Link to={'/'} className='footer__link'>Security center</Link></li>
                    <li className='footer__item'><Link to={'/'} className='footer__link'>Site map</Link></li>
                </ul>
                </div>
                <ul className='footer__list footer__list--fourth'>
                    <li className='footer__item'>Stay connected</li>
                    <li className='footer__item'><Link target='blank' to={'https://www.facebook.com/ebay/'} className='footer__link'> <FaFacebookSquare className='footer__icon'/> Facebook</Link></li>
                    <li className='footer__item'><Link target='blank' to={'https://twitter.com/eBay'} className='footer__link'> <FaXTwitter className='footer__icon'/> \ <FaTwitter className='footer__icon'/> Twitter</Link></li>
                </ul>
                <ul className='footer__list'>
                    <li className='footer__item'>About eBay</li>
                    <li className='footer__item'><Link target='blank' to={'/'} className='footer__link'>Company info</Link></li>
                    <li className='footer__item'><Link target='blank' to={'/'} className='footer__link'>News</Link></li>
                    <li className='footer__item'><Link target='blank' to={'/'} className='footer__link'>Investors</Link></li>
                    <li className='footer__item'><Link target='blank' to={'/'} className='footer__link'>Careers</Link></li>
                    <li className='footer__item'><Link target='blank' to={'/'} className='footer__link'>Diversity & Inclusion</Link></li>
                    <li className='footer__item'><Link target='blank' to={'/'} className='footer__link'>Global Impact</Link></li>
                    <li className='footer__item'><Link target='blank' to={'/'} className='footer__link'>Government relations</Link></li>
                    <li className='footer__item'><Link target='blank' to={'/'} className='footer__link'>Advertise with us</Link></li>
                    <li className='footer__item'><Link target='blank' to={'/'} className='footer__link'>Policies</Link></li>
                    <li className='footer__item'><Link target='blank' to={'/'} className='footer__link'>Verified Rights Owner (VeRO) Program</Link></li>
                    <li className='footer__item'><Link target='blank' to={'/'} className='footer__link'>eCI Licenses</Link></li>
                </ul>
                <div className="footer__big-list">
                <ul className='footer__list'>
                    <li className='footer__item'>Help & Contact</li>
                    <li className='footer__item'><Link to={'/'} className='footer__link'>Seller Center</Link></li>
                    <li className='footer__item'><Link to={'/'} className='footer__link'>Contact Us</Link></li>
                    <li className='footer__item'><Link to={'/'} className='footer__link'>eBay Returns</Link></li>
                </ul>
                <ul className='footer__list'>
                    <li className='footer__item'>Community</li>
                    <li className='footer__item'><Link to={'/'} className='footer__link'>Announcements</Link></li>
                    <li className='footer__item'><Link to={'/'} className='footer__link'>eBay Community</Link></li>
                    <li className='footer__item'><Link to={'/'} className='footer__link'>eBay for Business Podcast</Link></li>
                </ul>
                <ul className='footer__list'>
                    <li className='footer__item'>eBay Sites</li>
                </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer