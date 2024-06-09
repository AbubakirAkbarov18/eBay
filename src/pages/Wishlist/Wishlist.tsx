import { Link, useNavigate } from 'react-router-dom';
import './Wishlist.scss'
import { FaArrowRightLong } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';
import { RemoveFromLikedProducts } from '../../redux/slices/LikeSlice';
import { toast } from 'react-toastify';
import { FaHeartCircleXmark } from "react-icons/fa6";

const Wishlist = () => {
    const Dispatch = useDispatch()
    const Navigate = useNavigate()
    const likedProducts: Wishlist[] = useSelector((state: RootState) => state.combine.like.likedProducts)

    interface Wishlist {
        thumbnail: string
        stock: number
        id: number
        category: string
        title: string
    }

    const handleRemovingFromLikedProducts = (id: number) => {
        Dispatch(RemoveFromLikedProducts(id))
        toast.success('Product removed from liked products')
    }

    return (
        <section className='wishlist'>
            <div className='container'>
                <div className='wishlist__wrapper'>
                    <div className='wishlist__content'>
                        <h2>your recently liked items</h2>
                        <button onClick={() => Navigate('/')}>see all <FaArrowRightLong className='wishlist__content-icon'/></button>
                    </div>
                    <div className='wishlist__cards'>
                        {
                            likedProducts &&
                            likedProducts.map(({ thumbnail, stock, id, category, title }) => (
                                <div key={id} className='wishlist__card'>
                                    <Link to={`/category/${category}/${title}/${id}`}><img src={thumbnail} alt="" /></Link>
                                    <div className='wishlist__card-content'>
                                        <Link to={`/category/${category}/${title}/${id}`}><h3>${stock}.99</h3></Link>
                                        <FaHeartCircleXmark onClick={() => handleRemovingFromLikedProducts(id)} className='wishlist__card-icon'/>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Wishlist