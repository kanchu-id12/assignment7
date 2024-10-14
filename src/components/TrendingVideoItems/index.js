import {formatDistanceToNow} from 'date-fns'
import {
  TrendingVideoList,
  ThumbnailImg,
  ProfileLogo,
  ProfileContainer,
  Title,
  GameDetailsList,
  List,
  OtherList,
} from './styledComponents'
import CartContext from '../../context/CartContext'
// console.log(formatDistanceToNow(new Date()))

const VideoItem = props => (
  <CartContext.Consumer>
    {value => {
      const {isDark} = value
      const {trendingVideoDetails} = props
      const {
        thumbnailUrl,
        channel,
        title,
        viewCount,
        publisedAt,
      } = trendingVideoDetails
      const {name, profileImage} = channel
      const date = formatDistanceToNow(new Date(publisedAt))
      const splitingData = date.split(' ')

      return (
        <TrendingVideoList>
          <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
          <div>
            <ProfileContainer>
              <ProfileLogo src={profileImage} alt="channel logo" />
              <Title text={isDark}>{title}</Title>
            </ProfileContainer>
            <GameDetailsList>
              <List>{name}</List>
              <OtherList>{`${viewCount} views`}</OtherList>
              <OtherList> {`${splitingData[1]} years ago`} </OtherList>
            </GameDetailsList>
          </div>
        </TrendingVideoList>
      )
    }}
  </CartContext.Consumer>
)
export default VideoItem
