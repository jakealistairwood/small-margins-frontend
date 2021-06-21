import '../styles/globals.scss'
import { AuthModalProvider } from '../context/authModalContext'
import { AuthProvider } from '../context/authContext'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <AuthModalProvider>
        <Component {...pageProps} />
      </AuthModalProvider>
    </AuthProvider>
  )
}

export default MyApp
