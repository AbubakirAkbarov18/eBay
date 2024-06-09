import { useLocation } from 'react-router-dom'
import './App.scss'
import Footer from './components/Footer/Footer'
import Nav from './components/Nav/Nav'
import RouterController from './pages/Router-controller/RouterController'
import Copyright from './components/Copyright/Copyright'
import ButtonScrollUp from './components/button-scroll-up/ButtonScrollUp'
import MiniFooter from './components/MiniFooter/MiniFooter'
import MiniNav from './components/MiniNav/MiniNav'
import { ToastContainer } from 'react-toastify';


function App() {
  const { pathname } = useLocation()

  return (
    <>
    <ToastContainer/>
     {!pathname.includes('login') && <Nav/> && !pathname.includes('sign-up') && <Nav/>}
     {pathname.includes('login') && <MiniNav/> || pathname.includes('sign-up') && <MiniNav/>}
     <RouterController/>
     {pathname === '/' && <Footer/>}
     {pathname === '/' && <ButtonScrollUp/>}
     {pathname.includes('category') && <ButtonScrollUp/>}
     {pathname.includes('category') && 
      <div className='LittleFooter'>
        <div className='container'>
          <div className='LittleFooter__wrapper'>
            <MiniFooter/>
            <Copyright/>
          </div>
        </div>
      </div>
      }
      {!pathname.includes('category') && <Copyright/>}
    </>
  )
}

export default App
