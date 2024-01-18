import React from "react"
import {
  Button,
  Container,
  Input,
  InputContainer,
  Select,
  SelectItem,
  WeatherContainer,
  WeatherIcon,
  WeatherInfo,
  WeatherInfoIcon,
  WeatherInfoType,
  WeatherInfos,
  WeatherTemp,
  WeatherTempContainer,
  WeatherTempWrapper,
  WeatherType,
  Wrapper,
} from "./style"
import { ICard, ICity } from "../types/types"

const Card = ({
  cities,
  search,
  geo,
  weather,
  handleChange,
  handleSearch,
  setSearch,
  setGeo,
}: ICard) => {
  const [active, setActive] = React.useState<boolean>(false)

  const inputRef = React.useRef<HTMLInputElement>(null)

  const handleFocus = () => {
    setTimeout(() => setActive((active) => !active), 100)
  }

  React.useEffect(() => {
    const button = inputRef.current

    button!.addEventListener("focus", handleFocus)
    button!.addEventListener("blur", handleFocus)

    return () => {
      button!.removeEventListener("focus", handleFocus)
      button!.removeEventListener("blur", handleFocus)
    }
  }, [])

  const handleClick = (city: ICity) => {
    setSearch(city.name)

    setGeo(city)
  }

  return (
    <Container>
      <Wrapper>
        <InputContainer>
          <Input
            ref={inputRef}
            value={search}
            active={!!(active && search)}
            onChange={handleChange}
            type="text"
            placeholder="Enter with a name city..."
          />
          <Button
            src="/assets/search.svg"
            disabled={!!!geo}
            onClick={handleSearch}
          />

          {active && search && (
            <Select>
              {cities.map((city, index) => (
                <SelectItem key={index} onClick={() => handleClick(city)}>
                  {city.name}
                </SelectItem>
              ))}
            </Select>
          )}
        </InputContainer>

        {weather && (
          <WeatherContainer>
            <WeatherTempContainer>
              <WeatherIcon src={`/assets/${weather.weather.icon}.svg`} />
              <WeatherTempWrapper>
                <WeatherTemp>{`${weather.temp}°`}</WeatherTemp>
                <WeatherType>{weather.weather.description}</WeatherType>
              </WeatherTempWrapper>
            </WeatherTempContainer>

            <WeatherInfos>
              <WeatherInfo>
                <WeatherInfoIcon src="/assets/cloud.svg" />
                <WeatherInfoType>{`${weather.clouds} %`}</WeatherInfoType>
              </WeatherInfo>
              <WeatherInfo>
                <WeatherInfoIcon src="/assets/wind.svg" />
                <WeatherInfoType>{`${weather.wind} km/h`}</WeatherInfoType>
              </WeatherInfo>
            </WeatherInfos>
          </WeatherContainer>
        )}
      </Wrapper>
    </Container>
  )
}

export default Card
