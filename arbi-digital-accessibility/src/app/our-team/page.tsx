import TeamCard from "../components/TeamCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | Arbi Digital Accessibility",
  description:
    "Meet the dedicated team behind Arbi Digital Accessibility, working together to build inclusive, user-centered, and accessible digital experiences.",
};

export default function TeamPage() {
  return (
    <>
      {" "}
      <div className="text-center" style={{ marginBottom: "2rem" }}>
        <h1
          className="text-center largeHeading"
          style={{ marginBottom: "1rem" }}
        >
          Meet Our Team Members
        </h1>
        <p className="plainText">
          We are a small team of six passionate professionals working together
          to build inclusive and accessible digital experiences.
        </p>
      </div>
      {/* Team Grid */}
      <TeamCard />


    </>
  );
}
