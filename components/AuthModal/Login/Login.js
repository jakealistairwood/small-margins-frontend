import { useState } from 'react'
import styles from './Login.module.scss'

const Login = ({ displayRegisterModal }) => {

    const [ username, setUsername ] = useState('')
    const [ password, setPassword ] = useState('')

    return (
        <form className={styles.authForm} onSubmit={(e) => e.preventDefualt()}>
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
