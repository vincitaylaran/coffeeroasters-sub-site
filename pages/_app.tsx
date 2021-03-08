import "../styles/globals.scss"

import Nav from "../components/Nav"
import Footer from "../components/Footer"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
