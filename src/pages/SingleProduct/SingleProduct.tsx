import { useEffect } from 'react'
import './SingleProduct.scss'
import SingleProductPath from './SingleProductPath/SingleProductPath'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { addToLikedProducts } from '../../redux/slices/LikeSlice'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/slices/CartSlice'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { AppDispatch } from '../../redux/store/store'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store/store'
import { RemoveFromCart } from '../../redux/slices/CartSlice'
import { RemoveFromLikedProducts } from '../../redux/slices/LikeSlice'
import { IoMdHeart } from "react-icons/io";

const SingleProduct = () => {
    const { id } = useParams()
    const [product, setProduct] = useState<any>({})
    const [count, setCount] = useState(1)
    const dispatch = useDispatch<AppDispatch>()
    const likedProducts: any = useSelector<RootState>(state => state.combine.like.likedProducts)
    const cart: any = useSelector<RootState>(state => state.combine.cart.cart)

    useEffect(() => {
        axios(`https://dummyjson.com/products/${id}`)
            .then(res => setProduct(res.data))
    }, [])

    const handleAddToCart = (product: any) => {
        product.count = count;
        dispatch(addToCart(product));
    }

    const handleRemoveFromCart = (id: number) => {
        dispatch(RemoveFromCart(id));
    }

    const handleAddToLikedProducts = (product: any) => {
        dispatch(addToLikedProducts(product));
    }

    const handleRemoveFromLikedProducts = (id: number) => {
        dispatch(RemoveFromLikedProducts(id));
    }

    return (
        <section className='single-product'>
            <div className="container">
                <div className="single-product__wrapper">
                    <SingleProductPath />
                    <div className="single-product__content">
                        <div className="single-product__content-left">
                            <img src={product.thumbnail} alt="" />
                            <div className='single-product__content-left-content'>
                                <strong>Upgrading? Sell it, don't trade it.</strong>
                                <button>Sell now</button>
                            </div>
                        </div>
                        <div className="single-product__content-right">
                            <h2>{product.title} - {product.description}</h2>
                            <div className='single-product__content-configure'>
                                <div className='single-product__content-configure-head'>
                                    <h4>Condition:</h4>
                                    <div className='single-product__content-configure-head-text'>
                                        <strong>Open box</strong>
                                        <p>" {product.description} "</p>
                                    </div>
                                </div>
                                <div className='single-product__content-configure-text'>
                                    <span>Model:</span>
                                    <p>{product.title}</p>
                                </div>
                                <div className='single-product__content-configure-text'>
                                    <span>Brand:</span>
                                    <p>{product.brand}</p>
                                </div>
                                <div className='single-product__content-configure-text'>
                                    <span>Rating:</span>
                                    <p>{product.rating}</p>
                                </div>
                                <div className='single-product__content-configure-text'>
                                    <span>Color:</span>
                                    <p>None</p>
                                </div>
                                <div className='single-product__content-quantity'>
                                    <span>Quantity:</span>
                                    <input type="text" value={count} onChange={e => setCount(Number(e.target.value))} />
                                </div>
                            </div>
                            <div className='single-product__content-bottom'>
                                <div className='single-product__content-price'>
                                    <div className='single-product__content-price-top'>
                                        <p>Price:</p>
                                        <h2>US ${product.stock}</h2>
                                    </div>
                                    <p className='single-product__content-price-bottom-text'>No Interest if paid in full in 6 mo on $99+*</p>
                                </div>
                                <div className='single-product__content-btns'>
                                    <button className='single-product__content-btn--blue'>Buy It Now</button>
                                    <button onClick={() => cart.map((el: any) => el.id).includes(product.id) ? handleRemoveFromCart(product.id) : handleAddToCart(product)} className='single-product__content-btn--whiteblue'>{cart.map((el: any) => el.id).includes(product.id) ? 'Remove from cart' : 'Add to cart'}</button>
                                    <button onClick={() => likedProducts.map((el: any) => el.id).includes(product.id) ? handleRemoveFromLikedProducts(product.id) : handleAddToLikedProducts(product)} className='single-product__content-btn--white'>{likedProducts.map((el: any) => el.id).includes(product.id) ? <IoMdHeart className='single-product__icon-red'/> : <CiHeart className='single-product__icon' />} {likedProducts.map((el: any) => el.id).includes(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SingleProduct