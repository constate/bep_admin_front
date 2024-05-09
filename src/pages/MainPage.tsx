import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import HeadMenu from 'components/HeadMenu';
import SideMenu from 'components/SideMenu';
import { RootState } from 'store/store';

const MainPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    // const userInfo = useSelector((state: RootState) => state.userAuth.userInfo);
    useEffect(() => {
        // if (!userInfo) {
        //     navigate('/login');
        // }
        if (location.pathname === '/') {
            navigate('/dashboard');
        }
    }, [location, navigate]);

    return (
        <>
            <SideMenu />
            <Outlet />
        </>
    );
};

export default MainPage;

const MainPageWrap = styled.div`
    /* display: flex;
    flex-direction: column;
    justify-content: center; */
    width: 100%;
    min-height: 100vh;
    background-color: #f0f4f9;
`;
