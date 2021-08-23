import React, { useState, useEffect } from "react";
import data from "./candidates.json";

export default function Vote() {
  const [candidates, setCandidates] = useState([...data]);
  const [currPos, setCurrPos] = useState(0);
  const [votes, setVotes] = useState({});

  useEffect(() => {
    // Hit API with token and get candidates
    console.log(candidates);
  }, []);

  const handleNext = () => {
    setCurrPos((prevPos) => prevPos + 1);
  };

  const handlePrev = () => {
    setCurrPos((prevPos) => prevPos - 1);
  };

  const handleVote = (selection) => {
    const newVote = {};
    newVote[candidates[currPos].positionId] = selection;
    setVotes((oldVotes) => {
      return { ...oldVotes, ...newVote };
    });
  };

  useEffect(() => {
    console.log("votes changed", votes);
  }, [votes]);

  const candidatesList = candidates
    ? candidates[currPos].candidates.map((person, i) => (
        <div className="col-4" key={i}>
          <div className="card" style={{ border: "none" }}>
            <img
              src={person.image}
              className="card-img-top img-fluid rounded"
              alt={person.name}
              style={{
                width: "100%",
                height: "20vw",
                objectFit: "cover",
              }}
            />
            <div className="card-body text-center">
              <h5 className="card-title text-uppercase fw-bold">
                {person.name}
              </h5>
              <p className="card-text">
                <button
                  type="button"
                  className={`btn btn-${
                    votes[candidates[currPos].positionId] &&
                    votes[candidates[currPos].positionId].id === person.id
                      ? "primary"
                      : "secondary"
                  }`}
                  onClick={() => handleVote(person)}
                >
                  {votes[candidates[currPos].positionId] &&
                  votes[candidates[currPos].positionId].id === person.id
                    ? "Selected"
                    : "Select"}
                </button>
              </p>
            </div>
          </div>
        </div>
      ))
    : null;

  return (
    <>
      <nav className="navbar navbar-light bg-light shadow-sm">
        <div className="container-fluid d-flex justify-content-center">
          <h3 className="brand my-2">
            <span>PENT</span>VOTER
          </h3>
        </div>
      </nav>

      <div className="container">
        <div className="py-5">
          <h4 className="text-center text-muted">ELECTION TITLE</h4>
          <h4 className="text-center text-uppercase">
            {candidates[currPos].positionName || "positon"}
          </h4>
        </div>

        <div className="row g-5" style={{ marginBottom: "50px" }}>
          {candidatesList}
        </div>

        <hr />

        <div className="d-flex justify-content-between pb-5">
          <button type="button" className="btn btn-light" onClick={handlePrev}>
            Previous
          </button>

          <button type="button" className="btn btn-light" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}
