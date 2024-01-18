import styled from "styled-components"

interface IInput {
  active: boolean
}

interface IButton {
  disabled: boolean
}

export const Container = styled.div`
  height: 100vh;
  background-color: var(--color-g-denim);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled.div`
  background-color: var(--color-g-navy);
  width: 30vw;
  max-height: 70vh;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`

export const InputContainer = styled.div`
  display: flex;
  gap: 1rem;
  position: relative;
`

export const Input = styled.input<IInput>`
  height: 3rem;
  width: 20vw;
  border: none;
  border-radius: ${({ active }) => (active ? "1rem 1rem 0 0" : "1rem")};
  padding: 1rem;
  font-weight: bold;
  font-size: 1.1rem;
  color: var(--color-g-slateBlue);

  &:focus {
    outline: none;
  }
`

export const Select = styled.div`
  position: absolute;
  background-color: var(--color-g-white);
  min-height: 2rem;
  border-radius: 0 0 1rem 1rem;
  width: 20vw;
  top: 3rem;
  left: 0;
  overflow: hidden;
`

export const SelectItem = styled.p`
  color: var(--color-g-slateBlue);
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: var(--color-g-navy);
  }
`

export const Button = styled.img<IButton>`
  background-color: var(--color-g-white);
  filter: ${({ disabled }) => disabled && "grayscale(100)"};
  width: 3rem;
  height: 3rem;
  border-radius: 1rem;
  padding: 0 0.5rem;
  cursor: ${({ disabled }) => !disabled && "pointer"};

  &:hover {
    background-color: ${({ disabled }) =>
      !disabled && "var(--color-g-hover-denim)"};
  }
`

export const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
`

export const WeatherTempContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  align-items: center;
`

export const WeatherTempWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const WeatherIcon = styled.img`
  width: 10rem;
`

export const WeatherTemp = styled.h1`
  white-space: nowrap;
  font-size: 5rem;
  line-height: 5rem;
  background: linear-gradient(
    180deg,
    var(--color-g-slateBlue) 40%,
    var(--color-g-steel)
  );
  background-clip: text;

  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
`

export const WeatherType = styled.p`
  color: var(--color-g-steel);
  font-size: 2rem;
  font-weight: 600;
  text-transform: capitalize;
`

export const WeatherInfos = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 1rem;
  width: 100%;
`

export const WeatherInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
`

export const WeatherInfoIcon = styled.img`
  height: 1.25rem;
`

export const WeatherInfoType = styled.p`
  font-weight: 600;
  color: var(--color-g-steel);
`
