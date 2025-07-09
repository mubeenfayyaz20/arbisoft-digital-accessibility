"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "../styles/components/CustomCard.module.scss";

// Define the type for certificate
type Certificate = {
  title: string;
  image: string;
};

// Define props for the component
type SliderCarouselProps = {
  employeeName: string;
  certificates: Certificate[];
};

export default function SliderCarousel({ employeeName, certificates }: SliderCarouselProps) {
  const [current, setCurrent] = useState(0);
  const titleRef = useRef<HTMLDivElement | null>(null);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.focus();
    }
  }, [current]);

  return (
    <div
      role="region"
      aria-label={`Certificates Carousel for ${employeeName}`}
      className={styles.card}
    >
      <div className={styles.topBar}></div>
      <div className={`${styles.contentCard} flex-col`}>
        <h2 className={styles.title}>{employeeName}</h2>

        <div className="relative overflow-hidden rounded-xl shadow">
          {certificates.map((item, index) => (
            <div
              key={index}
              className={`transition-opacity duration-500 ease-in-out ${
                index === current ? "opacity-100" : "opacity-0 absolute"
              }`}
              aria-hidden={index !== current}
            >
              <div className="bg-white text-center p-4 m-t-b-10">
                <div
                  ref={index === current ? titleRef : null}
                  tabIndex={-1}
                  className="text-xl font-bold text-gray-800 outline-none"
                >
                  {item.title}
                </div>
              </div>

              <Image
                src={item.image}
                alt={`Certificate: ${item.title}`}
                width={800}
                height={400}
                className="w-full h-auto"
                priority={index === current}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-between margin-top-20 flex-row-reverse">
          <button
            onClick={nextSlide}
            aria-label="Next certificate"
            className="back-link"
          >
            Next →
          </button>
          <button
            onClick={prevSlide}
            aria-label="Previous certificate"
            className="back-link"
          >
            ← Prev
          </button>
        </div>
      </div>
    </div>
  );
}
