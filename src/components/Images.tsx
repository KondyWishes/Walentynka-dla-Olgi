import { useEffect, useState } from "react";
import { IMAGES } from "../constants/images";

const Images = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [IMAGES.length]);

  return (
    <section className="flex flex-col md:flex-row justify-center items-stretch gap-y-4 gap-x-8">
      {IMAGES.map((image, index) => (
        <img
          key={index}
          src={`./images/${image.src}`}
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
