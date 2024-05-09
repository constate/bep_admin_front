import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import styled from 'styled-components';

interface Props {
    children: ReactNode;
}

const ContentSection: React.FC<Props> = ({ children }) => {
    const userInfo = useSelector((state: RootState) => state.userAuth.userInfo);
    if (!userInfo) {
        return <></>;
    }
    return <ContentSectionWrap>{children}</ContentSectionWrap>;
};

export default ContentSection;

const ContentSectionWrap = styled.section`
    margin-left: 24rem;
    width: calc(100% - 24rem);
    height: 100vh;
    padding: 2.4rem;
`;
