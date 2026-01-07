import React, { useEffect, useState } from "react";

export default function ShowAll() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/students") // Your Spring Boot backend URL
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching students:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading students...</p>;

  return (
    <div className="container">
      <h2 className="mt-5 mb-4 text-center">Students Details</h2>
      <div className="d-flex justify-content-center">
      <table className="table table-success table-bordered table-hover table-striped" style={{maxWidth:"1200px"}}>
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.rollno}>
              <td>{s.rollno}</td>
              <td>{s.name}</td>
              <td>{s.age}</td>
              <td>{s.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

