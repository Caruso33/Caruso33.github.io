import { useEffect, useState } from "react"

export default function useGeolocation() {
  const [location, setLocation] = useState({ lat: 0, lng: 0 })

  useEffect(() => {
    function onGeolocation(position) {
      if (typeof position !== "object") return

      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      })
    }

    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(onGeolocation)
      } else {
        onGeolocation("Geolocation is not supported by this browser.")
      }
    }

    getLocation()
  }, [location])

  return location
}
