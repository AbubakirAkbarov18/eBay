import { useEffect } from 'react'
import './Deals.scss'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Deals = () => {
    const [furniture, setFurniture] = useState<Products[]>([])
    const [fragrances, setFragrances] = useState<Products[]>([])
    const [homeDecoration, setHomeDecoration] = useState<Products[]>([])
    const [category, setCategory] = useState<Category[]>([])

  useEffect(() => {
    axios('https://dummyjson.com/products/categories')
      .then(res => setCategory(res.data.slice(0, 1)))
  }, [])

    type Products = {
        title: string
        id: number
        price: number
        rating: number
        images: [string]
        category: string
    }

    type Category = {
        name: string
        url: string
        slug: string
    }

    useEffect(() => {
        axios('https://dummyjson.com/products/category/furniture')
            .then(res => setFurniture(res.data.products))
    }, [])

    useEffect(() => {
        axios('https://dummyjson.com/products/category/home-decoration')
            .then(res => setHomeDecoration(res.data.products))
    }, [])

    useEffect(() => {
        axios('https://dummyjson.com/products/category/fragrances')
            .then(res => setFragrances(res.data.products))
    }, []) 
        
    return (
        <section className='deals'>
            <div className="container">
                <div className="deals__wrapper">
                    <div className='deals__links'>
                        <h2 className='trendings__links-title'>Today's Deals - All With Free Shipping</h2>
                        {
                            category &&
                            category.map(({ slug }) => (
                                <Link key={slug} className='deals__single-link' to={`/category/${slug}`}> See all <FaArrowRight className='deals__icon'/></Link>
                            ))
                        }
                    </div>
                    <div className='deals__cards'>
                    {
                        furniture &&
                        furniture.map(({ id, price, images, rating, category, title }) => (
                            <Link className='deals__link' key={id} to={`/category/${category}/${title}/${id}`}>
                                <div className="deals__card">
                                    <img src={images[0]} alt="" />
                                    <div className='deals__price'>
                                        <h3>${price}.99</h3>
                                        <p>58% OFF</p>
                                    </div>
                                    <h3><FaStar className='deals__star'/> {rating}</h3>
                                </div>
                            </Link>
                        ))
                    }
                    {
                        homeDecoration &&
                        homeDecoration.map(({ id, price, images, rating, category, title }) => (
                            <Link className='deals__link' key={id} to={`/category/${category}/${title}/${id}`}>
                                <div className="deals__card">
                                <img src={images[0]} alt="" />
                                <div className='deals__price'>
                                    <h3>${price}.99</h3>
                                    <p>58% OFF</p>
                                </div>
                                <h3><FaStar className='deals__star'/> {rating}</h3>
                            </div>
                            </Link>
                        ))
                    }
                    {
                        fragrances &&
                        fragrances.map(({ id, price, images, rating, category, title }) => (
                            <Link className='deals__link' key={id} to={`/category/${category}/${title}/${id}`}>
                                <div className="deals__card">
                                <img src={images[0]} alt="" />
                                <div className='deals__price'>
                                    <h3>${price}.99</h3>
                                    <p>58% OFF</p>
                                </div>
                                <h3><FaStar className='deals__star'/> {rating}</h3>
                            </div>
                            </Link>
                        ))
                    }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Deals