import '../Nav.scss'
import logo from '../../../assets/logo.png'
import { IoMdSearch } from "react-icons/io";
import { FaTrash } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const NavBottom = () => {
    const [seacrh, setSearch] = useState<string>('')
    const [categories, setCategories] = useState<Category[]>([])
    const [select, setSelect] = useState<string>('')

    type Category = {
        name: string
        url: string
        slug: string
    }

    useEffect(() => {
        axios('https://dummyjson.com/products/categories')
            .then(res => setCategories(res.data))
    }, []) 

    useEffect(() => {
        axios(`https://dummyjson.com/products/category/${select}`)
            .then(res => {
                window.location.href = `/category/${select}`
                console.log(res.data.products);
            })
    }, [select])
        
    return (
        <div className='nav__bottom'>
            <div className="nav-bottom__wrapper">
                <img width={150} src={logo} alt="" />
                <form className='nav-bottom__form'>
                    <input type="search" placeholder='Search for anything' value={seacrh} onChange={e => setSearch(e.target.value)} />
                    <IoMdSearch className='nav-bottom__icon'/>
                    {seacrh && <FaTrash className='nav-bottom__trash-icon' onClick={() => setSearch('')} />}
                    <select onChange={(e: any) => setSelect(e.target.value)} className='nav-bottom__select2'>
                        <option defaultValue={'All Categorys'}>All Categorys</option>
                        {
                            categories.map(item => (
                                <option key={item.url} value={item.slug}>{item.name}</option>
                            ))
                        }
                    </select>
                    <button type='submit' className='nav-bottom__button'>search</button>
                </form>
                <Link className='nav-bottom__link' to={'/'}>Advanced</Link>
            </div>
        </div>
    )
}

export default NavBottom