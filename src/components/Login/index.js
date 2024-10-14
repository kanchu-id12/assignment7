import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import CartContext from '../../context/CartContext'
import {
  LoginContainer,
  LoginPageContainer,
  LoginLogoContainer,
  Logo,
  LabelTxt,
  UserInput,
  Form,
  CheckBoxLabel,
  LoginButton,
  PasswordInput,
  CheckBoxInput,
  ErrorMsg,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    showErrorMessage: false,
    isChecked: false,
    isDark: false,
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSucessfullLogin = token => {
    const {history} = this.props
    Cookies.set('jwt_token', token, {expires: 50, path: '/'})

    history.replace('/')
  }

  onFailureLogin = errorMsg => {
    this.setState({showErrorMessage: true, errorMsg})
  }

  onShowHidePassword = () => {
    this.setState(prev => ({isChecked: !prev.isChecked}))
  }

  addSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data.jwt_token)
    if (response.ok === true) {
      this.onSucessfullLogin(data.jwt_token)
    } else {
      this.onFailureLogin(data.error_msg)
    }
  }

  render() {
    const {
      username,
      password,
      showErrorMessage,
      errorMsg,
      isChecked,
    } = this.state
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <CartContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <LoginContainer bg={isDark}>
              <LoginPageContainer bgpage={isDark}>
                <LoginLogoContainer>
                  <Logo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="channel logo"
                  />
                </LoginLogoContainer>
                <Form onSubmit={this.addSubmitForm}>
                  <LabelTxt htmlFor="userName" text={isDark}>
                    USERNAME
                  </LabelTxt>
                  <br />
                  <UserInput
                    type="text"
                    id="userName"
                    placeholder="Username"
                    input={isDark}
                    value={username}
                    onChange={this.onChangeUserName}
                  />
                  <br />
                  <LabelTxt htmlFor="password" text={isDark}>
                    PASSWORD
                  </LabelTxt>
                  <br />
                  <PasswordInput
                    type={isChecked ? 'text' : 'password'}
                    id="password"
                    placeholder="Password"
                    inputPassword={isDark}
                    value={password}
                    onChange={this.onChangePassword}
                  />
                  <br />
                  <CheckBoxInput
                    type="checkbox"
                    id="checked"
                    checked={isChecked}
                    onChange={this.onShowHidePassword}
                  />
                  <CheckBoxLabel htmlFor="checked" text={isDark}>
                    Show Password
                  </CheckBoxLabel>
                  <div>
                    <LoginButton type="submit">Login</LoginButton>
                    {showErrorMessage ? (
                      <ErrorMsg>{`*${errorMsg}`}</ErrorMsg>
                    ) : null}
                  </div>
                </Form>
              </LoginPageContainer>
            </LoginContainer>
          )
        }}
      </CartContext.Consumer>
    )
  }
}
export default Login
