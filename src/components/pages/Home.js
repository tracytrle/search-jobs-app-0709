import React, { useState, useCallback } from "react";
import LoginModal from "../LoginModal";
import HomePage from "../HomePage";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = useCallback(() => {
    setShowModal((prevState) => !prevState);
  }, []);

  return (
    <div>
      <HomePage />
      <button onClick={toggleModal}>Show Modal</button>
      {showModal ? <LoginModal onClose={toggleModal} /> : null}
    </div>
  );
}
