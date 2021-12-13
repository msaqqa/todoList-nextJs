import '../styles/globals.css'
import Banner from "../components/Banner";

function MyApp({ Component, pageProps }) {
  return <div className="App">
    <Banner />
    <Component {...pageProps} />
  </div>
}

export default MyApp
