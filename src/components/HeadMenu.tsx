import styled from 'styled-components';
import bepLogoSVG from 'assets/svg/bep_blue_logo.svg';

const HeadMenu = () => {
    return (
        <HeadMenuWrap>
            <BepLogo src={bepLogoSVG} />
        </HeadMenuWrap>
    );
};

export default HeadMenu;

const HeadMenuWrap = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    width: 100%;
    height: 6rem;
    padding: 0 2.4rem;
`;

const BepLogo = styled.img`
    -webkit-user-drag: none;
    height: 3.2rem;
`;
