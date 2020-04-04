import axios from "axios"
import L from "leaflet"

const dataUrl = "https://corona.lmao.ninja/countries"

export default async function mapEffect({ leafletElement: map, ...rest } = {}) {
  if (!map) return
  let response

  try {
    response = await axios.get(dataUrl)
  } catch (e) {
    console.error(e)
  }

  const { data } = response
  const hasData = Array.isArray(data) && data.length

  if (!hasData) return

  const geoJson = {
    type: "FeatureCollection",
    features: data.map((country = {}) => {
      const { countryInfo = {} } = country
      const { lat, long: lng } = countryInfo

      return {
        type: "Feature",
        properties: { ...country },
        geometry: { type: "Point", coordinates: [lng, lat] }
      }
    })
  }

  const countryPointToLayer = (feature = {}, latlng) => {
    const { properties = {} } = feature
    let updatedFormatted, casesString

    const { country, updated, cases, deaths, recovered } = properties

    casesString = `${cases}`

    if (cases > 1000) {
      casesString = `${casesString.slice(0, -3)}k+`
    }

    if (updated) {
      updatedFormatted = new Date(updated).toLocaleDateString()
    }

    const markers = `
      <span class="icon-marker">
        <span class="icon-marker-tooltip">
          <h2>${country}</h2>
          <ul>
            <li>
              <strong>Confirmed:</strong> ${cases}
            </li>
            <li>
              <strong>Deaths:</strong> ${deaths}
            </li>
            <li>
              <strong>Recovered:</strong> ${recovered}
            </li>
            <li>
              <strong>Last Update:</strong> ${updatedFormatted}
            </li>
          </ul>
        </span>

        ${casesString}
      </span>
    `

    return L.marker(latlng, {
      icon: L.divIcon({ className: "icon", html: markers }),
      riseOnHover: true
    })
  }

  const geoJsonLayers = new L.GeoJSON(geoJson, {
    pointToLayer: countryPointToLayer
  })

  geoJsonLayers.addTo(map)
}
