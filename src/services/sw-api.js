const baseUrl = "https://swapi.dev/api/"
const pilotUrls = [
  "https://swapi.dev/api/people/13/", 
  "https://swapi.dev/api/people/14/", 
  "https://swapi.dev/api/people/25/", 
  "https://swapi.dev/api/people/31/",
]

export async function getAllStarships() {
  const res = await fetch(`${baseUrl}starships/`)
  return res.json()
}

export async function getStarship(apiUrl) {
  const res = await fetch(apiUrl)
  return res.json()
}
