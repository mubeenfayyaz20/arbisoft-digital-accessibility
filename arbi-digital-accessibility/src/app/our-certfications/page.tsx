import React from "react";
import Image from "next/image";
import { Tabs, Tab } from "../components/Tabs";
import styles from "../styles/components/CustomCard.module.scss";
import MubeenCertificate from "../../../public/mubeen-certificate.png";
import Card from "../components/CustomCard";

const OurCertfications = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-center largeHeading ">Our Certifications</h1>
      </div>
      <div
        className={`grid grid-cols-3 gap-8 ${styles.ourCertficationsWrapper}`}
      >
        <div
          tabIndex={0}
          role="group"
          aria-label="Mubeen Fayyaz Section 508 Certifications"
        >
          <Card
            title="Mubeen Fayyaz"
            imageSrc={MubeenCertificate}
            imageAlt="Compilted Section 508 Certificate"
          />
        </div>
        <div
          tabIndex={0}
          role="group"
          aria-label="Mubeen Fayyaz Section 508 Certifications"
        >
          <Card
            title="Muhammad Sami"
            imageSrc={MubeenCertificate}
            imageAlt="Compilted CPACC certificate"
          />
        </div>
      </div>
    </>
  );
};

export default OurCertfications;
