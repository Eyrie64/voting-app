import React, { useState, useEffect } from "react";

const getCandidates = () => [
  {
    positionName: "President",
    positionId: 1,
    candidates: [
      {
        name: "Rihanna",
        id: "1",
        image:
          "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ed6604bdd5d320006caf816%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D697%26cropX2%3D1566%26cropY1%3D8%26cropY2%3D878",
      },
      {
        name: "Beyonce",
        id: "2",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2prsJmZFHwvLp7Up89W8Aj8V13pyJfULcMw&usqp=CAU",
      },
      {
        name: "Gal Gadot",
        id: "3",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKun1UiLMm1tABkKt9rlYviqIJjhOuwJ5urw&usqp=CAU",
      },
    ],
  },
  {
    positionName: "Tresurer",
    positionId: 2,
    candidates: [
      {
        name: "Nicki Minaj",
        id: "1",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8dSc7zmShnydZBTsPbChx-eXawOYveVyQVQ&usqp=CAU",
      },
      {
        name: "Cardi B",
        id: "2",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSrvRIQNKVdrXD8ULNS7DMivBQXw66qbHX3g&usqp=CAU",
      },
      {
        name: "Ariana Grande",
        id: "3",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT05M1pj62FKcJuTVk9s9mNH3GCmZYq92UJxQ&usqp=CAU",
      },
    ],
  },
];

export default function Vote() {
  const [candidates, setCandidates] = useState([]);
  const [currPos, setCurrPos] = useState(0);
  const [myVotes, setMyVotes] = useState({});

  useEffect(() => {
    // Hit API with token and get candidates
    async function fetchData() {
      const c = await getCandidates();
      setCandidates(() => c.slice());
    }
    fetchData();
    console.log(candidates);
    console.log(currPos);
  }, []);

  const handleNext = () => {
    setCurrPos((prevPos) => prevPos + 1);
  };

  const handlePrev = () => {
    setCurrPos((prevPos) => prevPos - 1);
  };

  const handleVote = (event) => {
    console.log(event);
  };

  //   const candidatesList = candidates[currPos].candidates.map((person, i) => (
  //     <div className="col-4" key={i}>
  //       <div className="card" style={{ border: "none" }}>
  //         <img
  //           src={person.image}
  //           className="card-img-top img-fluid rounded"
  //           alt={person.name}
  //           style={{
  //             width: "100%",
  //             height: "20vw",
  //             objectFit: "cover",
  //           }}
  //         />
  //         <div className="card-body text-center">
  //           <h5 className="card-title text-uppercase fw-bold">{person.name}</h5>
  //           <p className="card-text">
  //             <button
  //               type="button"
  //               className="btn btn-primary"
  //               //   onClick={handleVote(person)}
  //             >
  //               Primary
  //             </button>
  //           </p>
  //         </div>
  //       </div>
  //     </div>
  //   ));
  const candidatesList = <h1>Hello, World!</h1>;

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
          <h4 className="text-center">POSITION #1</h4>
        </div>

        <div className="row g-5">{candidatesList}</div>

        <hr style={{ margin: "50" }} />

        <div className="d-flex justify-content-between pb-5">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handlePrev}
          >
            Previous
          </button>

          <button
            type="button"
            className="btn btn-primary"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
