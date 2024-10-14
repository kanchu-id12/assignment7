import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: ${props => (props.bg ? ' #212121' : ' #f1f1f1')};
  height: 100vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto';
`
export const LoginPageContainer = styled.div`
  background-color: ${props => (props.bgpage ? ' #0f0f0f' : '#f9f9f9')};
  height: 50vh;
  width: 80vw;
  border-radius: 5px;
  @media (min-width: 768px) {
    width: 36vw;
    height: 60vh;
  }
`
export const LoginLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`
export const Logo = styled.img`
  width: 70%;
  margin: 25px;
  @media (min-width: 768px) {
    width: 20%;
  }
`
export const LabelTxt = styled.label`
  color: ${props => (props.text ? '#f8fafc' : '#616e7c')};
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
`
export const UserInput = styled.input`
  background-color: ${props => (props.input ? '#313131' : null)};
  width: 90%;
  height: 6vh;
  padding-left: 20px;
  border: 1px solid #cccccc;
  outline: none;
  font-size: 19px;
  margin-top: 10px;
  color: ${props => (props.input ? '#ffffff' : '#616e7c')};
  margin-bottom: 20px;
  @media (min-width: 768px) {
    width: 80%;
    font-size: 15px;
  }
`
export const PasswordInput = styled.input`
  background-color: ${props => (props.inputPassword ? '#313131' : null)};
  width: 90%;
  height: 6vh;
  padding-left: 20px;
  border: 1px solid #cccccc;
  outline: none;
  font-size: 19px;
  margin-top: 10px;
  color: ${props => (props.inputPassword ? '#ffffff' : '#616e7c')};
  margin-bottom: 20px;
  @media (min-width: 768px) {
    width: 80%;
    font-size: 15px;
  }
`
export const Form = styled.form`
  padding-left: 10px;
  @media (min-width: 768px) {
    padding-left: 35px;
  }
`
export const CheckBoxLabel = styled.label`
  color: ${props => (props.text ? '#ffffff' : '#616e7c')};
  font-weight: 500;
  font-size: 20px;
`
export const CheckBoxInput = styled.input`
  height: 20px;
  width: 20px;
  margin-right: 5px;
  margin-top: 10px;
  @media (min-width: 768px) {
    margin-top: 20px;
  }
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  padding: 10px;
  border-radius: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  width: 90%;
  color: #ebebeb;
  margin-top: 20px;
  font-size: 20px;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-weight: bold;
  font-size: 15px;
`
