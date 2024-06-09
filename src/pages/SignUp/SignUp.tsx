import { Link, useNavigate } from 'react-router-dom'
import './SignUp.scss'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
  const [name, setName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [avatar, setAvatar] = useState<string>('')
  const Navigate = useNavigate()

  const handleSignUpForm = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    axios.post('https://api.escuelajs.co/api/v1/users/', {name, email, password, avatar})
    .then(res => {
      localStorage.setItem('user', JSON.stringify(res.data))
      console.log(res);
      if(res.statusText === 'Created' && res.status === 201) {
        toast.success('Account created successfully')
        Navigate('/login')
      }
      else{
        toast.error('Something went wrong, please add info correctly')
      }
    })
  }

  return (
    <section className='sign-up'>
      <div className='container container--auth'>
        <div className='sign-up__wrapper'>
          <h2>Create an account</h2>
          <form onSubmit={handleSignUpForm} className='sign-up__form'>
            <input minLength={6} type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />
            <input minLength={6} type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input minLength={6} type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <input minLength={6} type="url" placeholder='url' value={avatar} onChange={(e) => setAvatar(e.target.value)} />
            <p>By Creating an account, you agree to our <Link to={'/'}>User Agreement</Link> and acknowledge reading our <Link to={'/'}>User Privacy Notice.</Link></p>
            <button>Create Account</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default SignUp