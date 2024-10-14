import styled from 'styled-components'

export const NavbarContainer = styled.nav`
  background-color: ${props => (props.day ? '#212121' : '#f9f9f9')};
  height: 10vh;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
`
export const NavbarIconContainer = styled.div`
  display: flex;
`
export const LogoImage = styled.img`
  width: 50%;
  cursor: pointer;
  margin-top: 10px;
`
export const ThemeButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background: transparent;
`
export const SideBarButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background: transparent;
`
export const LoginOutButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background: transparent;
`

export const LogOutButton = styled.button`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    border: ${props =>
      props.buttonColor ? '1px solid #cccccc' : '1px solid #3b82f6'};
    text-align: center;
    color: ${props => (props.buttonColor ? '#cccccc' : '#3b82f6')};
    font-family: 'roboto';
    cursor: pointer;
    border-radius: 5px;
    font-weight: bold;
    padding: 5px;
    background: transparent;
    width: 5vw;
  }
`
export const PopupContainer = styled.div`
  background-color: ${props => (props.popupbg ? '#313131' : '#ffffff')};
  min-height: 15vh;
  border-radius: 5px;
  margin: 10px;
  width: 80vw;
  @media (min-width: 768px) {
    width: 25vw;
  }
`
export const LogoutPopup = styled.p`
  text-align: center;
  color: ${props => (props.color ? '#f4f4f4' : ' #00306e')};
  font-weight: bold;
  padding-top: 25px;
`
export const PopupButton = styled.div`
  display: flex;
  justify-content: center;
`
export const ShowPopupButton = styled.button`
  border: ${props =>
    props.confirm ? '1px solid #3b82f6' : '1px solid #616e7c'};
  color: ${props => (props.confirm ? '#ffffff' : '#616e7c')};
  padding: 10px;
  font-family: 'roboto';
  cursor: pointer;
  margin: 10px;
  background-color: ${props => (props.confirm ? '#3b82f6' : 'transparent')};
`
export const ShowPopupButtons = styled.button`
  border: ${props =>
    props.confirm ? '1px solid #3b82f6' : '1px solid #616e7c'};
  color: ${props => (props.confirm ? '#ffffff' : '#616e7c')};
  padding: 10px;
  font-family: 'roboto';
  cursor: pointer;
  margin: 10px;
  background-color: ${props => (props.confirm ? '#3b82f6' : 'transparent')};
`
export const SidebarContainer = styled.div`
  background-color: ${props => (props.bg ? '#181818' : '#ffffff')};
  height: 100vh;
  width: 100vw;
`
export const ClosePopupButton = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background: transparent;
  margin-right: 40px;
  margin-top: 40px;
`
export const CloseButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`
