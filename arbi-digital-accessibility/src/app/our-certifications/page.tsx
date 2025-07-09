import React from "react";
import styles from "../styles/components/CustomCard.module.scss";
import Link from "next/link";
import SliderCarousel from "../components/SliderCarousel";
import { employees } from "../data/certificates";

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
        certification to ensure accessibility expertise. if you are interested in
        becoming CPACC certified.
        <Link href="/cpacc-exam-guidelines" className="link-color-blue">
          Click here
        </Link>{" "}
      </div>
       <div
        className={`grid grid-cols-3 gap-8 ${styles.ourCertficationsWrapper}`}
      >
        {employees.map((emp, index) => (
          <SliderCarousel
            key={index}
            employeeName={emp.name}
            certificates={emp.certificates}
          />
        ))}
      </div>

      {/* <div
        className={`grid grid-cols-3 gap-8 ${styles.ourCertficationsWrapper}`}
      >
        <div
          tabIndex={0}
          role="group"
          aria-label="Muhammad Sami Ullah CPACC Certifications"
        >
          <Card
            title="Muhammad Sami Ullah"
            imageSrc={SamiCPACC}
            imageAlt="Completed CPACC Certificate"
          />
        </div>
        <div
          tabIndex={0}
          role="group"
          aria-label="Muhammad Sami Ullah Section 508 Certifications"
        >
          <Card
            title="Muhammad Sami Ullah"
            imageSrc={SamiSection508}
            imageAlt="Completed Section 508 Certificate"
          />
        </div>

        <div
          tabIndex={0}
          role="group"
          aria-label="Muhammad Sami Ullah DHS MS Word Certifications"
        >
          <Card
            title="Muhammad Sami Ullah"
            imageSrc={SamiMsWord}
            imageAlt="Completed DHS MS Word Certification"
          />
        </div>

        <div
          tabIndex={0}
          role="group"
          aria-label="Qasim Imran Section 508 Certifications"
        >
          <Card
            title="Qasim Imran"
            imageSrc={QasimSection508}
            imageAlt="Completed Section 508 Certificate"
          />
        </div>
        <div
          tabIndex={0}
          role="group"
          aria-label="Qasim Imran DHS MS Word Certifications"
        >
          <Card
            title="Qasim Imran"
            imageSrc={QasimMsWord}
            imageAlt="Completed DHS MS Word Certification"
          />
        </div>

        <div
          tabIndex={0}
          role="group"
          aria-label="Qasim Imran DHS MS Word Certifications"
        >
          <Card
            title="Qasim Imran"
            imageSrc={QasimPDF}
            imageAlt="Completed DHS PDF Certification"
          />
        </div>

        <div
          tabIndex={0}
          role="group"
          aria-label="Jamil Hussain Section 508 Certifications"
        >
          <Card
            title="Jamil Hussain"
            imageSrc={JamilSection508}
            imageAlt="Completed Section 508 Certificate"
          />
        </div>

        <div
          tabIndex={0}
          role="group"
          aria-label="Jamil Hussain DHS MS Word Certifications"
        >
          <Card
            title="Jamil Hussain"
            imageSrc={JamilWord}
            imageAlt="Completed DHS MS Word Certifications"
          />
        </div>
        <div
          tabIndex={0}
          role="group"
          aria-label="Mubeen Fayyaz Section 508 Certifications"
        >
          <Card
            title="Mubeen Fayyaz"
            imageSrc={MubeenSection508}
            imageAlt="Completed Section 508 Certificate"
          />
        </div>

        <div
          tabIndex={0}
          role="group"
          aria-label="Ahmad Hassan Section 508 Certifications"
        >
          <Card
            title="Ahmad Hassan"
            imageSrc={AhmedSection508}
            imageAlt="Completed Section 508 Certificate"
          />
        </div>
        <div
          tabIndex={0}
          role="group"
          aria-label="Iqra Ejaz Section 508 Certifications"
        >
          <Card
            title="Iqra Ejaz"
            imageSrc={IqraSection508}
            imageAlt="Completed Section 508 Certificate"
          />
        </div>

        <div
          tabIndex={0}
          role="group"
          aria-label="Tanveer Khan Section 508 Certifications"
        >
          <Card
            title="Tanveer Khan"
            imageSrc={TanveerSection508}
            imageAlt="Completed Section 508 Certificate"
          />
        </div>

        <div
          tabIndex={0}
          role="group"
          aria-label="Tanveer Khan DHS MS Word Certifications"
        >
          <Card
            title="Tanveer Khan"
            imageSrc={TanveerMsWord}
            imageAlt="Completed DHS MS Word Certifications"
          />
        </div>
      </div> */}
    </>
  );
};

export default OurCertfications;
