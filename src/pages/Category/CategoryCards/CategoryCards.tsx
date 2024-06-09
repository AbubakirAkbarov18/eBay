import '../Category.scss'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { IoStar } from "react-icons/io5";
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../redux/slices/CartSlice'
import { addToLikedProducts } from '../../../redux/slices/LikeSlice'
import { AppDispatch } from '../../../redux/store/store'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store/store'
import { RemoveFromCart } from '../../../redux/slices/CartSlice'
import { RemoveFromLikedProducts } from '../../../redux/slices/LikeSlice'
import { FaHeartCirclePlus } from "react-icons/fa6";
import { FaHeartCircleMinus } from "react-icons/fa6";
import { BsFillCartPlusFill } from "react-icons/bs";
import { BsFillCartDashFill } from "react-icons/bs";


const CategoryCards = () => {
    const { category__id } = useParams()
    const [product, setProduct] = useState<Product[]>([])
    const dispatch = useDispatch<AppDispatch>()
    const likedProducts: any = useSelector<RootState>(state => state.combine.like.likedProducts)
    const cart: any = useSelector<RootState>(state => state.combine.cart.cart)

    type Product = {
        id: number
        title: string
        description: string
        price: number
        rating: number
        stock: number
        images: string[]
        thumbnail: string
        count: number
    }

    useEffect(() => {
        axios(`https://dummyjson.com/products/category/${category__id}`)
            .then(res => setProduct(res.data.products))
    }, [])

    const handleAddToCart = (product: Product) => {
        product.count = 1;
        dispatch(addToCart(product));
    }

    const handleRemoveFromCart = (id: number) => {
        dispatch(RemoveFromCart(id));
    }

    const handleAddToLikedProducts = (product: Product) => {
        // product.count = 1;
        dispatch(addToLikedProducts(product));
    }

    const handleRemoveFromLikedProducts = (id: number) => {
        dispatch(RemoveFromLikedProducts(id));
    }


    return (
        <div className='category__cards'>
            {
                product.map(product => (
                    <div key={product.id} className='category__card'>
                        <Link className='category__card-link' to={`/category/${category__id}/${product.title}/${product.id}`}>
                            <img src={product.thumbnail} alt="" />
                        </Link>
                        <div className='category__card-content'>
                            <Link className='category__card-link' to={`/category/${category__id}/${product.title}/${product.id}`}>
                            <h4><span>{product.title}</span> " {product.description}</h4>
                            <div className='category__card-price'>
                                <strong>${product.stock}.99</strong>
                                <p>{product.rating}<IoStar className='category__card-star'/></p>
                            </div>
                            <p className='category__card-old'>Was: <span>${product.price}.99</span></p>
                            </Link>
                            <div className='category__card-actions'>
                                <button onClick={() => cart.map((el: any) => el.id).includes(product.id) ? handleRemoveFromCart(product.id) : handleAddToCart(product)} className='category__card-btn'>{cart.map((el: any) => el.id).includes(product.id) ? <BsFillCartDashFill className='category__card-cart-minus'/> : <BsFillCartPlusFill className='category__card-cart-plus'/>}</button>
                                <button onClick={() => likedProducts.map((el: any) => el.id).includes(product.id) ? handleRemoveFromLikedProducts(product.id) : handleAddToLikedProducts(product)} className='category__card-btn'>{likedProducts.map((el: any) => el.id).includes(product.id) ? <FaHeartCircleMinus className='category__card-heart-minus'/> : <FaHeartCirclePlus className='category__card-heart-plus'/>}</button>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CategoryCards