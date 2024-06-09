import './Cart.scss'
import { Link, useNavigate } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";
import { useSelector, useDispatch } from 'react-redux';
import { BsCartDashFill } from "react-icons/bs";
import { toast } from 'react-toastify';
import { RemoveFromCart } from '../../redux/slices/CartSlice';
import { IncreaseQuantity } from '../../redux/slices/CartSlice';
import { DecreaseQuantity } from '../../redux/slices/CartSlice';
import { useEffect, useState } from 'react';

const Cart = () => {
    const Navigate = useNavigate()
    const Dispatch = useDispatch()
    const [totalPrice, setTotalPrice] = useState(0)
    const cart: Cart[] = useSelector((state: any) => state.combine.cart.cart)

    interface Cart {
        thumbnail: string
        stock: number
        id: number
        category: string
        title: string
        count: number
    }

    const handleRemovingFromCart = (id: number) => {
        Dispatch(RemoveFromCart(id))
        toast.success('Product removed from cart')
    }

    useEffect(() => {
        const total = cart.reduce((acc: number, { stock, count }) => acc + stock * count, 0)
        setTotalPrice(total)
    }, [cart])

    return (
        <section className='cart'>
            <div className='container'>
                <div className='cart__wrapper'>
                    <h3 className='cart__total-balance'>Total Price: ${totalPrice}.99</h3>
                    <div className='cart__content'>
                        <h2>your recently added to cart items</h2>
                        <button onClick={() => Navigate('/')}>see all <FaArrowRightLong className='cart__content-icon'/></button>
                    </div>
                    <div className='cart__cards'>
                        {
                            cart &&
                            cart.map(({ thumbnail, stock, id, category, title, count }) => (
                                <div key={id} className='cart__card'>
                                    <Link to={`/category/${category}/${title}/${id}`}><img src={thumbnail} alt="" /></Link>
                                    <div className='cart__card-content'>
                                        <Link to={`/category/${category}/${title}/${id}`}><h3>${stock * count}.99</h3></Link>
                                        <BsCartDashFill onClick={() => handleRemovingFromCart(id)} className='cart__card-icon' />
                                    </div>
                                    <div className='cart__card-counts'>
                                        <button onClick={() => Dispatch(IncreaseQuantity(id))}>+</button>
                                        <p>{count}</p>
                                        <button onClick={() => Dispatch(DecreaseQuantity(id))}>-</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Cart