import { Link } from 'react-router-dom'
import './Login.scss'
import { useState } from 'react'
import { FaPen } from "react-icons/fa";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { BsFillInfoCircleFill } from "react-icons/bs";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [learn, setLearn] = useState<boolean>(false)
    const Navigate = useNavigate()

    const handleLoginForm = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        axios.post('https://api.escuelajs.co/api/v1/auth/login', { email, password })
            .then(res => {
                localStorage.setItem('token', JSON.stringify(res.data.access_token))
                console.log(res.data)
                if (res.data.access_token) {
                    toast.success('You loged in successfully')
                    Navigate('/')
                }
                else {
                    toast.error('Something went wrong, please add info correctly')
                }
            })
    }

    return (
        <div className='login'>
            <div className='container container--auth'>
                <div className='login__wrapper'>
                    <h2>Hello</h2>
                    <p className='login__register'>Sign in to eBay or <Link to={'/sign-up'}>create an account</Link></p>
                    <form onSubmit={handleLoginForm} className='login__form'>
                        <input className='login__input' minLength={6} type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                        <input className='login__input' minLength={6} type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                        <button>Continue</button>
                        <FormControlLabel className='login__checkbox' control={<Checkbox defaultChecked />} label="Stay signed in" />
                        <p className='login__text'>Using a public or shared device? <br /> Uncheck to protect your account.</p>
                        <div onClick={() => setLearn(!learn)} data-is-learn={learn} className='login__learn-wrapper'>
                            <div className='login__learn-content'>
                                <p className='login__learn-text'>Learn more</p> <FaPen className='login__icon' />
                            </div>
                            <div className='login__info'>
                                <BsFillInfoCircleFill className='login__info-icon' />
                                <p>With this box checked, we"ll keep you signed in, making it easier to bid and buy. You'll also be all set to pay if you've saved your payment info. You can always turn off this feature in My eBay. We may ask you to sign in again for some activities, such as making changes to your account</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login