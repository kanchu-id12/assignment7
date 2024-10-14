import {Component} from 'react'
import {MdHome} from 'react-icons/md'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import {
  SideBarContainer,
  TextItemContainer,
  ItemText,
  SideBarPageContainer,
  Contact,
  LogoContainer,
  Description,
  ContactContainer,
  NavLink,
} from './styledComponents'
import CartContext from '../../context/CartContext'
import './index.css'

class SideBar extends Component {
  render() {
    return (
      <CartContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <SideBarPageContainer sidebarBg={isDark}>
              <SideBarContainer>
                <NavLink to="/">
                  <TextItemContainer>
                    <MdHome
                      size={25}
                      color="#606060"
                      className="icon-space"
                    />
                    <ItemText>Home</ItemText>
                  </TextItemContainer>
                </NavLink>
                <NavLink to="/trending">
                  <TextItemContainer>
                    <HiFire
                      size={25}
                      color="#606060"
                      className="icon-space"
                    />
                    <ItemText>Trending</ItemText>
                  </TextItemContainer>
                </NavLink>
                <NavLink to="/gaming">
                  <TextItemContainer>
                    <SiYoutubegaming
                      size={25}
                      color="#606060"
                      className="icon-space"
                    />
                    <ItemText>Gaming</ItemText>
                  </TextItemContainer>
                </NavLink>
                <TextItemContainer>
                  <BiListPlus
                    size={25}
                    color="#606060"
                    className="icon-space"
                  />
                  <ItemText>Saving videos</ItemText>
                </TextItemContainer>
              </SideBarContainer>
              <ContactContainer>
                <Contact text={isDark}>CONTACT US</Contact>
                <LogoContainer>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png "
                    alt="facebook logo"
                  />
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png "
                    alt="linked in logo"
                  />
                </LogoContainer>
                <Description text={isDark}>
                  Enjoy! Now to see your <br />
                  channels and recommendations!
                </Description>
              </ContactContainer>
            </SideBarPageContainer>
          )
        }}
      </CartContext.Consumer>
    )
  }
}
export default SideBar
