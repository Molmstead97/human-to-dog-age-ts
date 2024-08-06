import React, { useState, ChangeEvent, FormEvent } from "react";

const HumanToDogAgeCalculator: React.FC = () => {
  const [humanAge, setHumanAge] = useState<string>("");
  const [dogAge, setDogAge] = useState<number | null>(null);

  const calculateDogAge = (age: number): number => {
    if (age <= 2) {
      return age * 10.5;
    } else {
      return 21 + (age - 2) * 4;
    }
  };

  const updateDogAge = (inputAge: string) => {
    const parsedAge = parseFloat(inputAge);
    if (!isNaN(parsedAge) && parsedAge >= 0) {
      const calculatedDogAge = calculateDogAge(parsedAge);
      setDogAge(Math.round(calculatedDogAge * 10) / 10); // Round to 1 decimal place
    } else {
      setDogAge(null);
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputAge = event.target.value;
    setHumanAge(inputAge);
    updateDogAge(inputAge);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateDogAge(humanAge);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Human to Dog Age Calculator</h1>
          <label htmlFor="humanAge">Enter human age in years: </label>
          <input
            type="number"
            id="humanAge"
            value={humanAge}
            onChange={handleInputChange}
            min="0"
            step="0.1"
          />
        </div>
      </form>
      {dogAge !== null &&
        `A ${humanAge} year old is approximately ${dogAge} in dog years.`}
    </div>
  );
};

export default HumanToDogAgeCalculator;
