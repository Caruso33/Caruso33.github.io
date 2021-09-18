import { useConfigureLeaflet, useMapServices, useRefEffect } from "./map/index"
import React, { useRef } from "react"
import { Map as LeafletMap, TileLayer, ZoomControl } from "react-leaflet"
import { isDomAvailable } from "utils"
import { MapWrapper } from "./map/styled"

const Map = props => {
  const {
    children,
    className,
    defaultBaseMap = "OpenStreetMap",
    mapEffect,
    ...rest
  } = props

  const mapRef = useRef()

  useConfigureLeaflet()
  useRefEffect({ ref: mapRef, effect: mapEffect }) // passes mapRef to mapEffect

  const services = useMapServices({ names: ["OpenStreetMap"] })

  const basemap = services.find(service => service.name === defaultBaseMap)

  const mapClassName = `map ${className ? className : ""}`

  if (!isDomAvailable()) {
    return null
  }

  const mapSettings = {
    className: "map-base",
    zoomControl: false,
    ...rest
  }

  return (
    <MapWrapper className={mapClassName}>
      <LeafletMap ref={mapRef} {...mapSettings}>
        {children}

        {basemap && <TileLayer {...basemap} />}

        <ZoomControl position="bottomright" />
      </LeafletMap>
    </MapWrapper>
  )
}

export default Map
