import React, { useState } from "react";

function ShowOne() {
  const [rollno, setRollno] = useState("");
  const [student, setStudent] = useState(null);
  const [message, setMessage] = useState("");

  const handleSearch = async () => {
    setMessage("");
    setStudent(null);

    try {
      const response = await fetch(`http://localhost:8080/students/${rollno}`);

      // Get raw text first (safe even if backend returns empty or non-JSON)
      const text = await response.text();

      if (!text) {
        setMessage("Student not found!");
        return;
      }

      // Parse JSON only if text exists
      const data = JSON.parse(text);

      setStudent(data);
      setMessage("");
    } catch (error) {
      console.error(error);
      setMessage("Error fetching student!");
      setStudent(null);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="container">
      <div
        className="shadow-lg rounded-4 p-5 border border-dark mx-auto"
        style={{ maxWidth: "700px", minHeight: "300px", marginTop: "80px" }}
      >
        <h1 className="text-primary fw-bold text-center">
          Search Student Details
        </h1>

        {/* Search Input */}
        <div className="row justify-content-center mt-5">
          <div className="col-md-10">
            <div className="input-group">
              <span className="input-group-text fw-bold">
                Enter Roll No.
              </span>
              <input
                type="text"
                className="form-control"
                value={rollno}
                onChange={(e) => setRollno(e.target.value)}
                onKeyDown={handleKeyDown}
                required
              />
              <button
                className="btn btn-primary"
                onClick={handleSearch}
                disabled={!rollno}
              >
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {message && (
          <div className="mt-4 text-center text-danger fw-bold">{message}</div>
        )}

        {student && (
          <div className="row justify-content-center mt-5">
            <div className="col-8">
              <div className="card shadow-sm" style={{ maxWidth: "400px" }}>
                <div className="card-header bg-primary text-white text-center fw-bold">
                  Student Details
                </div>
                <div className="card-body">
                  <p className="card-text">
                    <strong>Roll No:</strong> {student.rollno}
                  </p>
                  <p className="card-text">
                    <strong>Name:</strong> {student.name}
                  </p>
                  <p className="card-text">
                    <strong>Age:</strong> {student.age}
                  </p>
                  <p className="card-text">
                    <strong>Marks:</strong> {student.marks}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default ShowOne;
