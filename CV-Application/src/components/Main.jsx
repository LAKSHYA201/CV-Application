import "../styles/Main.css";
import { useState } from "react";
import InfoSection from "./InfoSection";
import CVArea from "./CVArea";

export default function Main() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phNumber, setPhNumber] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [courseName, setCourseName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [positionName, setPositionName] = useState("");
  const [yoe, setYoe] = useState("");
  return (
    <div className="main">
      <InfoSection
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        phNumber={phNumber}
        setPhNumber={setPhNumber}
        schoolName={schoolName}
        setSchoolName={setSchoolName}
        collegeName={collegeName}
        setCollegeName={setCollegeName}
        courseName={courseName}
        setCourseName={setCourseName}
        companyName={companyName}
        setCompanyName={setCompanyName}
        positionName={positionName}
        setPositionName={setPositionName}
        yoe={yoe}
        setYoe={setYoe}
      />
      <CVArea
        name={name}
        email={email}
        phNumber={phNumber}
        schoolName={schoolName}
        collegeName={collegeName}
        courseName={courseName}
        companyName={companyName}
        positionName={positionName}
        yoe={yoe}
      />
    </div>
  );
}
