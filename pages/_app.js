import '../styles/globals.scss'
import { AuthModalProvider } from '../context/authModalContext'

function MyApp({ Component, pageProps }) {
  return (
    <AuthModalProvider>
      <Component {...pageProps} />
    </AuthModalProvider>
  )
}

export default MyApp
