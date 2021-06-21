import { useState, useContext } from 'react'
import styles from './Register.module.scss'
import AuthContext from '../../../context/authContext'

const Register = ({ displayLoginModal }) => {

    const [ email, setEmail ] = useState('')
    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')

    const { register } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        register({ username, email, password })
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
                <label htmlFor="username">Username</label>
                <input 
                    type="text" 
                    name="username" 
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} 
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
                <button className={styles.loginBtn}>Sign Up</button>
                <button className={styles.registerBtn} onClick={displayLoginModal}>Login</button>
            </div>
        </form>
    )
}

export default Register
