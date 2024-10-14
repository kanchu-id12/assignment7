import {
  NavbarContainer,
  LogoImage,
  ThemeButton,
  SideBarButton,
  LoginOutButton,
  LogOutButton,
  NavbarIconContainer,
  PopupContainer,
  LogoutPopup,
  PopupButton,
  ShowPopupButtons,
  ShowPopupButton,
  ClosePopupButton,
  SidebarContainer,
  CloseButtonContainer,
} from './styledComponents'
import {IoCloseOutline} from 'react-icons/io5'
import Popup from 'reactjs-popup'
import {Link, withRouter} from 'react-router-dom'
import './index.css'
import {BsMoon} from 'react-icons/bs'
import {FiSun,FiLogOut} from 'react-icons/fi'
import {VscThreeBars} from 'react-icons/vsc'

import Cookies from 'js-cookie'
import CartContext from '../../context/CartContext'
import SideBar from '../SideBar'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <CartContext.Consumer>
      {value => {
        const {changeDarkMode, isDark} = value
        const onClickMode = () => {
          changeDarkMode()
        }
        return (
          <NavbarContainer day={isDark}>
            <Link to="/">
              <div>
                {isDark ? (
                  <LogoImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                    alt="website logo"
                  />
                ) : (
                  <LogoImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="website logo"
                  />
                )}
              </div>
            </Link>
            <NavbarIconContainer>
              <ThemeButton data-testid="theme" onClick={onClickMode}>
                {isDark ? (
                  <FiSun size={25} color="#ffffff" />
                ) : (
                  <BsMoon size={25} />
                )}
              </ThemeButton>
              <Popup
                modal
                trigger={
                  <SideBarButton>
                    {isDark ? (
                      <VscThreeBars
                        size={25}
                        className="three-bar"
                        color="#ffffff"
                      />
                    ) : (
                      <VscThreeBars size={25} className="three-bar" />
                    )}
                  </SideBarButton>
                }
                className="popup-container"
              >
                {close => (
                  <>
                    <SidebarContainer bg={isDark}>
                      <CloseButtonContainer>
                        <ClosePopupButton type="button" onClick={() => close()}>
                          {isDark ? (
                            <IoCloseOutline size={25} color="#ffffff" />
                          ) : (
                            <IoCloseOutline size={25} />
                          )}
                        </ClosePopupButton>
                      </CloseButtonContainer>
                      <SideBar />
                    </SidebarContainer>
                  </>
                )}
              </Popup>

              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
                className="profile"
              />

              <Popup
                modal
                trigger={
                  <LoginOutButton>
                    {isDark ? (
                      <FiLogOut
                        color="#ffffff"
                        size={24}
                        className="logout"
                      />
                    ) : (
                      <FiLogOut size={24} className="logout" />
                    )}
                  </LoginOutButton>
                }
                className="popup-container"
              >
                {close => (
                  <>
                    <PopupContainer popupbg={isDark}>
                      <LogoutPopup color={isDark}>
                        Are you sure you want to logout ?
                      </LogoutPopup>
                      <PopupButton>
                        <ShowPopupButton type="button" onClick={() => close()}>
                          Cancel
                        </ShowPopupButton>
                        <ShowPopupButtons
                          type="button"
                          confirm
                          onClick={onClickLogout}
                        >
                          Confirm
                        </ShowPopupButtons>
                      </PopupButton>
                    </PopupContainer>
                  </>
                )}
              </Popup>
              <Popup
                modal
                trigger={
                  <LogOutButton buttonColor={isDark}>Logout</LogOutButton>
                }
                className="popup-container"
              >
                {close => (
                  <>
                    <PopupContainer>
                      <LogoutPopup>
                        Are you sure you want to logout?
                      </LogoutPopup>
                      <PopupButton>
                        <ShowPopupButton type="button" onClick={() => close()}>
                          Cancel
                        </ShowPopupButton>
                        <ShowPopupButton
                          type="button"
                          confirm
                          onClick={onClickLogout}
                        >
                          Confirm
                        </ShowPopupButton>
                      </PopupButton>
                    </PopupContainer>
                  </>
                )}
              </Popup>
            </NavbarIconContainer>
          </NavbarContainer>
        )
      }}
    </CartContext.Consumer>
  )
}
export default withRouter(Header)
