import Modal from "../../common/Modal";
import "./index.scss";

const ConfirmAdd = ({ closeModal, cardInfo, submit }) => {
  return (
    <Modal closeModal={closeModal}>
      <div className="confirm-add">
        <span className="title">입력하신 정보가 맞습니까?</span>
        <span className="subtitle">카드이름</span>
        <span className="content">{`${cardInfo.cardName}`}</span>
        <span className="subtitle">카드번호</span>
        <span className="content">
          {`${cardInfo.cardNumber[0]}-${cardInfo.cardNumber[1]}-`}
          <span className="dot">····</span>-<span className="dot">····</span>
        </span>
        <span className="subtitle">카드소유주</span>
        <span className="content">{`${cardInfo.ownerName}`}</span>

        <div className="button--container">
          <button className="confirm--button pink" onClick={closeModal}>
            취소
          </button>
          <button className="confirm--button blue" onClick={submit}>
            확인
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmAdd;