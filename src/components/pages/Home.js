import React, { useState, useCallback } from "react";
import LoginModal from "../LoginModal";
import HomePage from "../HomePage";

export default function Home() {
  return (
    <>
      <HomePage />
      <LoginModal />
    </>
  );
}
