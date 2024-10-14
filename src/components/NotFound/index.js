import {
  NotFoundContainer,
  NotFoundImg,
  NotFoundHeading,
  NotFoundDescrip,
  NotFoundFlexDirection,
} from './styledComponents'
import Header from '../Header'
import SideBar from '../SideBar'

const NotFound = () => (
  <>
    <Header />
    <NotFoundFlexDirection>
      <SideBar />
    </NotFoundFlexDirection>
    <NotFoundContainer>
      <NotFoundImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
        alt="not found"
      />
      <NotFoundHeading>Page Not Found</NotFoundHeading>
      <NotFoundDescrip>
        We are sorry, the page you requested could not be found.
      </NotFoundDescrip>
    </NotFoundContainer>
  </>
)
export default NotFound
