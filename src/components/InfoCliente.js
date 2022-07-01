import { useEffect, useState } from "react"
import styled from "styled-components"

export const Lista = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    li {
        margin-bottom: 10px;
    }
    li:last-child {
        margin-bottom: 0;
    }
    h4 {
        font-size: .9rem;
        font-weight: bold;
        margin-bottom: 10px;
        color: #fff;
    }
`

export const ContainerInfo = styled.div`
    background: #4B296B;
    padding: 20px;
    border-radius: 5px;
    margin-bottom: 20px;
    h4 {
        font-size: .9rem;
        font-weight: bold;
        margin-bottom: 10px;
        color: #fff;
    }
    h2 {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 10px;
        color: #fff;
    }
    hr {
        border: 0;
        height: 1px;
        color: #fff;
        margin-bottom: 10px;
    }

`

export const InfoCliente = () => {

    const url = 'https://jsonplaceholder.typicode.com/comments?postId=1'
    const [cliente, setCliente] = useState([])

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCliente(data)
            })

    }, [])

    return (
        <ContainerInfo>
            <h2>Datos del cliente</h2>
            <hr />
            <Lista>
                {
                    cliente.map(item => (
                        <li key={item.id}>
                            <h4>{item.email}</h4>
                        </li>
                    ))
                }
            </Lista>
        </ContainerInfo>
    )

}