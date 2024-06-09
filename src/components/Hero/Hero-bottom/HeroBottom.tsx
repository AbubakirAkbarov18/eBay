import '../Hero.scss'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaArrowRight } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { FaArrowRightLong } from "react-icons/fa6";

const HeroBottom = () => {
  const Navigate = useNavigate()
  const [products, setProducts] = useState<Products[]>([])
  const [products2, setProducts2] = useState<Products[]>([])
  const [products3, setProducts3] = useState<Products[]>([])
  const [products4, setProducts4] = useState<Products[]>([])
  const [category, setCategory] = useState<Category[]>([])

  interface Products {
    id: number
    title: string
    category: string
    images: [string]
  }

  type Category = {
    name: string
    url: string
    slug: string
  }

  useEffect(() => {
    axios('https://dummyjson.com/products/categories')
      .then(res => setCategory(res.data))
  }, [])

  useEffect(() => {
    axios('https://dummyjson.com/products/category/womens-dresses')
      .then(res => setProducts(res.data.products.slice(0, 3)))
  }, [])

  useEffect(() => {
    axios('https://dummyjson.com/products/category/smartphones')
      .then(res => setProducts2(res.data.products.slice(0, 3)))
  }, [])

  useEffect(() => {
    axios('https://dummyjson.com/products/category/furniture')
      .then(res => setProducts3(res.data.products.slice(0, 3)))
  }, [])

  useEffect(() => {
    axios('https://dummyjson.com/products/category/laptops')
      .then(res => setProducts4(res.data.products.slice(0, 3)))
  }, [])

  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="hero__bottom-slider"
    >
      <SwiperSlide className='hero__bottom-slide' >
        <div className='hero__bottom-slide-wrapper'>
          <div className='hero__bottom-slide-content'>
            <h1>Super savings at the Brand Outlet</h1>
            <p>Up to 60% off the brands you love.</p>
            <button onClick={() => Navigate(`/category/${category[8].slug}`)}>Shop now <FaArrowRight className='hero__bottom-slide-icon' /></button>
          </div>
          <div className='hero-bottom__images-wrapper'>
            {products &&
              products.map(({ id, images, category }) => (
                <div className='hero-bottom__single' key={id}>
                  <Link className='hero__bottom-link' to={`/category/${category}`}>{category} <FaArrowRightLong /></Link>
                  <img src={images[0]} alt="" />
                </div>
              ))}
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className='hero__bottom-slide' ><div className='hero__bottom-slide-wrapper'>
        <div className='hero__bottom-slide-content'>
          <h1>Super savings at the Electronics</h1>
          <p>Up to 60% off the brands you love.</p>
          <button onClick={() => Navigate(`/category/${category[0].slug}`)}>Shop now <FaArrowRight className='hero__bottom-slide-icon' /></button>
        </div>
        <div className='hero-bottom__images-wrapper'>
          {products2 &&
            products2.map(({ id, images, category }) => (
              <div className='hero-bottom__single' key={id}>
                <Link className='hero__bottom-link' to={`/category/${category}`}>{category} <FaArrowRightLong /></Link>
                <img src={images[0]} alt="" />
              </div>
            ))}
        </div>
      </div></SwiperSlide>
      <SwiperSlide className='hero__bottom-slide' ><div className='hero__bottom-slide-wrapper'>
        <div className='hero__bottom-slide-content'>
          <h1>Super savings at the Furniture</h1>
          <p>Up to 60% off the brands you love.</p>
          <button onClick={() => Navigate(`/category/${category[6].slug}`)}>Shop now <FaArrowRight className='hero__bottom-slide-icon' /></button>
        </div>
        <div className='hero-bottom__images-wrapper'>
          {products3 &&
            products3.map(({ id, images, category }) => (
              <div className='hero-bottom__single' key={id}>
                <Link className='hero__bottom-link' to={`/category/${category}`}>{category} <FaArrowRightLong /></Link>
                <img src={images[0]} alt="" />
              </div>
            ))}
        </div>
      </div></SwiperSlide>
      <SwiperSlide className='hero__bottom-slide' ><div className='hero__bottom-slide-wrapper'>
        <div className='hero__bottom-slide-content'>
          <h1>Super savings at the Laptops</h1>
          <p>Up to 60% off the brands you love.</p>
          <button onClick={() => Navigate(`/category/${category[1].slug}`)}>Shop now <FaArrowRight className='hero__bottom-slide-icon' /></button>
        </div>
        <div className='hero-bottom__images-wrapper'>
          {products4 &&
            products4.map(({ id, images, category }) => (
              <div className='hero-bottom__single' key={id}>
                <Link className='hero__bottom-link' to={`/category/${category}`}>{category} <FaArrowRightLong /></Link>
                <img src={images[0]} alt="" />
              </div>
            ))}
        </div>
      </div></SwiperSlide>
    </Swiper>
  )
}

export default HeroBottom