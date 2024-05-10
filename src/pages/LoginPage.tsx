import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import toast, { Toaster } from 'react-hot-toast';
import bepLogoSVG from 'assets/svg/bep_blue_logo.svg';
import { getCrewLoginAuth } from 'apis/crewAuth';
import { useDispatch } from 'react-redux';
import { setCrewAuth } from 'store/reducers/authSlice';

const LoginPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [inputUserName, setInputUserName] = useState<string | null>(null);
    const [inputPassWord, setInputPassWord] = useState<string | null>(null);

    const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputUserName(e.target.value);
    };

    const handlePassWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputPassWord(e.target.value);
    };

    interface LoginCredentials {
        username: string | null;
        password: string | null;
    }

    const handleLoginBtn = async (loginJson: LoginCredentials) => {
        try {
            const crewData = await getCrewLoginAuth(loginJson);
            dispatch(setCrewAuth(crewData));
            navigate('/dashboard');
        } catch (error) {
            toast.error('아이디 및 비밀번호를 확인해주세요');
        }
    };

    const handleSignupBtn = () => {
        toast(
            <div>
                <p style={{ fontSize: '14px' }}>dummyjson API를 이용하여</p>
                <p style={{ fontSize: '14px' }}>
                    이미 생성되어 있는 계정으로 로그인이 가능합니다
                </p>
                <p style={{ fontSize: '14px' }}>
                    개발자도구 Console에 로그인 계정이 작성되어 있습니다
                </p>
            </div>,
        );
        console.log(`이름: Jeanne\nID: kminchelle\n PW: 0lelplR`);
        console.log(`이름: Terry\n ID: atuny0\n PW: 9uQFF1Lh`);
    };

    return (
        <LoginPageWrap>
            <LoginBoxWrap>
                <BepLogo src={bepLogoSVG} />
                <LoginNotice>
                    준비는 탁월하게, 실행은 담대하게, 무드는 밝게
                </LoginNotice>
                <LoginFormWrap>
                    <IdInput
                        placeholder="아이디 입력"
                        onChange={handleUserNameChange}
                    />
                    <PassWordInput
                        type="password"
                        placeholder="비밀번호 입력"
                        onChange={handlePassWordChange}
                    ></PassWordInput>
                </LoginFormWrap>
                <LoginSubmitWrap>
                    <SignUpButton onClick={handleSignupBtn}>
                        계정 만들기
                    </SignUpButton>
                    <SignInButton
                        onClick={() =>
                            handleLoginBtn({
                                username: inputUserName,
                                password: inputPassWord,
                            })
                        }
                    >
                        로그인
                    </SignInButton>
                </LoginSubmitWrap>
            </LoginBoxWrap>
            <Toaster />
        </LoginPageWrap>
    );
};

export default LoginPage;

const LoginPageWrap = styled.div`
    user-select: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    background-color: #f0f4f9;
`;

const LoginBoxWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    width: 100%;
    max-width: 48rem;
    height: 52.8rem;
    background-color: #ffffff;
    border-radius: 2.8rem;
    padding: 4.8rem 2.8rem;
`;

const BepLogo = styled.img`
    -webkit-user-drag: none;
    height: 4.8rem;
`;

const LoginNotice = styled.h1`
    font-size: 1.8rem;
    text-align: center;
`;

const LoginFormWrap = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 1.6rem;
    height: 20rem;
`;

const LoginInputLabel = styled.div``;

const LoginInput = styled.input`
    width: 100%;
    height: 5.4rem;
    border: 0.1rem solid #6dbff2;
    border-radius: 1.4rem;
    font-size: 1.6rem;
    padding: 1.4rem 1.6rem;
`;

const IdInput = styled(LoginInput)``;

const PassWordInput = styled(LoginInput)``;

const LoginSubmitWrap = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: end;
    height: max-content;
`;

const Button = styled.div`
    width: 12rem;
    height: 5.4rem;
    line-height: 5.4rem;
    text-align: center;
    background-color: #0099ff;
    border-radius: 1.4rem;
    font-size: 1.6rem;
    cursor: pointer;
    color: #ffffff;
    &:hover {
        filter: brightness(0.95);
    }
    &:active {
        scale: 0.98;
    }
`;

const SignUpButton = styled(Button)`
    background: none;
    color: #0099ff;
    &:hover {
        background-color: #f0f4f9;
    }
`;

const SignInButton = styled(Button)``;
