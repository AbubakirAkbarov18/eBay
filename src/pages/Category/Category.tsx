import './Category.scss'
import CategoryBanner from './CategoryBanner/CategoryBanner'
import CategoryCards from './CategoryCards/CategoryCards'

const Category = () => {
  return (
    <section className='category'>
        <div className="container container--category">
            <div className='category__wrapper'>
            <CategoryBanner/>
            <CategoryCards/>
            </div>
        </div>
    </section>
  )
}

export default Category