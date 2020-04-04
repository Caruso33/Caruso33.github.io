import worldGeoJSON from "geojson-world-map"
import React, { useRef } from "react"
import { GeoJSON, Marker, Popup } from "react-leaflet"
import Map from "../../components/pages/portfolio/Map"
import Layout from "../../components/partials/Layout"
import useGeolocation from "../../components/utils/useGeolocation"
import color from "../../utils/color"

const WorldMap = () => {
  const markerRef = useRef()
  const location = useGeolocation()

  const mapSettings = {
    center: [location.lat, location.lng],
    zoom: 2
  }

  return (
    <Layout>
      <Map {...mapSettings}>
        <Marker ref={markerRef} position={[location.at, location.lng]}>
          <Popup>Popup for any custom information.</Popup>
        </Marker>

        <GeoJSON
          data={worldGeoJSON}
          style={{
            color: color["primary-color"],
            weight: 1,
            fillColor: color["primary-color"],
            fillOpacity: 0.1
          }}
        />
      </Map>
    </Layout>
  )
}

export default WorldMap
