import { createContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { NEXT_URL } from '../config/index'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [ user, setUser ] = useState(null)

    const router = useRouter()

    useEffect(() => {
        checkUserLoggedIn()
    }, [])

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
            router.push('/')
        } else {
            console.log(data.message)
        }
    }

    const logout = async() => {
        const res = await fetch(`${NEXT_URL}/api/logout`, {
            method: 'POST'
        })

        if(res.ok) {
            setUser(null)
            router.push('/')
        }
    }

    const checkUserLoggedIn = async(user) => {
        const res = await fetch(`${NEXT_URL}/api/user`)
        const data = await res.json()

        if(res.ok) {
            setUser(data.user)
        } else {
            setUser(null)
        }
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