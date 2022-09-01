import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import QuizPage from "./QuizPage";
import Img from "../images/states.png"
function LandingDisplay() {
  const navigate = useNavigate();
  const onSumbit = async () =>{
    navigate(`test`)
  }
  return (
    <>
    <div className="d-flex justify-content-center mb-4 mt-4">
     <img className='img-thumbnail rounded' src={Img} alt="map" style={{ maxWidth: 1000, height: 500}}/>
     </div>
     <div className="d-flex justify-content-center mb-4 mt-4">
        <h2>How well do you know your State Capitals?</h2>
    </div>
     <div className="d-flex justify-content-center mb-4">
      <h5>Take a Quiz!</h5>
      </div>
      <div className="d-flex justify-content-center mb-4 mt-4">
      <Button variant="outline-success" type="submit" onClick={onSumbit}>
        Here
      </Button>
      </div>
    </>
  );
}
export default LandingDisplay;
