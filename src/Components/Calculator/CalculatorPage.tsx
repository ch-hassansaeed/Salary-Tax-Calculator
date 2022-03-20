import "./CalculatorPage.scss";
import CalculatorForm from "./CalculatorForm/CalculatorForm";

function CalculatorPage() {
  return (
    <div className="main-panel">
      <h1>Salary Tax Calculator</h1>
      <CalculatorForm />
    </div>
  );
}

export default CalculatorPage;
