//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '@/styles/custom.css'
import Header from "../Components/header"
import Footer from "../Components/footer"
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div className='pagecontainer'>
      <Component {...pageProps} />
      </div>
      <Footer />
    </>
  )
}
