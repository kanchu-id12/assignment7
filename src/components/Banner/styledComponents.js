import styled from 'styled-components'

export const BannerContainer = styled.div`
  background-image: url(https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png);
  background-size: cover;
  height: 30vh;
  padding: 20px;
  font-family: 'roboto';
  @media (min-width: 768px) {
    height: 50vh;
    margin-left: 150px;
  }
`
export const NxtWatchLogo = styled.img`
  width: 50%;
`
export const BannerFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const BannerDescription = styled.p`
  color: #212121;
  font-size: 23px;
  font-weight: solid;
`
export const GetItButton = styled.button`
  border: 1px solid #231f20;
  padding: 10px;
  color: #212121;
`
export const CloseButton = styled.button`
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  margin-right: 25px;
`
