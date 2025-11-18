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
    <div>
      <h1>Today’s 1% Better Step</h1>

      {step ? (
        <div style={{ marginTop: "20px" }}>
          <p>{step.text}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <button onClick={fetchRandomStep}>Give me another</button>
    </div>
  );
}
