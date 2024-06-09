import { useNavigate, useParams } from 'react-router-dom';
import '../SingleProduct.scss'
import { TiChevronLeft } from "react-icons/ti";
import { addToLikedProducts } from '../../../redux/slices/LikeSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

const SingleProductPath = () => {
    const Navigate = useNavigate()
    const {category__id, title} = useParams()
    const dispatch = useDispatch()
    const { id } = useParams()
    const [product, setProduct] = useState<object>({})

    useEffect(() => {
        axios(`https://dummyjson.com/products/${id}`)
            .then(res => setProduct(res.data))
    }, [])    
  return (
    <div className='single-product__path'>
        <div className='single-product__path-left'>
        <div className='single-product__path-action' onClick={() => Navigate('/')}>
            <button className='single-product__path-btn'><TiChevronLeft className='single-product__path-btn'/></button>
            <p>Back to home page</p>
        </div>
        <div className='single-product__path-content'>
            <p className='single-product__path-text single-product__path-text--black'>Listed in category:</p>
            <p onClick={() => Navigate(-1)} className='single-product__path-text single-product__path-text--blue'>{category__id}</p>
            <span>\</span>
            <p className='single-product__path-text single-product__path-text--blue'>{title}</p>
        </div>
        </div>
        <div className='single-product__path-right'>
        <div className='single-product__path-content'>
            <p className='single-product__path-text single-product__path-text--blue'>Share</p>
            <span>|</span>
            <p onClick={() => dispatch(addToLikedProducts(product))} className='single-product__path-text single-product__path-text--blue'>Wishlist</p>
        </div>
        </div>
    </div>
  )
}

export default SingleProductPath