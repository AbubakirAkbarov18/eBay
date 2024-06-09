import './Features.scss'
import logoBlue from '../../assets/logo-blue.png'
import { FaArrowRight } from "react-icons/fa";
import FeaturesImg from '../../assets/Features-img.png'
import FeaturesImg2 from '../../assets/Features-img2.png'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Features = () => {
  const [category, setCategory] = useState<Category[]>([])
  const Navigate = useNavigate()

  type Category = {
    name: string
    url: string
    slug: string
  }

  useEffect(() => {
    axios('https://dummyjson.com/products/categories')
      .then(res => setCategory(res.data))
  }, [])
  
  return (
    <section className='features'>
        <div className="container container--features">
            <div className="features__wrapper">
                <div className="features__left-side">
                    <div className="features__left-side-content">
                        <p>Featured</p>
                        <img src={logoBlue} alt="" />
                        <h3>Deals made easy all year long.</h3>
                        <p>Free shipping. Best prices.</p>
                        <button onClick={() => Navigate(`/category/${category[17].slug}`)}>Get your thing <FaArrowRight className='features__icon'/></button>
                    </div>
                    <img src={FeaturesImg} alt="" />
                </div>
                <img src={FeaturesImg2} alt="" />
            </div>
        </div>
    </section>
  )
}

export default Features