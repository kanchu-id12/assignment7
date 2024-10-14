import styled from 'styled-components'

export const FlexDirection = styled.div`
  display: flex;
`
export const SideBarDisplay = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`
export const TrendContainer = styled.div`
  background-color: ${props => (props.trend ? '#0f0f0f' : '#f1f5f9')};
  padding: 10px;
  min-height: 100vh;
  width: 100vw;
`
export const TrendingContainer = styled.div`
  background-color: ${props => (props.trendbg ? '#231f20' : '#e2e8f0')};
  height: 15vh;
  font-family: 'roboto';
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
  border-right: 2px solid #7e858e;
  padding: 10px;
`
export const TrendingIcon = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background-color: ${props => (props.icon ? '#000000' : '#cbd5e1')};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`
export const TrendHeading = styled.p`
  color: ${props => (props.head ? ' #f9f9f9' : '#212121')};
  fotnt-size: 40px;
  font-weight: bold;
`
export const TrendingSuccessContainer = styled.ul`
  background-color: ${props => (props.itembg ? '#0f0f0f' : '  #f9f9f9')};
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  margin: 0px;
  padding: 0px;
`
export const TrendFailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'roboto';
`

export const TrendFailureImg = styled.img`
  height: 25vh;
  width: 30vw;
  @media (min-width: 768px) {
    height: 50vh;
  }
`
export const TrendFailureHeading = styled.h1`
  color: ${props => (props.text ? '#ffffff' : ' #212121')};
  text-align: center;
`

export const TrendFailurePara = styled.p`
  color: #616e7c;
  text-align: center;
`
export const TrendRetryButton = styled.button`
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
