import '../Category.scss'
import { useParams } from 'react-router-dom'


const CategoryBanner = () => {
    const { category__id } = useParams()
    
  return (
    <div className='category__banner'>
        <div className="category-banner__wrapper">
            <h2>Featured Event</h2>
            <div className="category-banner__banner-img"/>
            <h3>Up to 60% off {category__id}</h3>
            <p>Save on all {category__id} and more</p>
        </div>
    </div>
  )
}

export default CategoryBanner