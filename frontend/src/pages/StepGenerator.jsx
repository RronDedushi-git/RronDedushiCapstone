import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useApi from "../hooks/useApi";

export default function StepGenerator() {
  const { categoryId } = useParams();
  const api = useApi();
  const [step, setStep] = useState(null);

  async function fetchRandomStep() {
    const data = await api.get(`/steps/random?categoryId=${categoryId}`);
    setStep(data);
  }

  useEffect(() => {
    fetchRandomStep();
  }, [categoryId]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Today’s 1% Better Step</h1>

      {step ? (
        <div style={{ marginTop: "20px" }}>
          <p>{step.text}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <button onClick={fetchRandomStep} style={{ marginTop: "20px" }}>
        Give me another
      </button>
    </div>
  );
}
