import { useState } from "react";
import Modal from "./Modal";

const Question = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <section className="flex flex-col justify-center items-center gap-4 py-2 border-t-2">
        <h2 className="text-2xl md:text-3xl lg:text-4xl">
          Czy chcesz być moją walentynką?
        </h2>
        <div className="flex justify-center items-center gap-4">
          <button
            className="btn bg-accent text-primary hover:bg-gray-300 hover:text-gray-800"
            onClick={toggleModal}
          >
            Ano
          </button>
          <button
            className="btn bg-gray-300 text-gray-800 hover:bg-accent hover:text-primary"
            onClick={toggleModal}
          >
            Wiadomix
          </button>
        </div>
      </section>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={toggleModal}>
          <img src="./heart.svg" alt="Serce" className="w-32 md:w-48 lg:w-64" />
          <p className="text-lg md:text-xl lg:text-2xl text-center">
            I teraz jestem szczęśliwy
            <br /> 😊😊😊
          </p>
        </Modal>
      )}
    </>
  );
};

export default Question;
