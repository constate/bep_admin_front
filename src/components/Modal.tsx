import styled from 'styled-components';

const Modal = () => {
    return <ModalBackground></ModalBackground>;
};

export default Modal;

const ModalBackground = styled.div`
    z-index: 1;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
    inset: 0px;
`;
