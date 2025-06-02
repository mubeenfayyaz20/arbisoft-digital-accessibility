import React from "react";
import Image from "next/image";
import { Tabs, Tab } from "../components/Tabs";
import styles from "../styles/components/Tabs.module.scss";
import MubeenCertificate from "../../../public/mubeen-certificate.png";

const OurCertfications = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-center largeHeading ">Our Certifications</h1>
      </div>
      <div className={`grid grid-cols-3 gap-8 ${styles.ourCertficationsTabs}`}>
        <Tabs>
          <Tab label="Section 508">
            <h4>Mubeen Fayyaz</h4>
            <Image
              src={MubeenCertificate}
              className={styles.logo}
              alt="Mubeen Certificate"
              width={400}
              height={300}
              objectFit="cover"
            />
          </Tab>
          <Tab label="Edx">
            <Image
              src={MubeenCertificate}
              className={styles.logo}
              alt="Mubeen Certificate"
              width={400}
              height={300}
              objectFit="cover"
            />
          </Tab>
          <Tab label="Udacity">
            <Image
              src={MubeenCertificate}
              className={styles.logo}
              alt="Mubeen Certificate"
              width={400}
              height={300}
              objectFit="cover"
            />
          </Tab>
        </Tabs>
        <Tabs>
          <Tab label="Operable">    <Image
              src={MubeenCertificate}
              className={styles.logo}
              alt="Mubeen Certificate"
              width={400}
              height={300}
              objectFit="cover"
            /></Tab>
          <Tab label="Understandable">dfdsfdsf</Tab>
          <Tab label="Robust">fdsfdsfds</Tab>
        </Tabs>
        <Tabs>
          <Tab label="Operable">    <Image
              src={MubeenCertificate}
              className={styles.logo}
              alt="Mubeen Certificate"
              width={400}
              height={300}
              objectFit="cover"
            /></Tab>
          <Tab label="Understandable">dfdsfdsf</Tab>
          <Tab label="Robust">fdsfdsfds</Tab>
        </Tabs>
      </div>
    </>
  );
};

export default OurCertfications;
