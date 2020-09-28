import React from 'react';
import styled from 'styled-components';
import Search from './Search';

const Header = () => {
    // index.html 파일 경로 기준으로 보기
    const HeaderStyle = styled.div`
        background-image: url('images/background.jpg');
        height: 750px;
        background-size: 100% 100%;
    `;

    // 재사용 필요없는 애라서 여기에 포함시킴
    // 혹은 너무 복잡하면 빼서 만듦
    // 스타일컴포넌트라서 변수명 뒤에 Style 붙임
    const NavStyle = styled.div`
        display: grid; /* 플렉스로 고쳐볼 것!!! */
        grid-template-columns: auto auto; /*2개로 찢음*/
        justify-content: space-between; /* 정렬: 좌우 끝으로 배치 */
        padding: 20px;
    `;

    // 메뉴는 주로 ul 태그로 만듬
    const MenuStyle = styled.ul`
        display: grid;
        grid-template-columns: auto auto auto auto;
        grid-gap: 30px; /* 사이를 조금씩 떨어뜨림 */
        list-style-type: none; /* 앞에 점 제거 */
        color: white; /* 폰트 컬러 */
        font-weight: 800; /* 글씨 진하기의 강도 조절 */
    `;

    // 로고
    // 로고 이미지는 주로 svg, 백터그래픽, 이모지? 등으로 만드는데
    // 윈도우 메뉴바에서 우클릭 -> 터치키보드단추표시 ->
    const LogoStyle = styled.div`
        color: white;
        font-size: 25px;
        font-weight: 800;
    `;

    const SectionStyle = styled.div``;

    return (
        <HeaderStyle>
            <NavStyle>
                <LogoStyle>🛫</LogoStyle>

                <MenuStyle>
                    <li>호스트가 되어보세요</li>
                    <li>도움말</li>
                    <li>회원가입</li>
                    <li>로그인</li>
                </MenuStyle>
            </NavStyle>
            <SectionStyle>
                <Search />
            </SectionStyle>
        </HeaderStyle>
    );
};

export default Header;
