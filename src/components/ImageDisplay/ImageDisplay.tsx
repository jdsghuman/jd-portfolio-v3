import Image from "next/image";
import ModalImage from "react-modal-image";

import styles from "./ImageDisplay.module.scss";

interface ImageProps {
  src: string;
  alt: string;
  height?: number;
  width?: number;
  modal?: boolean;
}

interface Props {
  images: ImageProps[];
}

const ImageDisplay = ({ images }: Props) => {
  return (
    <div className={styles.container}>
      {images?.map((image, i) => {
        if (image.modal) {
          return (
            <ModalImage
              className={styles.image__modal}
              // placeholder="blur"
              key={i}
              small={image.src}
              large={image.src}
              alt={image?.alt}
            />
          );
        }
        return (
          <Image
            src={image.src}
            alt={image?.alt}
            width={image?.width}
            height={image?.height}
            className={styles.image}
            // placeholder="blur"
            key={i}
          />
        );
      })}
    </div>
  );
};

export default ImageDisplay;
