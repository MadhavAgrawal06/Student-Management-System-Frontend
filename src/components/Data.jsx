import { useNavigate } from "react-router-dom";

function Data() {
  const navigate = useNavigate();
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center"
      style={{
        minHeight: '91vh',           
        width: '100%',
        padding: '20px',
        backgroundImage: 'url("/bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Content container */}
      <div style={{ width: '100%', maxWidth: '600px' }}>
        <h1 className="fw-bold mb-4 text-dark text-center">
          Student's Data
        </h1>

        {/* Buttons */}
        <div className="d-flex flex-column" style={{ gap: '30px' }}>
          
          <div className="d-flex align-items-center">
            <img src="/show.svg" height="55" width="55" alt="show" />
            <button className="btn btn-info text-dark flex-grow-1 py-3 mx-3 fw-bold rounded-pill shadow-sm" onClick={()=>navigate("/ShowAll")}>
              Show All Students Details
            </button>
          </div>

          <div className="d-flex align-items-center">
            <img src="/find.svg" height="55" width="55" alt="find" />
            <button className="btn btn-info text-dark flex-grow-1 py-3 mx-3 fw-bold rounded-pill shadow-sm"
                    onClick={()=>navigate("/ShowOne")}>
              Search Student Details
            </button>
          </div>

          <div className="d-flex align-items-center">
            <img src="/insert.svg" height="55" width="55" alt="insert" />
            <button className="btn btn-info text-dark flex-grow-1 py-3 mx-3 fw-bold rounded-pill shadow-sm"
                    onClick={()=>navigate("/Add")}>
              Add New Student Details
            </button>
          </div>

          <div className="d-flex align-items-center">
            <img src="/update.svg" height="55" width="55" alt="update" />
            <button className="btn btn-info text-dark flex-grow-1 py-3 mx-3 fw-bold rounded-pill shadow-sm"onClick={()=>navigate("/Update")}>
              Update Student Details
            </button>
          </div>

          <div className="d-flex align-items-center">
            <img src="/delete.svg" height="55" width="55" alt="delete" />
            <button className="btn btn-info text-dark flex-grow-1 py-3 mx-3 fw-bold rounded-pill shadow-sm"onClick={()=>navigate("/Delete")}>
              Delete Student 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data;
