import React, { useEffect } from "react";
import {
  basicSalaryByOccupation,
  calcSalaryByExperienceYears,
  calculateBasicTaxSlab1,
  calculateExtraHighSlab2,
  calculateExtraHighSlab3,
  Calculator,
  City,
  Occupation,
} from "../helper/Calculator";
import "./CalculatorForm.scss";

function CalculatorForm() {
  const [formState, setFormState] = React.useState<Calculator>({
    experienceYears: 0,
    occupation: Occupation.Programmer,
    city: City.Stockholm,
    incomeYear: "2020",
    netSalary: 0,
  });

  useEffect(() => {
    if (formState.experienceYears != 0) calculateNetSalary();
  }, [
    formState.experienceYears,
    formState.occupation,
    formState.city,
    formState.incomeYear,
  ]);

  function changeHandle(evt: { target: { value: string; name: string } }) {
    const value = evt.target.value;
    setFormState({
      ...formState,
      [evt.target.name]: value,
    });
  }

  function calculateNetSalary() {
    const basicSalary = basicSalaryByOccupation(formState.occupation);
    const grossSalary = calcSalaryByExperienceYears(
      basicSalary,
      formState.experienceYears,
    );
    const netSalary =
      grossSalary -
      calculateBasicTaxSlab1(
        grossSalary,
        formState.city,
        formState.incomeYear,
      ) -
      calculateExtraHighSlab2(grossSalary) -
      calculateExtraHighSlab3(grossSalary);

    setFormState({
      ...formState,
      netSalary: netSalary,
    });
  }

  return (
    <div className="form">
      <div className="form-group">
        <label>Years of experience</label>
        <input
          name="experienceYears"
          value={formState.experienceYears}
          onChange={changeHandle}
          type="number"
          min="0"
        />
      </div>
      <div className="form-group">
        <label>Occupation</label>
        <select
          name="occupation"
          value={formState.occupation}
          onChange={changeHandle}
        >
          <option value={0}>Programmer</option>
          <option value={1}>Teacher</option>
          <option value={2}>Cashier</option>
        </select>
      </div>
      <div className="form-group">
        <label>Location/City</label>
        <select name="city" value={formState.city} onChange={changeHandle}>
          <option value={0}>Stockholm</option>
          <option value={1}>Gothenburg</option>
        </select>
      </div>
      <div className="form-group">
        <label>Income Year</label>
        <select
          name="incomeYear"
          value={formState.incomeYear}
          onChange={changeHandle}
        >
          <option>2020</option>
          <option>2019</option>
        </select>
      </div>
      <button onClick={calculateNetSalary}>Calculate Salary</button>
      <h3>
        Net Salary after Tax:
        <span id="calculatedPayroll"> {formState.netSalary}</span>
      </h3>
    </div>
  );
}

export default CalculatorForm;
