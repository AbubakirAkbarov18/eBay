import { useEffect } from 'react'
import './Trendings.scss'
import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";

const Trendings = () => {
    const [mensShoes, setMensShoes] = useState<Products[]>([])
    const [mensShirts, setMensShirts] = useState<Products[]>([])
    const [womensBags, setWomensBags] = useState<Products[]>([])
    const [category, setCategory] = useState<Category[]>([])

    type Products = {
        id: number
        title: string
        images: [string]
        category: string
    }

    type Category = {
        name: string
        url: string
        slug: string
    }

    useEffect(() => {
        axios('https://dummyjson.com/products/categories')
            .then(res => setCategory(res.data.slice(0, 1)))
    }, [])

    useEffect(() => {
        axios('https://dummyjson.com/products/category/mens-shoes')
            .then(res => setMensShoes(res.data.products))
    }, [])

    useEffect(() => {
        axios('https://dummyjson.com/products/category/womens-bags')
            .then(res => setWomensBags(res.data.products))
    }, [])

    useEffect(() => {
        axios('https://dummyjson.com/products/category/mens-shirts')
            .then(res => setMensShirts(res.data.products))
    }, [])
    
    return (
        <section className='trendings'>
            <div className="container">
                <div className="trendings__wrapper">
                    <div className='trendings__cards'>
                        {
                            mensShoes &&
                            mensShoes.map(({ id, title, images, category }) => (
                                <Link className='trendings__link' key={id} to={`/category/${category}/${title}/${id}`}>
                                    <div className="trendings__card">
                                        <img src={images[0]} alt="" />
                                        <h3>{title}</h3>
                                    </div>
                                </Link>
                            ))
                        }
                        {
                            womensBags &&
                            womensBags.map(({ id, title, images, category }) => (
                                <Link className='trendings__link' key={id} to={`/category/${category}/${title}/${id}`}>
                                    <div className="trendings__card">
                                        <img src={images[0]} alt="" />
                                        <h3>{title}</h3>
                                    </div>
                                </Link>
                            ))
                        }
                        {
                            mensShirts &&
                            mensShirts.map(({ id, title, images, category }) => (
                                <Link className='trendings__link' key={id} to={`/category/${category}/${title}/${id}`}>
                                    <div className="trendings__card">
                                        <img src={images[0]} alt="" />
                                        <h3>{title}</h3>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                    <div className="trendings__links">
                        <h2 className='trendings__links-title'>Score these trending kicks</h2>
                        {
                            category &&
                            category.map(({ slug }) => (
                                <Link key={slug} className='trendings__link2' to={mensShoes && `/category/${slug}`}>See all <FaArrowRight className='link__icon' /></Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Trendings