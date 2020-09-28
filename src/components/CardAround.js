import React from 'react';
import styled from 'styled-components';

const CardAround = ({ pic, title }) => {
    const CardAroundStyle = styled.div`
        display: grid;
        grid-template-columns: 1fr 3fr;
        border: 1px solid rgb(212, 210, 210);
        border-radius: 6px;
        box-shadow: 0 0 3px 0 rbf(172, 170 170);
    `;

    const CardTitleStyle = styled.div`
        display: grid;
        align-items: center;
        font-weight: 600;
        margin: 0 0 0 10px;
    `;

    const CardImageStyle = styled.img`
        height: 70px;
        width: 100%;
    `;
    return (
        <CardAroundStyle>
            <CardImageStyle src={pic}></CardImageStyle>
            <CardTitleStyle></CardTitleStyle>
        </CardAroundStyle>
    );
};

export default CardAround;
