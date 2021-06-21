import { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { NEXT_URL } from '../config/index'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState(null)

    const register = async(user) => {
        console.log(user)
    }

    const login = async({email:identifier, password}) => {
        console.log({identifier, password})
        const res = await fetch(`${NEXT_URL}/api/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                identifier, 
                password
            })
        })

        const data = await res.json()

        console.log(data)

        if(res.ok) {
            setUser(data.user)
        } else {
            console.log(data.message)
        }
    }

    const logout = () => {
        console.log('logged out')
    }

    const checkUserLoggedIn = () => {
        console.log('check')
    }

    return (
        <AuthContext.Provider value={{
            user, 
            register,
            login, 
            logout,
            checkUserLoggedIn
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext