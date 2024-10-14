import {IoCloseOutline} from 'react-icons/io5'
import {
  BannerContainer,
  NxtWatchLogo,
  BannerFlexContainer,
  BannerDescription,
  CloseButton,
  GetItButton,
} from './styledComponents'

const Banner = props => {
  const {bannerShow, banner} = props
  const onClickClosebutton = () => {
    banner()
  }
  return (
    <>
      {bannerShow ? (
        <BannerContainer data-testid="banner">
          <BannerFlexContainer>
            <div>
              <NxtWatchLogo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                alt="nxt watch logo"
              />
            </div>
            <CloseButton data-testid="close" onClick={onClickClosebutton}>
              <IoCloseOutline size={25} />
            </CloseButton>
          </BannerFlexContainer>
          <BannerDescription>
            Buy Nxt Watch Premium <br />
            propaid plans with UPI
          </BannerDescription>
          <GetItButton>GET IT NOW</GetItButton>
        </BannerContainer>
      ) : null}
    </>
  )
}
export default Banner
