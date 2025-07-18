"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import styles from "../styles/components/CustomCard.module.scss";

type Certificate = {
  title: string;
  image: string;
};

type SliderCarouselProps = {
  employeeName: string;
  certificates: Certificate[];
};

export default function SliderCarousel({
  employeeName,
  certificates,
}: SliderCarouselProps) {
  const [current, setCurrent] = useState(0);
  const titleRef = useRef<HTMLDivElement | null>(null);

  const isSingle = certificates.length <= 1;

  const prevSlide = () => {
    if (!isSingle) {
      setCurrent((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
    }
  };

  const nextSlide = () => {
    if (!isSingle) {
      setCurrent((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
    }
  };

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.focus({ preventScroll: true });
    }
  }, [current]);

  return (
    <div
      role="region"
      aria-label={`Certificates carousel for ${employeeName}`}
      className={styles.card}
    >
      <div className={styles.topBar}></div>
      <div className={`${styles.contentCard} flex-col`}>
        <h2 className={styles.title}>{employeeName}</h2>

        <div className="relative overflow-hidden rounded-xl shadow">
          {certificates.map((item, index) => {
            const isActive = index === current;
            return (
              <div
                key={index}
                className={`transition-opacity duration-500 ease-in-out ${
                  isActive ? "opacity-100" : "opacity-0 absolute"
                }`}
                aria-hidden={!isActive}
              >
                <h3
                  ref={isActive ? titleRef : null}
                  tabIndex={isActive ? 0 : -1}
                  aria-live="polite"
                  className={styles.cardDescription}
                >
                  {item.title}
                </h3>

                <Image
                  src={item.image}
                  alt={`Certificate: ${item.title}`}
                  width={800}
                  height={400}
                  className="w-full h-auto"
                  priority={isActive}
                />
              </div>
            );
          })}
        </div>

        <div className="flex justify-between margin-top-20 flex-row-reverse">
          {certificates.length > 1 ? (
            <>
              <button
                onClick={nextSlide}
                aria-label="Next certificate"
                className="back-link"
              >
                Next <ArrowForward aria-hidden="true" />
              </button>
              <button
                onClick={prevSlide}
                aria-label="Previous certificate"
                className="back-link"
              >
                <ArrowBack aria-hidden="true" /> Prev
              </button>
            </>
          ) : (
            // Filler space to keep layout consistent if needed
            <div className="h-[40px] w-full" aria-hidden="true"></div>
          )}
        </div>
      </div>
    </div>
  );
}
