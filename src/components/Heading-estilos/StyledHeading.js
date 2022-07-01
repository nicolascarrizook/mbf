import styled from "styled-components"

export const Logo = styled.img`
max-width: 10%;
max-height: 10%;
object-fit: cover;
object-position: center;
border-radius: 10px;
margin-bottom: 20px;
`

export const  StyledHeading = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    h3 {
        font-size: 1rem;
        font-weight: bold;
        margin-bottom: 20px;
        font-family: 'Roboto', sans-serif;
        color: #333;
    }
    box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px;
`
