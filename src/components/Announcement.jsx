import styled from 'styled-components'

const Container = styled.div`
    position: sticky;
    height: 30px;
    background-color: #db1d04;
    color:white;
    font-weight: 500;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Orders over $500
    </Container>
  )
}

export default Announcement