import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoList = styled.li`
  display: flex;
  flex-direction: column;
  width: 90vw;
  margin: 10px;
  @media (min-width: 768px) {
    width: 25vw;
    margin: 20px;
  }
`
export const ThumbnailImg = styled.img`
  height: 30vh;
  width: 100%;
  margin-bottom: 5px;
  @media (min-width: 768px) {
    height: 25vh;
    width: 25vw;
  }
`
export const ProfileLogo = styled.img`
  height: 50px;
  width: 60px;
  margin-top: 10px;
`
export const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-around;
`
export const Title = styled.p`
  color: ${props => (props.text ? ' #d7dfe9' : '#475569')};
  font-weight: bold;
  padding-left: 10px; ;
`
export const GameDetailsList = styled.ul`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`
export const List = styled.li`
  list-style-type: none;
  color: #7e858e;
`
export const OtherList = styled.li`
  color: #7e858e;
  list-style-type: disc;
`
export const NavLink = styled(Link)`
  text-decoration: none;
`
