import './ButtonScrollUp.scss'
import { useState } from 'react'
import { HiChevronUp } from "react-icons/hi";

const ButtonScrollUp = () => {
    const [isShow, setIsShow] = useState<boolean>(false)
    addEventListener('scroll', () => {
        window.scrollY >= 200 ? setIsShow(true) : setIsShow(false)
    })
  return (
    <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} data-is-show={isShow} className='button-scroll-up'><HiChevronUp className='button-scroll-up__icon'/></button>
  )
}

export default ButtonScrollUp