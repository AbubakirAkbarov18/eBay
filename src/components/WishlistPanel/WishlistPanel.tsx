import './WishlistPanel.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store/store'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'

const WishlistPanel = () => {
    const Navigate = useNavigate()
    const { likedProducts } = useSelector((state: RootState) => state.combine.like)
    
  return (
    <div className='wishlist-panel'>
        <div className="wishlist-panel__wrapper">
            <div className='wishlist-panel__content'>
                <Link to={'/wishlist'}>View all items in your wishlist</Link>
                <FaArrowRight onClick={() => Navigate('/wishlist')} className='wishlist-panel__content-icon'/>
            </div>
            <div className='wishlist-panel__cards'>
                {
                    likedProducts &&
                    likedProducts.slice(0, 4).map(({ thumbnail, stock, id, category, title, description }) => (
                        <div key={id} className='wishlist__card'>
                            <Link to={`/category/${category}/${title}/${id}`}>
                                <img src={thumbnail} alt="" />
                            </Link>
                            <div className='wishlist__card-content'>
                                <h4 className='wishlist__card-title'>{description}</h4>
                                <Link className='wishlist__card-link' to={`/category/${category}/${title}/${id}`}>${stock}.99</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default WishlistPanel