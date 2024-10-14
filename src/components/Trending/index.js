import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  TrendingContainer,
  TrendingIcon,
  TrendHeading,
  TrendingSuccessContainer,
  TrendContainer,
  FlexDirection,
  SideBarDisplay,
  TrendFailureContainer,
  TrendFailureImg,
  TrendFailureHeading,
  TrendRetryButton,
  TrendFailurePara,
  LoaderContainer,
} from './styledComponents'
import CartContext from '../../context/CartContext'
import TrendingVideoItems from '../TrendingVideoItems'

const statusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  in_progress: 'IN_PROGRESS',
}
class Trending extends Component {
  state = {
    trendingList: [],
    status: statusConstants.initial,
  }

  componentDidMount() {
    this.getAllTrendingApis()
  }

  getAllTrendingApis = async () => {
    this.setState({status: statusConstants.in_progress})
    const url = 'https://apis.ccbp.in/videos/trending'
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
      const trendingVideo = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        publisedAt: eachVideo.published_at,
        thumbnailUrl: eachVideo.thumbnail_url,
        title: eachVideo.title,
        viewCount: eachVideo.view_count,
        channel: {
          name: eachVideo.channel.name,
          profileImage: eachVideo.channel.profile_image_url,
        },
      }))
      this.setState({
        trendingList: trendingVideo,
        status: statusConstants.success,
      })
    } else {
      this.setState({status: statusConstants.failure})
    }
  }

  renderTrendingSuccessView = isDark => {
    const {trendingList} = this.state
    console.log(trendingList)
    return (
      <TrendingSuccessContainer itembg={isDark}>
        {trendingList.map(eachTrendVideo => (
          <TrendingVideoItems
            key={eachTrendVideo.id}
            trendingVideoDetails={eachTrendVideo}
          />
        ))}
      </TrendingSuccessContainer>
    )
  }

  renderTrendingFailurView = isDark => (
      <TrendFailureContainer>
        {isDark ? (
          <TrendFailureImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
            alt="failure"
          />
        ) : (
          <TrendFailureImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
            alt="failure"
          />
        )}

        <TrendFailureHeading text={isDark}>
          Oops! Something Went Wrong
        </TrendFailureHeading>
        <TrendFailurePara>
          We are having some trouble to complete your request. Please try again.
        </TrendFailurePara>
        <TrendRetryButton>Retry</TrendRetryButton>
      </TrendFailureContainer>
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
        return this.renderTrendingSuccessView(changeTheme)
      case statusConstants.failure:
        return this.renderTrendingFailurView(changeTheme)
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
                <TrendContainer trend={isDark}>
                  <TrendingContainer trendbg={isDark}>
                    <TrendingIcon icon={isDark}>
                      <HiFire color="#ff0000" size={25} />
                    </TrendingIcon>
                    <TrendHeading head={isDark}>Trending</TrendHeading>
                  </TrendingContainer>
                  {this.renderTrendingPage(isDark)}
                </TrendContainer>
              </FlexDirection>
            </>
          )
        }}
      </CartContext.Consumer>
    )
  }
}
export default Trending
