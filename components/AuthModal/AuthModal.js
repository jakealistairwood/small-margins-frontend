import styles from './AuthModal.module.scss'
import { FiX } from 'react-icons/fi'

const AuthModal = () => {
    return (
        <>
            <div className={styles.modalContainer}>
                <div className={styles.authHeader}>
                    <h2>Login</h2>
                    <div className={styles.iconContainer}>
                        <FiX />
                    </div>
                </div>
                <form className={styles.authForm}>
                    <div className={styles.formControl}>
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            name="username" 
                            id="username" 
                        /> 
                    </div>
                    <div className={styles.formControl}>
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            name="password" 
                            id="password" 
                        /> 
                    </div>
                    <div className={styles.btnContainer}>
                        <button className={styles.loginBtn}>Login</button>
                        <button className={styles.registerBtn}>Register</button>
                    </div>
                </form>
            </div>
            <div className={styles.overlay}></div>
        </>
    )
}

export default AuthModal
