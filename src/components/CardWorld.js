import React from 'react';
import styled from 'styled-components';

const CardWorld = ({ pic, info1, info2, star, count, type }) => {
    const CardImgStyle = styled.img`
        height: 180px;
        width: 100%;
    `;

    const Info1Style = styled.div`
        margin: 5px 0;
        font-size: 13px;
        color: gray;
    `;
    const Info2Style = styled.div`
        font-size: 18px;
        font-weight: 600;
        color: rgb(61, 60, 60);
    `;
    const StarStyle = styled.div`
        font-size: 12px;
        color: rgb(30, 119, 115);
        font-weight: 800;
    `;

    return (
        <div>
            <CardImgStyle src={pic} />
            <div>
                <Info1Style>{info1}</Info1Style>
                <Info2Style>{info2}</Info2Style>
                <div>
                    <StarStyle>{star}</StarStyle>
                    <span style={{ fontSize: '12px' }}>{count}</span>
                    <span style={{ fontSize: '12px' }}>{type}</span>
                </div>
            </div>
        </div>
    );
};

export default CardWorld;
