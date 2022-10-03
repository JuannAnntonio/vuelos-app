export async function getAirports() {
  const response = await fetch("dataMock/airports.json")
  const data = response.json()

  return data
}