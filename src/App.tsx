import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import Modal from "react-modal";
import { NewTransactionModal } from "./components/NewTransactionModal/Index";

Modal.setAppElement("#root");

export function App() {
  const [isNewtransactionModalOpen, setIsNewTransactionmodalOpen] = useState(
    false
  );

  function handleOpenNewTransactionModal() {
    setIsNewTransactionmodalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionmodalOpen(false);
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />
      <NewTransactionModal
        isOpen={isNewtransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </>
  );
}
