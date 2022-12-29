import Image from "next/image";
// @ts-ignore
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
            <div
              key={i}
              style={{
                maxWidth: `${image.width}px`,
                maxHeight: `${image.height}px`,
              }}
              className={styles.container__modal}
            >
              <ModalImage
                className={styles.image__modal}
                // placeholder="blur"
                small={image.src}
                large={image.src}
                alt={image?.alt}
                width={`${image?.width}px`}
                height={`${image?.height}px`}
              />
            </div>
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
