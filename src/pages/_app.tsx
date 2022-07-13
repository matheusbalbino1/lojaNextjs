import '../styles/globals.scss'
import HeaderMobile from '../componentes/HeaderMobile'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeaderMobile />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
