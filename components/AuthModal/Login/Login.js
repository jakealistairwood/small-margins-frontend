import styles from './Login.module.scss'

const Login = ({ displayRegisterModal }) => {
    return (
        <form className={styles.authForm} onSubmit={(e) => e.preventDefualt()}>
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
