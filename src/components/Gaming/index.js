import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  GamingContainer,
  GameIcon,
  GameHeading,
  GamingSuccessContainer,
  GameContainer,
  FlexDirection,
  SideBarDisplay,
  GamingFailureContainer,
  GamingFailureImg,
  GamingFailureHeading,
  GamingRetryButton,
  GamingFailurePara,
  LoaderContainer,
} from './styledComponents'
import CartContext from '../../context/CartContext'
import GamingVideoItem from '../GamingVideoItem'

const statusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  in_progress: 'IN_PROGRESS',
}
class Gaming extends Component {
  state = {
    gamingList: [],
    status: statusConstants.initial,
  }

  componentDidMount() {
    this.getAllGamingApis()
  }

  getAllGamingApis = async () => {
    this.setState({status: statusConstants.in_progress})
    const url = 'https://apis.ccbp.in/videos/gaming'
    const token = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const res = await fetch(url, options)
    if (res.ok) {
      const data = await res.json()
      // console.log(data)
      const updateGames = data.videos.map(eachGame => ({
        id: eachGame.id,
        thumbnailUrl: eachGame.thumbnail_url,
        title: eachGame.title,
        viewCount: eachGame.view_count,
      }))
      this.setState({
        gamingList: updateGames,
        status: statusConstants.success,
      })
    } else {
      this.setState({status: statusConstants.failure})
    }
  }

  renderGamingSuccessView = isDark => {
    const {gamingList} = this.state
    return (
      <GamingSuccessContainer itembg={isDark}>
        {gamingList.map(eachGamingItem => (
          <GamingVideoItem
            key={eachGamingItem.id}
            gamingVideoDetails={eachGamingItem}
          />
        ))}
      </GamingSuccessContainer>
    )
  }

  renderGamingFailurView = isDark => (
      <GamingFailureContainer>
        {isDark ? (
          <GamingFailureImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
            alt="failure"
          />
        ) : (
          <GamingFailureImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
            alt="failure"
          />
        )}

        <GamingFailureHeading text={isDark}>
          Oops! Something Went Wrong
        </GamingFailureHeading>
        <GamingFailurePara>
          We are having some trouble to complete your request. Please try again.
        </GamingFailurePara>
        <GamingRetryButton>Retry</GamingRetryButton>
      </GamingFailureContainer>
    )

  renderLoader = isDark => (
    <LoaderContainer data-testid="loader">
      {isDark ? (
        <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
      ) : (
        <Loader type="ThreeDots" color="#000000" height="50" width="50" />
      )}
    </LoaderContainer>
  )

  renderTrendingPage = changeTheme => {
    const {status} = this.state
    switch (status) {
      case statusConstants.success:
        return this.renderGamingSuccessView(changeTheme)
      case statusConstants.failure:
        return this.renderGamingFailurView(changeTheme)
      case statusConstants.in_progress:
        return this.renderLoader(changeTheme)
      default:
        return null
    }
  }

  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <>
              <Header />
              <FlexDirection>
                <SideBarDisplay>
                  <SideBar />
                </SideBarDisplay>
                <GameContainer trend={isDark}>
                  <GamingContainer trendbg={isDark}>
                    <GameIcon icon={isDark}>
                      <SiYoutubegaming color="#ff0000" size={25} />
                    </GameIcon>
                    <GameHeading head={isDark}>Gaming</GameHeading>
                  </GamingContainer>
                  {this.renderTrendingPage(isDark)}
                </GameContainer>
              </FlexDirection>
            </>
          )
        }}
      </CartContext.Consumer>
    )
  }
}
export default Gaming
