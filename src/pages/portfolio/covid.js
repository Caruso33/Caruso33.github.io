import React, { useRef } from "react"
import { Marker } from "react-leaflet"
import Map from "../../components/pages/portfolio/Map"
import Layout from "../../components/partials/Layout"
import mapEffect from "../../components/pages/portfolio/map/mapEffect"

const location = { lat: 0, lng: 0 }

const center = [location.lat, location.lng]
const zoom = 2

const mapSettings = {
  center,
  zoom,
  defaultBaseMap: "OpenStreetMap",
  mapEffect // mapEffect - fires a callback once the page renders
}

const Covid = () => {
  const markerRef = useRef()

  return (
    <Layout>
      <Map {...mapSettings}>
        <Marker ref={markerRef} position={center} />
      </Map>
    </Layout>
  )
}

export default Covid
