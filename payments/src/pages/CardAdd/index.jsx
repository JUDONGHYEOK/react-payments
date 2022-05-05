import "./index.scss";

import Card from "../../components/common/Card";
import CardNumberInput from "../../components/organisms/CardNumberInput";
import CardPasswordInput from "../../components/organisms/CardPasswordInput";
import ExpiredDateInput from "../../components/organisms/ExpiredDateInput";
import OwnerNameInput from "../../components/organisms/OwnerNameInput";
import SecureCodeInput from "../../components/organisms/SecureCodeInput";
import useCard from "../../hooks/useCard";
import NextButton from "../../components/common/NextButton";
import CardColorPicker from "../../components/organisms/CardColorPicker";
import useModal from "../../hooks/useModal";
import ConfirmAdd from "../../components/organisms/ConfirmAdd";

const CardAdd = () => {
  const { cardInfo, dispatch, validateCardInfo } = useCard();
  const [openConfirmModal, closeConfirmModal, ConfirmModal] = useModal(
    <ConfirmAdd
      cardInfo={cardInfo}
      closeModal={() => {
        closeConfirmModal();
      }}
      submit={() => {
        closeConfirmModal();
      }}
    />
  );
  const [openColorPickerVisible, closeColorPickerVisible, ColorPickerModal] =
    useModal(
      <CardColorPicker
        closeModal={() => {
          closeColorPickerVisible();
        }}
        onChangeCardName={dispatch}
      />
    );

  const { cardName, cardNumber, expiredDate, ownerName, secureCode, password } =
    cardInfo;

  const submitCard = () => {
    try {
      validateCardInfo();
      openConfirmModal();
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <>
      <div className="card-add">
        <header>
          <button>{"<"}</button>
          <p>카드 추가</p>
        </header>
        <div className="card-add__container">
          <Card cardInfo={cardInfo} onClick={openColorPickerVisible} />
          {Boolean(cardName) || (
            <span className="select-card-message">
              카드를 눌러 카드를 선택해주세요
            </span>
          )}
          <form>
            <CardNumberInput
              cardNumberValue={cardNumber}
              onChangeCardNumber={dispatch}
            />
            <ExpiredDateInput
              expiredDateValue={expiredDate}
              onChangeExpiredDate={dispatch}
            />
            <OwnerNameInput
              ownerNameValue={ownerName}
              onChangeOwner={dispatch}
            />
            <SecureCodeInput
              secureCodeValue={secureCode}
              onChangeSecureCode={dispatch}
            />
            <CardPasswordInput
              passwordValue={password}
              onChangePassword={dispatch}
            />
          </form>
        </div>
        <NextButton onClick={submitCard}>다음</NextButton>
      </div>
      <ColorPickerModal />
      <ConfirmModal />
    </>
  );
};
export default CardAdd;
