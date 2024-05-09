import {
    Routes,
    Route,
    BrowserRouter,
    Navigate,
    Outlet,
    RouterProvider,
    createBrowserRouter,
} from 'react-router-dom';
import MainPage from 'pages/MainPage';
import DashBoardPage from 'pages/DashBoardPage';
import LoginPage from 'pages/LoginPage';
import CenterPage from 'pages/CenterPage';
import CustomerPage from 'pages/CustomerPage';
import DetectionPage from 'pages/DetectionPage';
import LogHistory from 'pages/LogHistory';
import InquiryPage from 'pages/InquiryPage';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />}>
                    <Route path="dashboard" element={<DashBoardPage />} />
                    <Route path="station" element={<CenterPage />} />
                    <Route path="customer" element={<CustomerPage />} />
                    <Route path="detection" element={<DetectionPage />} />
                    <Route path="loghistory" element={<LogHistory />} />
                    <Route path="inquiry" element={<InquiryPage />} />
                </Route>
                <Route path="/login" element={<LoginPage />} />
                <Route path="*" element={<>에러다</>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
