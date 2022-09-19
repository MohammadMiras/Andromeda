import { Header ,Footer } from 'Share'
import '../styles/globals.css'
import '../styles/styles.css'

function MyApp({ Component, pageProps }) {
  return <>
    <div className='font-iransans bg-Template-color1 relative'>
      <Header />
      <Component {...pageProps} />
      <Footer/>
    </div>

  </>
}

export default MyApp
