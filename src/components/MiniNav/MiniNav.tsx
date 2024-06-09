import './MiniNav.scss'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const MiniNav = () => {
    const { pathname } = useLocation()
    return (
        <div className='mini-nav'>
            <div className='container'>
                <div className="mini-nav__wrapper">
                    <img width={150} src={logo} alt=""/>
                    {pathname.includes('sign-up') && <p className='mini-nav__text mini-nav__text--signup'>Already a member? <Link to={'/login'}>Login</Link></p>}
                    {pathname.includes('login') && <p className='mini-nav__text mini-nav__text--login'>Tell us what you think</p>}
                </div>
            </div>
        </div>
    )
}

export default MiniNav