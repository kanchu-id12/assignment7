import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import ProtechedRoute from './components/ProtechedRoute'
import CartContext from './context/CartContext'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import './App.css'

class App extends Component {
  state = {
    isDark: false,
    activeTab: 'HOME',
  }

  changeDarkMode = () => {
    this.setState(prev => ({isDark: !prev.isDark}))
  }

  render() {
    const {isDark} = this.state

    return (
      <CartContext.Provider
        value={{
          isDark,
          changeDarkMode: this.changeDarkMode,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtechedRoute exact path="/" component={Home} />
          <ProtechedRoute exact path="/trending" component={Trending} />
          <ProtechedRoute exact path="/gaming" component={Gaming} />
          <ProtechedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </CartContext.Provider>
    )
  }
}

export default App
