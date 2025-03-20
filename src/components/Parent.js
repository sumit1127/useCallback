import { useState, useCallback } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

const Parent = () => {
  const [age, setAge] = useState(20);
  const [salary, setSalary] = useState(25000);

  const IncrementAge = useCallback(() => {
    setAge((prev) => prev + 1);
  }, [age]);

  const IncrementSalary = useCallback(() => {
    setSalary((prev) => prev + 1000);
  }, [salary]);

  return (
    <>
      <Title />
      <Count count={age} text="Age" />
      <Button handleClick={IncrementAge}>Increment Age</Button>
      <Count count={salary} text="Salary" />
      <Button handleClick={IncrementSalary}>Increment Salary</Button>
    </>
  );
};

export default Parent;
