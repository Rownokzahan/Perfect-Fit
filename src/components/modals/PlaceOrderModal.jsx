import { IoCheckmarkCircleOutline } from "react-icons/io5";
import Modal from "./Modal";

const PlaceOrderModal = ({ isOpen, setIsOpen }) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} dismissible={false}>
      <IoCheckmarkCircleOutline className="text-5xl mx-auto mb-4" />
      <h3 className="text-center text-2xl font-semibold mb-8">
        Your order has been placed sucessfully!
      </h3>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <a href="/dresses" className="button-black-outline w-full">
          Continue Shopping
        </a>
        <a href="/" className="button-black-solid text-center w-full">
          Back to Home
        </a>
      </div>
    </Modal>
  );
};

export default PlaceOrderModal;
