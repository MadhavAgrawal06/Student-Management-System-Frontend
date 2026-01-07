
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
      </div>

{/* RIGHT SECTION */}
<div
  className="d-flex align-items-center justify-content-center"
  style={{
    width: "68%",
    backgroundColor: "#2e364dff",
    padding: "20px",
  }}
>
  <pre
    style={{
      backgroundColor: "#181b24ff",
      color: "#e5e7eb",
      padding: "20px",
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
      client: "React-based responsive frontend",
      apiLayer: "Spring Boot REST APIs",
      dataAccess: "JDBC (DriverManager, PreparedStatement)",
      persistence: "MySQL relational database"
  },
  features: [
      "Add new student records",
      "Display all students",
      "Search and view individual student details",
      "Update existing student information",
      "Delete student records",
      "Fully responsive user interface"
  ]
`}
  </pre>
</div>

</div>
  );
}

export default Home;