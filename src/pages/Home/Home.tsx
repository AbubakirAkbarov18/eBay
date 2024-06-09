import Deals from "../../components/Deals/Deals"
import Features from "../../components/Features/Features"
import Hero from "../../components/Hero/Hero"
import Trendings from "../../components/Trendings/Trendings"

const Home = () => {
  return (
    <div>
      <Hero/>
      <Trendings/>
      <Features/>
      <Deals/>
    </div>
  )
}

export default Home