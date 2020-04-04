import React, { useRef } from "react"
import { Marker } from "react-leaflet"
import Map from "../../components/pages/portfolio/Map"
import mapEffect from "../../components/pages/portfolio/map/mapEffect"
import Layout from "../../components/partials/Layout"
import useGeolocation from "../../components/utils/useGeolocation"
import { Typography } from "antd"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Title = styled(Typography.Title)`
  text-align: center;
`

const Covid = () => {
  const markerRef = useRef()
  const location = useGeolocation()

  const mapSettings = {
    center: [location.lat, location.lng],
    zoom: 6,
    mapEffect // mapEffect - fires a callback once the page renders
  }

  return (
    <Layout>
      <Wrapper>
        <Title>Covid cases around the globe</Title>

        <Map {...mapSettings}>
          <Marker ref={markerRef} position={[location.lat, location.lng]} />
        </Map>
      </Wrapper>
    </Layout>
  )
}

export default Covid
