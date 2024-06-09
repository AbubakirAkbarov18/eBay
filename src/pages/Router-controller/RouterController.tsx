import { Route, Routes } from "react-router-dom"
import Home from "../Home/Home"
import Category from "../Category/Category"
import SingleProduct from "../SingleProduct/SingleProduct"
import Login from "../login/Login"
import SignUp from "../SignUp/SignUp"
import Wishlist from "../Wishlist/Wishlist"
import Cart from "../Cart/Cart"

const RouterController = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/sign-up' element={<SignUp/>}/>
        <Route path='/category/:category__id' element={<Category/>}/>
        <Route path='/category/:category__id/:title/:id' element={<SingleProduct/>}/>
    </Routes>
  )
}

export default RouterController