"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Carousel.module.css";

interface CarouselProps {
  images: string[];
  fixedSize?: boolean;
  id?: string;
}

export default function Carousel({ images, fixedSize = false, id }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className={`${styles.carousel} ${fixedSize ? styles.fixed : ""}`} id={id}>
      <button className={styles.arrow} onClick={prevSlide}>‹</button>
      <div className={styles.imageWrapper}>
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          width={1200}
          height={675}
          className={styles.image}
        />
      </div>
      <button className={styles.arrow} onClick={nextSlide}>›</button>
    </div>
  );
}
