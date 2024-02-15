import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  function handlePrevious() {
    if (step > 1) setStep(step - 1);
  }

  function handleNext() {
    if (step < 3) {
      // setStep(step + 1);
      // setStep((s) => s + 1);
      setStep((s) => s + 1);
    }
  }

  function handlePlusStep() {
    setNumber(number + 1);
  }

  function handleMinusStep() {
    if (number >= 1) setNumber(number - 1);
  }

  function handlePlusCount() {
    setCount(count + 1 * number);
  }

  function handleMinusCount() {
    if (number >= 1) setCount(count - 1 * number);
  }

  const date = new Date("June 21 2002");
  date.setDate(date.getDate() + count);

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={() => handlePrevious()}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={() => handleNext()}
            >
              Next
            </button>
          </div>
        </div>
      )}

      <div className="number">
        <div>
          <button onClick={() => handleMinusStep()}>-</button>
          Step: {number}
          <button onClick={() => handlePlusStep()}>+</button>
        </div>
        <div>
          <button onClick={() => handleMinusCount()}>-</button>
          Count: {count}
          <button onClick={() => handlePlusCount()}>+</button>
        </div>
        <p>
          <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${count} days ago was `}
          </span>
          <span>{date.toDateString()}</span>
        </p>
      </div>
    </>
  );
}
