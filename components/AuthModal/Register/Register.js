import styles from './Register.module.scss'

const Register = ({ displayLoginModal }) => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form className={styles.authForm} onSubmit={handleSubmit}>
            <div className={styles.formControl}>
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                /> 
            </div>
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
                <button className={styles.loginBtn}>Sign Up</button>
                <button className={styles.registerBtn} onClick={displayLoginModal}>Login</button>
            </div>
        </form>
    )
}

export default Register
