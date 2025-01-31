import { useEffect, useState } from "react";
import { ImageProps } from "../types/ImageProps";

const Images = () => {
  const [images, setImages] = useState<ImageProps[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    fetch("/data/olgaImages.json")
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => console.error(error));
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="flex flex-col md:flex-row justify-center items-stretch gap-y-4 gap-x-8">
      {images.map((image, index) => (
        <img
          key={image.id}
          src={`/images/${image.src}`}
          alt={image.alt}
          className={`image transition-all duration-300 ease-in-out ${
            index === currentIndex
              ? "opacity-100 drop-shadow-green border-green"
              : "opacity-50 border-primary"
          }`}
        />
      ))}
    </section>
  );
};

export default Images;
