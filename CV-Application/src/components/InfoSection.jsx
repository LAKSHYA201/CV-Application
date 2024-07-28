import "../styles/InfoSection.css";
import "../styles/CVArea.css";
export default function InfoSection({
  name,
  setName,
  email,
  setEmail,
  phNumber,
  setPhNumber,
  schoolName,
  setSchoolName,
  collegeName,
  setCollegeName,
  courseName,
  setCourseName,
  companyName,
  setCompanyName,
  positionName,
  setPositionName,
  yoe,
  setYoe,
}) {
  return (
    <div className="InfoSection">
      <section>
        <h2>General</h2>
        <h4>Name</h4>
        <input
          type="text"
          placeholder="Enter Your Name..."
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <h4>E-Mail</h4>
        <input
          type="email"
          placeholder="E-Mail..."
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <h4>Phone Number</h4>
        <input
          type="number"
          onChange={(e) => {
            setPhNumber(e.target.value);
          }}
        ></input>
      </section>
      <section>
        <h2>Educational Experience</h2>
        <h4>School Name</h4>
        <input
          type="text"
          placeholder="School Name..."
          onChange={(e) => {
            setSchoolName(e.target.value);
          }}
        ></input>
        <h4>College Name</h4>
        <input
          type="text"
          placeholder="College Name..."
          onChange={(e) => setCollegeName(e.target.value)}
        ></input>
        <h4>Course Pursued</h4>
        <input
          type="text"
          placeholder="Course Name..."
          onChange={(e) => setCourseName(e.target.value)}
        ></input>
      </section>
      <section>
        <h2>Job Experience</h2>
        <h4>Company Name</h4>
        <input
          type="text"
          placeholder="Company Name..."
          onChange={(e) => setCompanyName(e.target.value)}
        ></input>
        <h4>Position Title</h4>
        <input
          type="text"
          placeholder="Position Title..."
          onChange={(e) => setPositionName(e.target.value)}
        ></input>
        <h4>Years of Experience</h4>
        <input type="number" onChange={(e) => setYoe(e.target.value)}></input>
      </section>
    </div>
  );
}
