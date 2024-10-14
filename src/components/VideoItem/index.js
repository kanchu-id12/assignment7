import {formatDistanceToNow} from 'date-fns'
import {
  VideoList,
  ThumbnailImg,
  ProfileLogo,
  ProfileContainer,
  Title,
  GameDetailsList,
  List,
  OtherList,
  NavLink,
} from './styledComponents'
import CartContext from '../../context/CartContext'

// console.log(formatDistanceToNow(new Date()))

const VideoItem = props => (
  <CartContext.Consumer>
    {value => {
      const {isDark} = value
      const {videoDetails} = props
      const {
        id,
        thumbnailUrl,
        channel,
        title,
        viewCount,
        publisedAt,
      } = videoDetails
      const {name, profileImage} = channel
      const date = formatDistanceToNow(new Date(publisedAt))
      const splitingData = date.split(' ')

      return (
        <NavLink to={`/videos/${id}`}>
          <VideoList>
            <ThumbnailImg src={thumbnailUrl} alt="video thumbnail" />
            <ProfileContainer>
              <ProfileLogo src={profileImage} alt="channel logo" />
              <Title text={isDark}>{title}</Title>
            </ProfileContainer>
            <GameDetailsList>
              <List>{name}</List>
              <OtherList>{`${viewCount} views`}</OtherList>
              <OtherList> {`${splitingData[1]} years ago`} </OtherList>
            </GameDetailsList>
          </VideoList>
        </NavLink>
      )
    }}
  </CartContext.Consumer>
)
export default VideoItem
