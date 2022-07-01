import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
    margin-bottom: 20px;
    h1 {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 10px;
    }
    h2 {
        font-size: 1.2rem;
        font-weight: bold;
        margin-bottom: 10px;
    }
    h3 {
        font-size: 1.1rem;
        font-weight: bold;
        margin-bottom: 10px;
    }
    h4 {
        font-size: 1rem;
        font-weight: bold;
        margin-bottom: 10px;
    }
    h5 {
        font-size: 0.9rem;
        font-weight: bold;
        margin-bottom: 10px;
    }
    h6 {
        font-size: 0.8rem;
        font-weight: bold;
        margin-bottom: 10px;
    }
    p {
        font-size: 0.8rem;
        margin-bottom: 10px;
    }
    .text-center {
        text-align: center;
    }
    .text-right {
        text-align: right;
    }
    .text-left {
        text-align: left;
    }
    .text-justify {
        text-align: justify;
    }
    .text-nowrap {
        white-space: nowrap;
    }
    .text-truncate {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .text-uppercase {
        text-transform: uppercase;
    }
    .text-lowercase {
        text-transform: lowercase;
    }
    .text-capitalize {
        text-transform: capitalize;
    }
    .text-success {
        color: #28a745;
    }
    .text-danger {
        color: #dc3545;
    }
    .text-warning {
        color: #ffc107;
    }
    .text-info {
        color: #17a2b8;
    }
    .text-light {
        color: #f8f9fa;
    }
    .text-dark {
        color: #343a40;
    }
    .text-white {
        color: #fff;
    }
    .text-body {
        color: #212529;
    }
`;    
