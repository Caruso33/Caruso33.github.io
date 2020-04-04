import React, { useRef } from "react"
import { Marker } from "react-leaflet"
import Map from "../../components/pages/portfolio/Map"
import mapEffect from "../../components/pages/portfolio/map/mapEffect"
import Layout from "../../components/partials/Layout"
import useGeolocation from "../../components/utils/useGeolocation"

const Covid = () => {
  const markerRef = useRef()
  const location = useGeolocation()

  const mapSettings = {
    center: [location.lat, location.lng],
    zoom: 2,
    mapEffect // mapEffect - fires a callback once the page renders
  }

  return (
    <Layout>
      <Map {...mapSettings}>
        <Marker ref={markerRef} position={[location.lat, location.lng]} />
      </Map>
    </Layout>
  )
}

export default Covid
