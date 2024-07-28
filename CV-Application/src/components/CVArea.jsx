import "../styles/CVArea.css";
import phoneSVG from "../assets/phone.svg";
import mailSVG from "../assets/mail.svg";
import schoolSVG from "../assets/school.svg";
import collegeSVG from "../assets/college.svg";
import courseSVG from "../assets/course.svg";
import companySVG from "../assets/company.svg";
import positionSVG from "../assets/position.svg";
import yoeSVG from "../assets/yoe.svg";
export default function CVArea({
  name,
  email,
  phNumber,
  schoolName,
  collegeName,
  courseName,
  companyName,
  positionName,
  yoe,
}) {
  return (
    <div className="CVArea">
      <div className="CVMain">
        <div className="CVHeader">
          <div className="nameHolder">
            <h1>{name}</h1>
          </div>
          <div className="contactHolder">
            <div className="emailHolder">
              <img src={mailSVG} height="35px" width="35px"></img>
              {email}
            </div>
            <div className="phoneNumberHolder">
              <img src={phoneSVG} height="35px" width="35px"></img>
              {phNumber}
            </div>
          </div>
        </div>
        <div className="CVBody">
          <h2 className="heading">Education</h2>
          <div className="credentialsHolder">
            <div className="imgTextContainer">
              <img src={schoolSVG} height="35px" width="35px"></img>
              <h3 style={{ paddingTop: "10px" }}>School</h3>
            </div>
            <h3 className="name">{schoolName}</h3>
          </div>
          <div className="credentialsHolder">
            <div className="imgTextContainer">
              <img src={collegeSVG} height="35px" width="35px"></img>
              <h3 style={{ paddingTop: "10px" }}>College</h3>
            </div>
            <h3 className="name">{collegeName}</h3>
          </div>
          <div className="credentialsHolder">
            <div className="imgTextContainer">
              <img src={courseSVG} height="35px" width="35px"></img>
              <h3 style={{ paddingTop: "10px" }}>Course</h3>
            </div>
            <h3 className="name">{courseName}</h3>
          </div>
          <h2 className="heading">Job Experience</h2>
          <div className="credentialsHolder">
            <div className="imgTextContainer">
              <img src={companySVG} height="35px" width="35px"></img>
              <h3 style={{ paddingTop: "10px" }}>Company</h3>
            </div>
            <h3 className="name">{companyName}</h3>
          </div>
          <div className="credentialsHolder">
            <div className="imgTextContainer">
              <img src={positionSVG} height="35px" width="35px"></img>
              <h3 style={{ paddingTop: "10px" }}>Position</h3>
            </div>
            <h3 className="name">{positionName}</h3>
          </div>
          <div className="credentialsHolder">
            <div className="imgTextContainer">
              <img src={yoeSVG} height="35px" width="35px"></img>
              <h3 style={{ paddingTop: "10px" }}>Years Of Experience</h3>
            </div>
            <h3 className="name">{yoe}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
