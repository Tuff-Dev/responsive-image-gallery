import { Image } from "./ImagePanel";
import { XMarkIcon } from "@heroicons/react/24/solid";

type Props = {
  image: Image;
  closeModal: () => void;
};

const ImageViewModal = ({ image, closeModal }: Props) => {
  console.log("Rendering modal");
  return (
    <>
      {/* Backdrop */}
      <div className="bg-black bg-opacity-80 w-screen h-screen fixed top-0 left-0 z-50 p-10 flex justify-center">
        <XMarkIcon
          className="text-white fixed top-5 right-5 h-10 w-10 xl:h-14 xl:w-14 cursor-pointer"
          onClick={closeModal}
        />
        <img
          src={image.src}
          alt={image.alt}
          key={image.src}
          className="p-4 cursor-pointer w-auto h-auto max-w-full max-h-full object-contain"
        />
      </div>
    </>
  );
};

export default ImageViewModal;
