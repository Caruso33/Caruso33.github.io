const mapServices = [
  {
    name: "OpenStreetMap",
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  }
]

export default function useMapServices({
  names = [],
  services: userServices = []
} = {}) {
  const allServices = [...mapServices, ...userServices]

  return names.map(name => {
    const foundService = allServices.find(service => service.name === name)
    if (!foundService) throw Error("Map service not found")

    return foundService
  })
}
