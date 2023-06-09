import { UberContext } from '../context/uberContext'
import mapboxgl from 'mapbox-gl'
import { useContext, useEffect } from 'react'


mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN! 

export default function Map () {
    const { pickupCoordinates, dropoffCoordinates } = useContext(UberContext)

    useEffect(() => {
      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
        center: [3, 35],
        zoom: 6.5,
      })
  
      if (pickupCoordinates) {
        addToMap(map, pickupCoordinates)
      }
  
      if (dropoffCoordinates) {
        addToMap(map, dropoffCoordinates)
      }
  
      if (pickupCoordinates && dropoffCoordinates) {
        map.fitBounds([dropoffCoordinates, pickupCoordinates], {
          padding: 100,
        })
      }
    }, [pickupCoordinates, dropoffCoordinates])
  
    const addToMap = (map: mapboxgl.Map, coordinates: mapboxgl.LngLatLike) => {
      const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map)
    }
    return(
        <div className='-my-[0rem] lg:-my-[0rem] h-screen w-screen' id='map' ></div>
    )
}