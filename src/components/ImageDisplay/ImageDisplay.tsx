import Image from "next/image";

import styles from "./ImageDisplay.module.scss";

interface ImageProps {
  src: string;
  alt: string;
  height?: number;
  width?: number;
}

interface Props {
  images: ImageProps[];
}

const ImageDisplay = ({ images }: Props) => {
  return (
    <div className={styles.container}>
      {images?.map((image, i) => (
        <Image
          src={image.src}
          alt={image?.alt}
          width={image?.width}
          height={image?.height}
          className={styles.image}
          // placeholder="blur"
          key={i}
        />
      ))}
    </div>
  );
};

export default ImageDisplay;
