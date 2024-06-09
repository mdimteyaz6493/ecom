import React, { useContext, useState } from "react";
import Modal from "react-modal";
import "../Styles/Card_modal.css";
import { UserContext } from "../Context/userContext";
import { useNavigate } from "react-router-dom";


const Card_Modal = ({ isOpen, onRequestClose, onConfirm ,handleClearCart}) => {
    const navigate = useNavigate();
  const { totalPay } = useContext(UserContext);
  const [cardNumber, setcardNumber] = useState("");
  const [expiray, setexpiray] = useState("");
  const [cvv, setcvv] = useState("");

  const handleConfirm = () => {
      onConfirm(cardNumber);
      onRequestClose();
      alert("Oder made successfully");
      setcardNumber("")
      setexpiray("")
      setcvv("")
      handleClearCart()
      navigate("/")
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="UPI Payment"
      className="modal"
      overlayClassName="modal-overlay"
    >
      <h2>Enter Card Details</h2>
      <input
        type="text"
        value={cardNumber}
        onChange={(e) => setcardNumber(e.target.value)}
        placeholder="Enter card Number"
      />
      <input
        type="text"
        value={expiray}
        onChange={(e) => setexpiray(e.target.value)}
        placeholder="Enter Expiry Date"
      />
      <input
        type="password"
        value={cvv}
        onChange={(e) => setcvv(e.target.value)}
        placeholder="Enter CVV"
      />

      {cardNumber && expiray && cvv? <button onClick={handleConfirm} className="confirm">
        PAY Rs {totalPay}
      </button>:<button onClick={handleConfirm} className="confirm" style={{backgroundColor:"grey"}}>
        PAY Rs {totalPay}
      </button>}
      <button onClick={onRequestClose} className="cancel">
        Cancel
      </button>
    </Modal>
  );
};

export default Card_Modal;
