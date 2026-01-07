import React, { useState } from "react";

function Update() {
  const [rollno, setRollno] = useState("");
  const [marks, setMarks] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleUpdate = async () => {
    if (!rollno || !marks) {
      setMessage("Please fill in all fields!");
      setIsError(true);
      return;
    }

    try {
      // Fetch all students
      const res = await fetch(`https://student-management-system-backend-jssl.onrender.com/students`);
      const students = await res.json();

      const student = students.find((s) => s.rollno === parseInt(rollno));

      if (!student) {
        setMessage("Student not found!");
        setIsError(true);
        return;
      }

      // Update marks
      const updateRes = await fetch(
        `https://student-management-system-backend-jssl.onrender.com/${student.rollno}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ marks: parseFloat(marks) }),
        }
      );

      if (!updateRes.ok) {
        setMessage("Error updating student!");
        setIsError(true);
        return;
      }

      setMessage("Student data updated successfully!");
      setIsError(false);
      setRollno("");
      setMarks("");
    } catch (error) {
      console.error(error);
      setMessage("Error updating student!");
      setIsError(true);
    }
  };

  return (
    <div className="container">
      <div
        className="shadow-lg rounded-4 text-center p-5 border border-dark mx-auto"
        style={{ maxWidth: "700px", minHeight: "400px", marginTop: "80px" }}
      >
        <h1 className="text-primary fw-bold">Update Details</h1>

        <div className="row align-items-center mt-5" style={{ fontSize: "18px" }}>
          <div className="col-5">
            <label htmlFor="roll" className="col-form-label">
              Enter Student Roll No:
            </label>
          </div>
          <div className="col-7">
            <input
              type="number"
              id="roll"
              className="form-control"
              value={rollno}
              onChange={(e) => setRollno(e.target.value)}
            />
          </div>

          <div className="col-5 mt-4">
            <label htmlFor="marks" className="col-form-label">
              Marks(1-100) to Update:
            </label>
          </div>
          <div className="col-7 mt-4">
            <input
              type="number"
              id="marks"
              className="form-control"
              value={marks}
              onChange={(e) => setMarks(e.target.value)}
            />
          </div>

          <div className="col-12 text-center mt-4">
            <button className="btn btn-primary" onClick={handleUpdate}>
              Update
            </button>
          </div>

          {message && (
            <div
              className={`mt-5 fw-bold ${isError ? "text-danger" : "text-success"}`}
            >
              {message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Update;
