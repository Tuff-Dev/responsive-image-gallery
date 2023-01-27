import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ImageViewModal from "./ImageViewModal";

export interface Image {
  src: string;
  alt: string;
}

interface Props {
  images: Image[];
}

const ImagePanel = ({ images }: Props) => {
  const [selectedImage, setSelectedImage] = useState<Image>();

  return (
    <>
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 100: 1, 700: 2, 1300: 3, 1600: 4 }}
      >
        <Masonry>
          {images.map((image) => (
            <img
              src={image.src}
              alt={image.alt}
              key={image.src}
              className="p-4 cursor-pointer"
              onClick={() => {
                console.log("select: ", image);
                setSelectedImage(image);
              }}
            />
          ))}
        </Masonry>
      </ResponsiveMasonry>
      {!!selectedImage ? (
        <ImageViewModal
          image={selectedImage}
          closeModal={() => setSelectedImage(undefined)}
        />
      ) : null}
    </>
  );
};

export default ImagePanel;
