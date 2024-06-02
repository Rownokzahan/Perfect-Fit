import Modal from "./Modal";
import { IoMdInformationCircleOutline } from "react-icons/io";

const RemoveFromCartModal = ({ isOpen, setIsOpen, confirmRemoveFromCart }) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} dismissible={true}>
      <IoMdInformationCircleOutline className="text-5xl mx-auto mb-4 text-secondary-black" />
      <p className="text-center mb-6">
        Are you sure you want to remove it from your shopping bag?
      </p>

      <div className="flex justify-around items-center gap-12">
        <button
          className="button-black-outline w-full text-center"
          onClick={() => setIsOpen(false)}
        >
          Cancel
        </button>
        <button
          className="button-black-solid w-full text-center"
          onClick={confirmRemoveFromCart}
        >
          Delete
        </button>
      </div>
    </Modal>
  );
};

export default RemoveFromCartModal;
