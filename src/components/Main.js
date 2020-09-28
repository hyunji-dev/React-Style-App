import React from 'react';
import styled from 'styled-components';
import CardAround from './CardAround';
import CardWorld from './CardWorld';

const Main = () => {
    const MainStyle = styled.div`
        margin: 30px 80px;
    `;

    const SectionStyle = styled.div`
        margin: 30px 0px;
    `;

    const SectionTitleStyle = styled.div`
        font-size: 25px;
        font-weight: 800;
        color: rgb(66, 66, 66);
    `;

    const CardBoxStyle = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 10px;
        margin: 20px 0px;
    `;

    const AdvertiseBoxStyle = styled.div`
        margin: 40px 0;
        height: 350px;
        margin: 20px 0px;
    `;

    const AdImgStyle = styled.img`
        border-radius: 20px;
        height: 350px;
        width: 100%;
    `;
    const RecommendBoxStyle = styled.div`
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-gap: 10px;
        margin: 20px 0px;
    `;

    const RecommendImgStyle = styled.img`
        height: 250px;
        width: 100%;
    `;

    return (
        <MainStyle>
            <SectionStyle>
                <SectionTitleStyle>에어비앤비 둘러보기</SectionTitleStyle>
                <CardBoxStyle>
                    <CardAround
                        pic="images/card1.jpg"
                        title="숙소 및 부티크 호텔"
                    />
                    <CardAround pic="images/card2.jpg" title="트립" />
                    <CardAround pic="images/card3.jpg" title="어드벤처" />
                    <CardAround pic="images/card4.jpg" title="레스토랑" />
                </CardBoxStyle>
            </SectionStyle>

            <SectionStyle>
                <AdvertiseBoxStyle>
                    <AdImgStyle src="images/ad1.jpg" />
                </AdvertiseBoxStyle>
            </SectionStyle>

            <SectionStyle>
                <SectionTitleStyle>추천 여행지</SectionTitleStyle>
                <RecommendBoxStyle>
                    <RecommendImgStyle src="images/choo1.png" />
                    <RecommendImgStyle src="images/choo2.png" />
                    <RecommendImgStyle src="images/choo3.png" />
                    <RecommendImgStyle src="images/choo4.png" />
                    <RecommendImgStyle src="images/choo5.png" />
                </RecommendBoxStyle>
            </SectionStyle>

            <SectionStyle>
                <SectionTitleStyle>
                    에어비앤비 플러스를 만나보세요!
                </SectionTitleStyle>
                <div>퀄리티와 인테리어 디자인이 검증된 숙소 셀렉션</div>
                <AdvertiseBoxStyle>
                    <AdImgStyle src="images/ad2.png" />
                </AdvertiseBoxStyle>
            </SectionStyle>

            <SectionStyle>
                <SectionTitleStyle>전 세계 숙소</SectionTitleStyle>
                <CardBoxStyle>
                    <CardWorld
                        pic="images/home1.png"
                        info1="오두막 · BALIAN BEACH, BALI"
                        info2="BALIAN TREEHOUSE w beautiful pool"
                        star="★★★★★"
                        count="185"
                        type="슈퍼호스트"
                    />
                    <CardWorld
                        pic="images/home2.png"
                        info1="키클라데스 주택 · 이아(OIA)"
                        info2="Unique Architecture Cave House"
                        star="★★★★★"
                        count="188"
                        type="슈퍼호스트"
                    />
                    <CardWorld
                        pic="images/home3.png"
                        info1="성 · 트웬티나인 팜스(TWENTYNINE PALMS)"
                        info2="Tile House"
                        star="★★★★★"
                        count="367"
                        type="슈퍼호스트"
                    />
                    <CardWorld
                        pic="images/home4.png"
                        info1="검증됨 · 케이프타운"
                        info2="Modern, Chic Penthouse with Mountain, City & Sea Views"
                        star="★★★★★"
                        count="177"
                        type="슈퍼호스트"
                    />
                    <CardWorld
                        pic="images/home5.png"
                        info1="아파트 전체 · 마드리드(MADRID)"
                        info2="솔광장에 위치한 개인 스튜디오"
                        star="★★★★★"
                        count="459"
                        type="슈퍼호스트"
                    />
                    <CardWorld
                        pic="images/home6.png"
                        info1="집 전체 · HUMAC"
                        info2="Vacation house in etno-eco village Humac"
                        star="★★★★★"
                        count="119"
                        type="슈퍼호스트"
                    />
                    <CardWorld
                        pic="images/home7.png"
                        info1="개인실 · 마라케시"
                        info2="The Cozy Palace"
                        star="★★★★★"
                        count="559"
                        type="슈퍼호스트"
                    />
                    <CardWorld
                        pic="images/home8.png"
                        info1="게스트용 별채 전체 · 로스앤젤레스"
                        info2="Private Pool House with Amazing Views!"
                        star="★★★★★"
                        count="170"
                        type="슈퍼호스트"
                    />
                </CardBoxStyle>
            </SectionStyle>
        </MainStyle>
    );
};

export default Main;
