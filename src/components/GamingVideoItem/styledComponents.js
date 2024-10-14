import styled from 'styled-components'

export const GameList = styled.li`
  margin: 10px;
  font-family: 'roboto';
  width: 35%;
  @media (min-width: 768px) {
    width: 25%;
    margin: 10px;
  }
`
export const GameImg = styled.img`
  width: 35vw;
  height: 25vh;
  @media (min-width: 768px) {
    height: 40vh;
    width: 20vw;
  }
`
export const GameTitle = styled.h1`
  color: ${props => (props.color ? '#f9f9f9' : '#1e293b')};
  font-weight: bold;
  font-size: 18px;
  text-align: center;
`
export const GameWatching = styled.p`
  color: #475569;
  font-size: 17px;
  text-align: center;
  font-weight: 500;
`
