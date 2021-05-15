import { FC, MouseEvent } from 'react';
import styled, { css } from 'styled-components';
import { Z_INDEX_LAYER } from '../../../constants/style';

const ModalContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: ${Z_INDEX_LAYER.BACK_GROUND};
`;

const bottomType = css`
  margin-top: auto;
  height: 16rem;
  border-radius: 1rem 1rem 0 0;
`;

const fullType = css`
  height: 100vh;
`;

const ModalInner = styled.div<Pick<Props, 'type'>>`
  position: relative;
  width: 100%;
  background: #fff;
  ${({ type }) => (type === 'full' ? fullType : bottomType)}
  z-index: ${Z_INDEX_LAYER.MIDDLE_GROUND};
`;

interface Props {
  className?: string;
  children: React.ReactNode;
  modalClose?: () => void;
  type?: 'bottom' | 'full';
}

const Modal: FC<Props> = ({ children, modalClose, type, className }) => {
  const onClickDimmed = ({ target, currentTarget }: MouseEvent<HTMLDivElement>) => {
    if (!modalClose || target !== currentTarget) return;

    modalClose();
  };

  return (
    <ModalContainer className={className} onClick={onClickDimmed}>
      <ModalInner type={type}>{children}</ModalInner>
    </ModalContainer>
  );
};

export default Modal;