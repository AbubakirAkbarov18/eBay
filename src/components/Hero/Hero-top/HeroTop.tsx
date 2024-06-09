import { Link } from 'react-router-dom'
import '../Hero.scss'
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

const HeroTop = () => {
  const [category, setCategory] = useState<Category[]>([])

  type Category = {
    name: string
    url: string
    slug: string
  }

  useEffect(() => {
    axios('https://dummyjson.com/products/categories')
    .then(res => setCategory(res.data.slice(0, 13)))
  },[])
    
  return (
    <div className='hero__top'>
        <ul className='hero__top-list'>
            <li className='hero__top-item'> <Link to={'/'} className='hero__top-link hero__top-link--border'>Home</Link> </li>
            {
                category.map(({slug, name, url}) => (
                  <li key={url} className='hero__top-item'> <Link to={`/category/${slug}`} className='hero__top-link'>{name}</Link> </li>
                ))
            }        
        </ul>
    </div>
  )
}

export default HeroTop