import { useState, useContext } from 'react'
import styles from './Login.module.scss'
import AuthContext from '../../../context/authContext'

const Login = ({ displayRegisterModal }) => {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const { login } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        login({ email, password })
    }

    return (
        <form className={styles.authForm} onSubmit={handleSubmit}>
            <div className={styles.formControl}>
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                /> 
            </div>
            <div className={styles.formControl}>
                <label htmlFor="password">Password</label>
                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /> 
            </div>
            <div className={styles.btnContainer}>
                <button className={styles.loginBtn}>Login</button>
                <button 
                    type="button" 
                    className={styles.registerBtn}
                    onClick={displayRegisterModal}
                >Register</button>
            </div>
        </form>
    )
}

export default Login
