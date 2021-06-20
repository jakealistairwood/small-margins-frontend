import { createContext, useState } from 'react'

const AuthModalContext = createContext()

export const AuthModalProvider = ({ children }) => {

    const [ modalOpen, setModalOpen ] = useState(false)

    const toggleModal = () => {
        setModalOpen(!modalOpen)
    }

    return (
        <AuthModalContext.Provider value={{
            modalOpen, 
            setModalOpen,
            toggleModal
        }}>
            {children}
        </AuthModalContext.Provider>
    )
}

export default AuthModalContext;