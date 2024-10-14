import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideBarPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.sidebarBg ? '#181818' : '#f9f9f9')};
  justify-content: space-between;
`

export const ContactContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`
export const SideBarContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
`

export const TextItemContainer = styled.li`
  display: flex;
`
export const ItemText = styled.p`
  color: #606060;
  font-family: 'roboto';
  padding-left: 10px;
  padding-right: 150px;
`

export const Contact = styled.p`
  color: ${props => (props.text ? '#ffffff' : '#424242')};
  font-family: 'roboto';
  font-size: 20px;
  font-weight: bold;
  padding-left: 10px;
`
export const LogoContainer = styled.div`
  display: flex;
`
export const Description = styled.p`
  font-weight: bold;
  color: ${props => (props.text ? '#ffffff' : '#424242')};
  font-family: 'roboto';
  font-size: 18px;
  padding-left: 10px;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
