import CourseGoals from "./CourseGoals";
import { type CourseGoalsProps as CGoal } from "./CourseGoals";

interface CourseGoalsListProps {
  goals: CGoal[];
}

export default function CourseGoalsList({ goals }: CourseGoalsListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoals title={goal.title}>
            <p>{goal.description}</p>
          </CourseGoals>
        </li>
      ))}
    </ul>
  );
}
