import styled from 'styled-components'

export const SearchInputContainer = styled.div`
  border: 1px solid #909090;
  margin: 15px;
  width: 90vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  font-family: 'roboto';
  @media (min-width: 768px) {
    margin-left: 170px;
    width: 40vw;
  }
`
export const SearchInput = styled.input`
  border: none;
  outline: none;
  height: 5vh;
  padding-left: 20px;
  width: 90%;
  font-size: 15px;
  color: #606060;
  background-color: ${props => (props.bg ? '#181818' : '#f9f9f9')};
  @media (min-width: 768px) {
    width: 90%;
  }
`

export const SearchButton = styled.button`
  cursor: pointer;
  border-left: 1px solid #909090;
  height: 5vh;
  border-right: none;
  border-top: none;
  border-bottom: none;
  width: 5vh;
  background-color: ${props => (props.bg ? '#313131' : '#f9f9f9')};
`
