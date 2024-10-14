import {GameList, GameImg, GameTitle, GameWatching} from './styledComponents'
import CartContext from '../../context/CartContext'

const GamingVideoItem = props => (
  <CartContext.Consumer>
    {value => {
      const {isDark} = value
      const {gamingVideoDetails} = props
      const {id, thumbnailUrl, viewCount, title} = gamingVideoDetails
      return (
        <GameList>
          <GameImg src={thumbnailUrl} alt="game" />
          <GameTitle color={isDark}>{title}</GameTitle>
          <GameWatching>{`${viewCount} Watching Worldwide`}</GameWatching>
        </GameList>
      )
    }}
  </CartContext.Consumer>
)
export default GamingVideoItem
