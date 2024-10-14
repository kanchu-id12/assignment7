import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`
export const HomebgContainer = styled.div`
  background-color: ${props => (props.bg ? '#000000' : '#f9f9f9')};
  padding: 20px;
  min-height: 100vh;
`
export const VideoListContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
  @media (min-width: 768px) {
    margin-left: 150px;
  }
`
export const SideBarDiv = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'roboto';
`

export const FailureImg = styled.img`
  height: 25vh;
  width: 30vw;
  @media (min-width: 768px) {
    height: 50vh;
  }
`
export const FailureHeading = styled.h1`
  color: ${props => (props.text ? '#ffffff' : ' #212121')};
  text-align: center;
`

export const FailurePara = styled.p`
  color: #616e7c;
  text-align: center;
`
export const RetryButton = styled.button`
  color: #ffffff;
  padding: 10px;
  padding-left: 25px;
  padding-right: 25px;
  border-radius: 5px;
  background-color: #4f46e5;
  border: none;
  outline: none;
  cursor: pointer;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
