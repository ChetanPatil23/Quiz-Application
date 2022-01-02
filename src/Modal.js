import React from "react";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { isModalOpen, closeModal, correct, questions } = useGlobalContext();
  const percentage = ((correct / questions.length) * 100).toFixed(0);

  return (
    <div
      className={`${
        isModalOpen ? "modal-container isOpen" : "modal-container"
      }`}
    >
      <div className="modal-content">
        <h2>{percentage > 50 ? "Congrats!" : "Ooops!"}</h2>
        <p>You answered {percentage}% of questions correctly</p>
        {percentage <= 50 && (
          <p>Minimum score required to pass the test : &gt;50%</p>
        )}
        <button className="close-btn" onClick={closeModal}>
          Play again
        </button>
      </div>
    </div>
  );
};

export default Modal;
