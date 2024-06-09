import NavBottom from './Nav-bottom/NavBottom'
import NavTop from './Nav-top/NavTop'
import './Nav.scss'

const Nav = () => {
  return (
    <nav className="nav">
        <div className="container">
            <div className="nav__wrapper">
                <NavTop/>
                <NavBottom/>
            </div>
        </div>
    </nav>
  )
}

export default Nav