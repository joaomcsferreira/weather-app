export interface ICity {
  name: string
  lat: string
  lng: string
  country: string
}

export interface ICard {
  cities: Array<ICity>
  search: string
  geo: ICity | null
  weather: IWeather | null
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleSearch: () => void
  setSearch: React.Dispatch<React.SetStateAction<string>>
  setGeo: React.Dispatch<React.SetStateAction<ICity | null>>
}

export interface IWeather {
  weather: {
    description: string
    icon: string
    main: string
  }
  clouds: number
  temp: number
  wind: number
  name: string
}
