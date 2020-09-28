import React from 'react';
import styled from 'styled-components';

const Search = () => {
    const SearchStyle = styled.div`
        width: 430px;
        display: inline-block; /* 가로만 자기크기만큼 잡히고 세로는 늘릴 수 있음 */
        background-color: white;
        position: relative; /* 기본: static(물흐르듯이 내려감) / relative(관계형:이전의 다른 애들이랑 연결되서 배치??)*/
        top: 30px; /* position이 static이 아니면 줄 수 있는 속성 */
        left: 100px; /* position이 static이 아니면 줄 수 있는 속성 */
        padding: 25px 30px; /* 여백: (가로 세로) (왼/위/오/아) */
        box-shadow: 0 2px 2px 0 rgb(214, 214, 214);
        border-radius: 10px;
    `;

    const SearchTitleStyle = styled.div`
        padding: 10px 0px;
        font-size: 30px;
        font-weight: 800;
        color: rgb(70, 70, 70);
    `;

    // 밑에 테이블 하나고, 간단한 스타일만 적용할꺼니까 이렇게 만들지 말고 밑에서 바로 적용할 것, 안그러면 더 복잡해짐
    //const SearchTableStyle = styled.table``;

    // td안에 span을 넣어서 span에 스타일 적용해도 됨..
    const SearchSubTitleStyle = styled.td`
        padding: 10px 0px;
        font-size: 14px;
        font-weight: 600;
    `;

    const SearchInputStyle = styled.input`
        height: 45px;
        width: 100%;
        color: rgb(100, 100, 100);
        font-size: 15px;
        border: 1px solid rgb(230, 230, 230);
    `;

    const SearchSelectStyle = styled.select`
        height: 45px;
        width: 100%;
        color: rgb(100, 100, 100);
        font-size: 15px;
        border: 1px solid rgb(230, 230, 230);
    `;

    // 버튼을 div에 넣은 건 정렬을 위해서임
    const SearchButtonBoxStyle = styled.div`
        display: grid;
        grid-template-columns: auto;
        justify-content: end; /* 오른쪽끝에 배치 */
        padding: 20px 0px;
    `;

    const SearchButtonStyle = styled.button`
        background-color: rgb(255, 90, 95);
        color: white;
        width: 70px;
        height: 45px;
        font-size: 15px;
        font-weight: 700;
        border-radius: 6px; /* 1부터 50사이의 값을 줌 */
        border: 0px;
        cursor: pointer;
    `;

    return (
        <SearchStyle>
            <SearchTitleStyle>
                특색 있는 숙소와 즐길
                <br />
                거리를 예약하세요
            </SearchTitleStyle>
            <table style={{ width: '100%' }}>
                <tr>
                    <SearchSubTitleStyle colSpan="2">
                        목적지
                    </SearchSubTitleStyle>
                </tr>
                <tr>
                    <td colSpan="2">
                        <SearchInputStyle
                            type="text"
                            placeholder=" 모든 위치"
                        />
                    </td>
                </tr>
                <tr>
                    <SearchSubTitleStyle>체크인</SearchSubTitleStyle>
                    <SearchSubTitleStyle>체크아웃</SearchSubTitleStyle>
                </tr>
                <tr>
                    <td>
                        <SearchInputStyle type="date" />
                    </td>
                    <td>
                        <SearchInputStyle type="date" />
                    </td>
                </tr>
                <tr>
                    <SearchSubTitleStyle colSpan="2">인원</SearchSubTitleStyle>
                </tr>
                <tr>
                    <td colSpan="2">
                        <SearchSelectStyle>
                            <option>인원</option>
                        </SearchSelectStyle>
                    </td>
                </tr>
            </table>
            <SearchButtonBoxStyle>
                <SearchButtonStyle>검색</SearchButtonStyle>
            </SearchButtonBoxStyle>
        </SearchStyle>
    );
};

export default Search;
