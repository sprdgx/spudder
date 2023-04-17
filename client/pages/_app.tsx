import '../styles/globals.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import { UberProvider } from '../context/uberContext'

function MyApp({ Component, pageProps } : any ) {
  return (
    <UberProvider>
      <Component {...pageProps} />
    </UberProvider>
  )
}

export default MyApp