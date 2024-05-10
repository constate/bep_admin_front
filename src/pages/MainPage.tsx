import { Outlet } from 'react-router-dom';
import SideMenu from 'components/SideMenu';

const MainPage = () => {
    return (
        <>
            <SideMenu />
            <Outlet />
        </>
    );
};
export default MainPage;
