import React, { useContext, useState } from "react";
import Modal from "react-modal";
import "../Styles/upiModal.css";
import { UserContext } from "../Context/userContext";
import { useNavigate } from "react-router-dom";

const UpiModal = ({ isOpen, onRequestClose, onConfirm,handleClearCart }) => {
  const navigate = useNavigate()
  const { totalPay } = useContext(UserContext);
  const [upiId, setUpiId] = useState("");
  const [verify, setverify] = useState(false);

  const handleConfirm = () => {
    if (upiId != "") {
      onConfirm(upiId);
      onRequestClose();
      alert("Oder made successfully");
      setUpiId("")
      setverify(false)
      handleClearCart();
      navigate("/")
    }

  };
  const verify_upi = () => {
    if (upiId != "") {
      setverify(true);
    }
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="UPI Payment"
      className="modal"
      overlayClassName="modal-overlay"
    >
      <h2>Enter UPI ID</h2>
      <input
        type="text"
        value={upiId}
        onChange={(e) => setUpiId(e.target.value)}
        placeholder="Enter your UPI ID"
      />
      <span className="verify" onClick={() => verify_upi()}>
        {verify ? (
          <span style={{ color: "green" }}>VERIFIED</span>
        ) : (
          <span style={{ color: "blue" }}>VERIFY</span>
        )}
      </span>
      {verify? <button onClick={handleConfirm} className="confirm">
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

export default UpiModal;
