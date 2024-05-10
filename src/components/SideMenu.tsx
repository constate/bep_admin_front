import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { useNavigate, useLocation } from 'react-router-dom';
import { getCurrentCrewAuth } from 'apis/crewAuth';
import toast, { Toaster } from 'react-hot-toast';

import bepLogoSVG from 'assets/svg/bep_blue_logo.svg';
import dashboardSVG from 'assets/svg/dashboard_icon.svg';
import stationSVG from 'assets/svg/ev_station_icon.svg';
import customerSVG from 'assets/svg/customer_profile_icon.svg';
import detectionSVG from 'assets/svg/detection_icon.svg';
import logIcon from 'assets/svg/log_history_icon.svg';
import inquiryIcon from 'assets/svg/inquiry_icon.svg';

import { setCrewAuth, initAuth } from 'store/reducers/authSlice';

interface Menu {
    key: string;
    value: string;
    path: string;
}

const SideMenu: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userInfo = useSelector((state: RootState) => state.userAuth.userInfo);

    const location = useLocation();
    const [activeMenuIndex, setActiveMenuIndex] = useState<number | null>(null);

    const menuList: Menu[] = [
        {
            key: 'DASHBOARD',
            value: 'DASHBOARD',
            path: '/dashboard',
        },
        { key: 'CHARGING_STATION', value: 'STATION', path: '/station' },
        { key: 'CUSTOMER', value: 'CUSTOMER', path: '/customer' },
        { key: 'REAL_TIME_DETECTION', value: 'DETECTION', path: '/detection' },
        { key: 'LOG', value: 'LOG HISTORY', path: '/loghistory' },
        { key: 'INQUIRY', value: 'INQUIRY', path: '/inquiry' },
    ];

    const setActiveMenuByPath = () => {
        const currentPath = location.pathname;
        const activeIndex = menuList.findIndex(
            (menu) => menu.path === currentPath,
        );
        if (activeIndex !== -1) {
            setActiveMenuIndex(activeIndex);
        }
    };

    const getCurrent = async (accessToken: string) => {
        try {
            const crewData = await getCurrentCrewAuth(accessToken);
            dispatch(setCrewAuth(crewData));
        } catch (error) {
            toast.error('인증이 만료되었습니다');
            dispatch(initAuth());
            navigate('/login');
        }
    };

    const handleClickMenu = (index: number) => {
        setActiveMenuIndex(index);
        const path = menuList[index].path;
        navigate(path);
    };

    const handleLogOut = () => {
        dispatch(initAuth());
        navigate('/login');
    };

    const getMenuIcon = (key: string) => {
        switch (key) {
            case 'DASHBOARD':
                return dashboardSVG;
            case 'CHARGING_STATION':
                return stationSVG;
            case 'CUSTOMER':
                return customerSVG;
            case 'REAL_TIME_DETECTION':
                return detectionSVG;
            case 'LOG':
                return logIcon;
            case 'INQUIRY':
                return inquiryIcon;
        }
    };

    useEffect(() => {
        if (!userInfo) {
            const accessToken = localStorage.getItem('BEP_ADMIN_ACCESS_TOKEN');
            if (!accessToken) {
                navigate('/login');
                return;
            }
            getCurrent(accessToken);
        }
    }, []);

    useEffect(() => {
        setActiveMenuByPath();
    }, [location.pathname]);

    if (!userInfo) {
        return <></>;
    }

    return (
        <SideMenuWrap>
            <BepLogo src={bepLogoSVG} />
            <MenuListWrap>
                {menuList.map((menu, index) => (
                    <MenuBox
                        key={menu.key}
                        onClick={() => handleClickMenu(index)}
                        $active={activeMenuIndex === index}
                    >
                        <MenuIcon
                            $active={activeMenuIndex === index}
                            src={getMenuIcon(menu.key)}
                        />
                        {menu.value}
                    </MenuBox>
                ))}
            </MenuListWrap>
            <CrewInfoWrap>
                <CrewHello>{userInfo?.firstName}님, 안녕하세요</CrewHello>
                {/* <CrewSession>인증 만료 10초 남음</CrewSession> */}
                <LogOut onClick={handleLogOut}>로그아웃</LogOut>
            </CrewInfoWrap>
            <CopyrightWrap>
                <CopyrightText>
                    Copyright 2024 Brite Energy Partners.
                </CopyrightText>
                <CopyrightText>All Rights Reserved.</CopyrightText>
            </CopyrightWrap>
            <Toaster />
        </SideMenuWrap>
    );
};

export default SideMenu;

const SideMenuWrap = styled.section`
    user-select: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 24px;
    position: absolute;
    left: 0;
    top: 0;
    width: 24rem;
    height: 100vh;
    padding: 2.4rem 0;
    background-color: #ffffff;
`;

const BepLogo = styled.img`
    -webkit-user-drag: none;
    height: 3.2rem;
`;

const MenuListWrap = styled.ul`
    overflow-y: auto;
    width: 100%;
    height: calc(100% - 30rem);
`;

interface MenuBoxProps {
    $active: boolean;
}

const MenuBox = styled.li<MenuBoxProps>`
    display: flex;
    align-items: center;
    gap: 12px;
    width: 100%;
    height: 5.6rem;
    line-height: 5.6rem;
    padding: 0 2.4rem;
    font-size: 1.8rem;
    text-align: left;
    cursor: pointer;
    background-color: ${(props) => (props.$active ? '#0099fe' : 'transparent')};
    color: ${(props) => (props.$active ? '#ffffff' : '#000000')};
    /* &:hover {
        background-color: #0099fe;
        color: #ffffff;
    } */
`;

const MenuIcon = styled.img<MenuBoxProps>`
    width: 2.4rem;
    filter: ${(props) => props.$active && 'brightness(10)'};
`;

const CrewInfoWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 15rem;
`;

const CrewHello = styled.p`
    font-size: 1.8rem;
`;

const CrewSession = styled.div`
    font-size: 1.6rem;
`;

const LogOut = styled.div`
    font-size: 1.4rem;
    cursor: pointer;
`;

const CopyrightWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const CopyrightText = styled.p`
    font-size: 1.4rem;
    color: #666;
`;
