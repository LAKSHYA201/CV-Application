import "../styles/InfoSection.css";
export default function InfoSection() {
  return (
    <div className="InfoSection">
      <section>
        <h2>General</h2>
        <h4>Name</h4>
        <input type="text" placeholder="Enter Your Name..."></input>
        <h4>E-Mail</h4>
        <input type="email" placeholder="E-Mail..."></input>
        <h4>Phone Number</h4>
        <input type="number"></input>
      </section>
      <section>
        <h2>Educational Experience</h2>
        <h4>School Name</h4>
        <input type="text" placeholder="School Name..."></input>
        <h4>College Name</h4>
        <input type="text" placeholder="College Name..."></input>
        <h4>Course Pursued</h4>
        <input type="text" placeholder="Course Name..."></input>
      </section>
      <section>
        <h2>Job Experience</h2>
        <h4>Company Name</h4>
        <input type="text" placeholder="Company Name..."></input>
        <h4>Position Title</h4>
        <input type="text" placeholder="Position Title..."></input>
        <h4>Years of Experience</h4>
        <input type="number"></input>
      </section>
    </div>
  );
}
