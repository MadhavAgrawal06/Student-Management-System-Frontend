import { useState } from "react";

function Add() {
  const [error, setError] = useState("");
  const [student, setStudent] = useState({
    rollno: "",
    name: "",
    age: "",
    marks: ""
  });

  const [message, setMessage] = useState("");

  // handle input change
  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  // handle form submit
const handleSubmit = async (e) => {
  e.preventDefault();
  setMessage("");
  setError("");

  try {
    const response = await fetch("https://student-management-system-backend-jssl.onrender.com/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        rollno: Number(student.rollno),
        name: student.name,
        age: Number(student.age),
        marks: Number(student.marks)
      })
    });

    if (!response.ok) {
      throw new Error("Student already exists or server error");
    }

    setMessage("Student data added successfully!");
    setStudent({ rollno: "", name: "", age: "", marks: "" });

  } catch (err) {
    setError(err.message);
  }
};



  return (
    <div className="container">
      <div
        className="shadow-lg rounded-4 p-5 border border-dark mx-auto"
        style={{ maxWidth: "700px", minHeight: "420px", marginTop: "80px" }}
      >
        <h1 className="text-primary fw-bold text-center">
          Details of Student
        </h1>

        <form className="row g-3 m-3" onSubmit={handleSubmit}>

          <div className="mx-3 col-md-5">
            <label htmlFor="rollno" className="form-label">Roll No.</label>
            <input
              type="number"
              className="form-control"
              name="rollno"
              value={student.rollno}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mx-3 col-md-5">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={student.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mx-3 col-md-5">
            <label htmlFor="marks" className="form-label">Marks(1-100)</label>
            <input
              type="number"
              className="form-control"
              name="marks"
              value={student.marks}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mx-3 col-md-5">
            <label htmlFor="age" className="form-label">Age</label>
            <input
              type="number"
              className="form-control"
              name="age"
              value={student.age}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-12 text-center mt-4">
            <button className="btn btn-primary">Add</button>
          </div>

          {message && (
            <div className="mt-4 text-center text-success fw-bold">
              {message}
            </div>
          )}

          {error && (
            <div className="mt-3 text-center text-danger fw-bold">
              {error}
            </div>
          )}


        </form>
      </div>
    </div>
  );
}

export default Add;
