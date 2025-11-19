import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useApi from "../hooks/useApi";

export default function StepGenerator() {
  const { categoryId } = useParams();
  const { get } = useApi();
  const [step, setStep] = useState(null);

  async function fetchRandomStep() {
    const data = await get(`/steps/random?categoryId=${categoryId}`);
    setStep(data);
  }

  useEffect(() => {
    fetchRandomStep();
  }, [categoryId]);

  return (
    <div className="step-container">
      <h2 className="step-title">Today's 1% Better Step</h2>

      <div className="step-card">{step ? step.text : "Loading..."}</div>

      <button className="button step-button" onClick={fetchRandomStep}>
        Give me another
      </button>
    </div>
  );
}
