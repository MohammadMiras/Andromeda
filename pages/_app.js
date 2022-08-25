import { Header } from 'Share'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
    <div className='font-iransans bg-Template-color1'>
      <Header />
      <Component {...pageProps} />
    </div>

  </>
}

export default MyApp
