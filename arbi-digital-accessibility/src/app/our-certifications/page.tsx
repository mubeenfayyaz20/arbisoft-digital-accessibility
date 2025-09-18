import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import styles from "../styles/components/CustomCard.module.scss";
import SliderCarousel from "../components/SliderCarousel";
import { employees } from "../data/certificates";

export const metadata: Metadata = {
  title: "Our Certifications | Arbi Digital Accessibility",
  description:
    "Meet our certified team of accessibility professionals, showcasing their qualifications and commitment to creating inclusive digital experiences.",
};

const OurCertfications = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-center largeHeading ">Our Certifications</h1>
      </div>
      <div
        className="plainText importantNote mt-2"
        role="note"
        aria-label="CPACC Certification "
      >
        <strong className="red-color" aria-hidden="true">
          Note*
        </strong>{" "}
        We are CPACC Certified – You Can Be Too! Our team holds CPACC
        certification to ensure accessibility expertise. if you are interested
        in becoming CPACC certified.
        <Link href="/cpacc-exam-guidelines" className="link-color-blue">
          Click here
        </Link>{" "}
      </div>
      <div
        className={`grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${styles.ourCertficationsWrapper}`}
      >
        {employees.map((emp, index) => (
          <SliderCarousel
            key={index}
            employeeName={emp.name}
            certificates={emp.certificates}
          />
        ))}
      </div>
    </>
  );
};

export default OurCertfications;
