import { Link } from 'react-router-dom'
import './MiniFooter.scss'

const MiniFooter = () => {
  return (
        <ul className='mini-footer'>
            <li><Link  className='mini-footer__link' to={'/'}>About eBay</Link></li>
            <li><Link  className='mini-footer__link' to={'/'}>Announcements</Link></li>
            <li><Link  className='mini-footer__link' to={'/'}>Community</Link></li>
            <li><Link  className='mini-footer__link' to={'/'}>Security Center</Link></li>
            <li><Link  className='mini-footer__link' to={'/'}>Seller Center</Link></li>
            <li><Link  className='mini-footer__link' to={'/'}>Policies</Link></li>
            <li><Link  className='mini-footer__link' to={'/'}>Affiliates</Link></li>
            <li><Link  className='mini-footer__link' to={'/'}>Help & Contact</Link></li>
            <li><Link  className='mini-footer__link' to={'/'}>Site Map</Link></li>
        </ul>
  )
}

export default MiniFooter