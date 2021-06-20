import { useContext, useState } from 'react'
import styles from './AuthModal.module.scss'
import { FiX } from 'react-icons/fi'
import AuthModalContext from '../../context/authModalContext'
import Login from './Login'
import Register from './Register'

const AuthModal = () => {

    const { modalOpen, toggleModal } = useContext(AuthModalContext)

    const [ userHasAccount, setUserHasAccount ] = useState(false)

    const handleModalDisplay = modalOpen ? `${styles.active}` : "";

    const displayLoginModal = () => {
        setUserHasAccount(true)
    }

    const displayRegisterModal = () => {
        setUserHasAccount(false)
    }

    return (
        <>
            <div className={`${styles.modalContainer} ${handleModalDisplay}`}>
                <div className={styles.authHeader}>
                    {userHasAccount ? (
                        <h2>Login</h2>
                    ) : (
                        <h2>Register</h2>
                    )}
                    <div className={styles.iconContainer} onClick={toggleModal}>
                        <FiX />
                    </div>
                </div>
                {userHasAccount ? (
                    <Login displayRegisterModal={displayRegisterModal} />
                ) : (
                    <Register displayLoginModal={displayLoginModal} />
                )}
                {/* <form className={styles.authForm}>
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
                </form> */}
            </div>
            <div className={`${styles.overlay} ${handleModalDisplay}`}></div>
        </>
    )
}

export default AuthModal
