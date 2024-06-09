import HeroBottom from './Hero-bottom/HeroBottom'
import HeroTop from './Hero-top/HeroTop'
import './Hero.scss'

const Hero = () => {
    return (
        <section className='hero'>
            <div className="container container--hero">
                <div className="hero__wrapper">
                    <HeroTop/>
                    <HeroBottom/>
                </div>
            </div>
        </section>
    )
}

export default Hero