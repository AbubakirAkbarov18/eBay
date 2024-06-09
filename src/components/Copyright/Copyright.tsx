import { Link, useLocation } from 'react-router-dom'
import './Copyright.scss'

const Copyright = () => {
  const { pathname } = useLocation()
  return (
    <p style={pathname === '/' ? {textAlign: 'center'} : {} || pathname.includes('login') ? {textAlign: 'center', borderTop: '1px solid rgb(204, 204, 204)', paddingTop: '40px', paddingBottom: '105px'} : {} || pathname.includes('sign-up') ? {textAlign: 'center', borderTop: '1px solid rgb(204, 204, 204)', paddingTop: '40px', paddingBottom: '105px'} : {}} className='copyright'>Copyright © 1995-2024 eBay Inc. All Rights Reserved. <Link className='copyright__link' to={'/'}>Accessibility,</Link> <Link className='copyright__link' to={'/'}>User Agreement,</Link> <Link className='copyright__link' to={'/'}>Privacy,</Link> <Link className='copyright__link' to={'/'}>Payments Terms of Use,</Link> <Link className='copyright__link' to={'/'}>Cookies,</Link> <Link className='copyright__link' to={'/'}>CA Privacy Notice,</Link> <Link className='copyright__link' to={'/'}>Your Privacy Choices</Link> and <Link className='copyright__link' to={'/'}>AdChoice</Link></p>
  )
}

export default Copyright