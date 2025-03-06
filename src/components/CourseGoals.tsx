import { FC, useState } from "react";
import CourseGoalsList from "./CourseGoalsList";

export interface CourseGoalsProps {
  title: string;
  description: string;
  id: number;
}

const CourseGoals: FC<CourseGoalsProps> = ({ title, description }) => {
  const [goals, setGoals] = useState<CourseGoalsProps[]>([]);

  const handleAddGoals = () => {
    setGoals((prevGoals) => {
      const newGoal: CourseGoalsProps = {
        id: Math.random(),
        title: "Test 1",
        description: "Testing 1",
      };
      return [...prevGoals, newGoal];
    });
  };
  return (
    <article>
      <button onClick={handleAddGoals}>Delete</button>
      <CourseGoalsList goals={goals} />
    </article>
  );
};

export default CourseGoals;
