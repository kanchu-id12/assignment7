import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {
  HomeContainer,
  HomebgContainer,
  VideoListContainer,
  SideBarDiv,
  FailureContainer,
  FailureImg,
  FailureHeading,
  FailurePara,
  RetryButton,
  LoaderContainer,
} from './styledComponents'
import SideBar from '../SideBar'
import Header from '../Header'
import Banner from '../Banner'
import Search from '../Search'
import VideoItem from '../VideoItem'
import CartContext from '../../context/CartContext'

const statusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  in_progress: 'IN_PROGRESS',
}
class Home extends Component {
  state = {
    videoList: [],
    isBannerShow: true,
    status: statusConstants.initial,
  }

  componentDidMount() {
    this.getHomeVideosApis()
  }

  getHomeVideosApis = async () => {
    this.setState({status: statusConstants.in_progress})
    const url = 'https://apis.ccbp.in/videos/all?search='
    const token = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      // console.log(data)
      const updateVideo = data.videos.map(eachVideo => ({
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
      this.setState({videoList: updateVideo, status: statusConstants.success})
    } else {
      this.setState({status: statusConstants.failure})
    }
  }

  renderLoader = isDark => (
    <LoaderContainer data-testid="loader">
      {isDark ? (
        <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
      ) : (
        <Loader type="ThreeDots" color="#000000" height="50" width="50" />
      )}
    </LoaderContainer>
  )

  renderHomeSuccessView = () => {
    const {videoList} = this.state
    return (
      <VideoListContainer>
        {videoList.map(eachItem => (
          <VideoItem key={eachItem.id} videoDetails={eachItem} />
        ))}
      </VideoListContainer>
    )
  }

  renderHomeFailureView = isDark => (
      <FailureContainer>
        {isDark ? (
          <FailureImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png"
            alt="failure"
          />
        ) : (
          <FailureImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
            alt="failure"
          />
        )}

        <FailureHeading text={isDark}>
          Oops! Something Went Wrong
        </FailureHeading>
        <FailurePara>
          We are having some trouble to complete your request. Please try again.
        </FailurePara>
        <RetryButton>Retry</RetryButton>
      </FailureContainer>
    )

  renderHomePage = changeTheme => {
    const {status} = this.state
    switch (status) {
      case statusConstants.success:
        return this.renderHomeSuccessView()
      case statusConstants.failure:
        return this.renderHomeFailureView(changeTheme)
      case statusConstants.in_progress:
        return this.renderLoader(changeTheme)
      default:
        return null
    }
  }

  renderSearch = () => (
    <CartContext.Consumer>
      {value => {
        const {isDark} = value

        return (
          <HomebgContainer bg={isDark}>
            <Search background={isDark} />
            {this.renderHomePage(isDark)}
          </HomebgContainer>
        )
      }}
    </CartContext.Consumer>
  )

  clickChangeBanner = () => {
    this.setState(prev => ({isBannerShow: !prev.isBannerShow}))
  }

  render() {
    const {isBannerShow} = this.state
    return (
      <>
        <Header />
        <HomeContainer data-testid="home">
          <SideBarDiv>
            <SideBar />
          </SideBarDiv>
          <div>
            <Banner bannerShow={isBannerShow} banner={this.clickChangeBanner} />

            {this.renderSearch()}
          </div>
        </HomeContainer>
      </>
    )
  }
}
export default Home
