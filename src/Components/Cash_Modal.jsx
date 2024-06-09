import React, { useContext, useState } from "react";
import Modal from "react-modal";
import "../Styles/upiModal.css";
import { UserContext } from "../Context/userContext";
import { useNavigate } from "react-router-dom";

const Cash_Modal = ({ isOpen, onRequestClose,handleClearCart }) => {
  const navigate = useNavigate()
  const { totalPay } = useContext(UserContext);

  const handleConfirm = () => {
   
      onRequestClose();
      alert("Oder made successfully");
      handleClearCart();
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
      <h2>Cash on Delivery</h2>
        <button onClick={handleConfirm} className="confirm">
        Confirm order
      </button>
    </Modal>
  );
};

export default Cash_Modal;
