import React from "react"
import cities from "cities.json"

import Card from "./Card"
import { ICity, IWeather } from "../types/types"
import axios from "axios"

const API_WEATHER = import.meta.env.VITE_WEATHER_URL
const API_KEY = import.meta.env.VITE_API_KEY
const API_LANG = import.meta.env.VITE_API_LANG
const API_UNITS = import.meta.env.VITE_API_UNITS

const CardContainer = () => {
  const [search, setSearch] = React.useState<string>("")
  const [result, setResult] = React.useState<Array<ICity>>([])
  const [geo, setGeo] = React.useState<ICity | null>(null)
  const [weather, setWeather] = React.useState<IWeather | null>(null)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)

    setGeo(null)

    const result = (cities as Array<ICity>).filter(
      (city) =>
        city.name.slice(0, search.length).toLocaleLowerCase() ==
        search.toLocaleLowerCase()
    )

    setResult(result.slice(0, 5))
  }

  const handleSearch = async () => {
    if (geo) {
      const response = await axios.get(
        `${API_WEATHER}lat=${geo.lat}&lon=${geo.lng}&appid=${API_KEY}&units=${API_UNITS}`
      )

      const weather: IWeather = {
        weather: {
          description: response.data.weather[0].description,
          icon: response.data.weather[0].icon,
          main: response.data.weather[0].main,
        },
        clouds: response.data.clouds.all,
        temp: Math.round(response.data.main.temp),
        wind: response.data.wind.speed,
        name: response.data.name,
      }

      console.log(weather)

      setWeather(weather)
    }
  }

  React.useEffect(() => {})

  return (
    <Card
      cities={result}
      search={search}
      geo={geo}
      weather={weather}
      handleChange={handleChange}
      setSearch={setSearch}
      setGeo={setGeo}
      handleSearch={handleSearch}
    />
  )
}

export default CardContainer
