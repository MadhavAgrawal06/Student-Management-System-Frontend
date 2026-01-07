import { Link } from "react-router-dom";
function Home(){
    return(

    <div className="d-flex overflow-hidden" style={{minHeight: '91.7vh',  width: '100%',}}>
      
      {/* LEFT SECTION */}
      <div 
        className="d-flex flex-column align-items-center justify-content-center text-white" 
        style={{ width: '32%', backgroundColor: '#72e0b1', padding: '20px' }}
      >
        <div style={{ fontSize: '120px' }}><img src="/students.svg" height="145px" width="145px" alt="" /></div>
        <h1 className="fw-bold text-center mt-3" style={{ fontSize: '3rem' }}>
          Student <br /> Management <br /> System
        </h1>
        
        <button className="btn btn-primary btn-lg mt-3 rounded-pill"><Link className="nav-link" to="/data">Access database</Link></button>
        
      </div>

{/* RIGHT SECTION */}
<div
  className="d-flex flex-column align-items-center justify-content-center"
  style={{
    width: "68%",
    backgroundColor: "#2e364dff",
    padding: "20px",
  }}
>
  {/* Header Section */}
  <div className="mb-3"
    style={{
      width: "100%", 
      maxWidth: "730px", 
      color: "white", 
      fontSize: "20px", 
      fontWeight: "500",
    }}
  >
    Project Overview
  </div>

  {/* Code Block Section */}
  <pre
    style={{
      backgroundColor: "#181b24ff",
      color: "#e5e7eb",
      padding: "20px",
      border:"2px,solid,black",
      borderRadius: "8px",
      width: "100%",
      maxWidth: "730px",
      fontFamily: "monospace",
      fontSize: "14px",
      lineHeight: "1.6",
    }}
  >
{`const developerProfile = {
  name: "Madhav Agrawal",
  role: "Full Stack Developer",
  expertise: ["React", "JavaScript", "Spring Boot", "JDBC", "MySQL"]
};

const projectDetails = {

  title: "Student Management System",
  overview: "A full-stack web application for managing student records efficiently.",
  architecture: {
    hosting: "Multi-Cloud (Netlify + Render)", 
    database: "Railway MySQL", 
    connectivity: "RESTful JDBC", 
    optimization: "Cron-job Keep-Alive"
  },
  features: [
      "Add new student records",
      "Display all students",
      "Search and view individual student details",
      "Update existing student information",
      "Delete student records",
]};`}
  </pre>
</div>

</div>
  );
}

export default Home;