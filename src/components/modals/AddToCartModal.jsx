import { IoCheckmarkCircleOutline } from "react-icons/io5";
import Modal from "./Modal";

const AddToCartModal = ({ isOpen, setIsOpen }) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} dismissible={false}>
      <IoCheckmarkCircleOutline className="text-5xl mx-auto mb-2" />
      <h3 className="text-center  text-2xl font-semibold mb-8">
        Added To Cart
      </h3>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <a href="/dresses" className="button-black-outline w-full">
          Continue Shopping
        </a>
        <a href="/cart" className="button-black-solid w-full">
          Proceed To Cart
        </a>
      </div>
    </Modal>
  );
};

export default AddToCartModal;
