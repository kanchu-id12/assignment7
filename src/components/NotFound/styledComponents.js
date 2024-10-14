import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-family: 'roboto';
`

export const NotFoundFlexDirection = styled.div`
  display: flex;
  justify-content: space-between;
`
export const NotFoundImg = styled.img`
  height: 50vh;
  margin-top: 20px;
  width: 90vw;
  @media (min-width: 768px) {
    width: 60vw;
    height: 70vh;
  }
`
export const NotFoundHeading = styled.h1`
  color: #212121;
  text-align: center;
`
export const NotFoundDescrip = styled.p`
  color: #909090;
  text-align: center;
`
