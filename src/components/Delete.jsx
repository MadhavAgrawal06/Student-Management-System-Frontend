import React, { useState } from "react";

function Delete() {
  const [rollno, setRollno] = useState("");
  const [message, setMessage] = useState("");

  // Allow only numbers
  const handleChange = (e) => {
    const value = e.target.value;
    setRollno(value);
  };

  // Handle Enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleDelete();
    }
  };

  const handleDelete = async () => {
    if (!rollno) {
      setMessage("Please enter a roll number!");
      return;
    }

    try {
      // Fetch all students first
      const res = await fetch(`http://localhost:8080/students`);
      const students = await res.json();

      // Find student by roll number
      const student = students.find((s) => s.rollno === parseInt(rollno));

      if (!student) {
        setMessage("Student not found!");
        return;
      }

      // Confirm before deleting
      const confirmDelete = window.confirm(
        `Are you sure you want to delete student with roll no. ${rollno}?`
      );
      if (!confirmDelete) return;

      // Call DELETE API
      const deleteRes = await fetch(
        `http://localhost:8080/students/${rollno}`,
        { method: "DELETE" }
      );

      if (!deleteRes.ok) {
        setMessage("Error deleting student!");
        return;
      }

      setMessage("Student data deleted successfully!");
      setRollno("");
    } catch (error) {
      console.error(error);
      setMessage("Error deleting student!");
    }
  };

  return (
    <div className="container">
      <div
        className="shadow-lg rounded-4 text-center p-5 border border-dark mx-auto"
        style={{ maxWidth: "700px", minHeight: "300px", marginTop: "80px" }}
      >
        <h1 className="text-primary fw-bold">Delete Student</h1>

        <div
          className="row align-items-center justify-content-center mt-5"
          style={{ fontSize: "18px" }}
        >
          <div className="col-4">
            <label htmlFor="rollno" className="col-form-label">
              Enter Student Roll No.
            </label>
          </div>
          <div className="col-6">
            <input
              type="number"
              id="rollno"
              className="form-control"
              value={rollno}
              onChange={handleChange} // only numbers
              onKeyDown={handleKeyDown} // Enter key
            />
          </div>

          <div className="col-2 ">
            <button className="btn btn-primary" onClick={handleDelete}>
              Delete
            </button>
          </div>

          {message && (
            <div className="col-12 mt-5 text-success fw-bold">{message}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Delete;
