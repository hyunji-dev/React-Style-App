import React from 'react';
import styled from 'styled-components';
import './App.css';

function App() {
    const MyBox = styled.div`
        display: grid;
        grid-template-columns: auto auto;
    `;
    return (
        <MyBox>
            <div>첫번째 박스</div>
            <div>두번째 박스</div>
        </MyBox>
    );
}

export default App;
