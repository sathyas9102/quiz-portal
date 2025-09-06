import Navbar from "../components/Navbar";
import QuizCard from "../components/QuizCard";

const sampleQuizzes = [
  { id: 1, title: "React Basics", description: "Introductory React quiz" },
  { id: 2, title: "JavaScript", description: "Test your JS skills" },
];

export default function QuizList() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {sampleQuizzes.map((quiz) => (
        <QuizCard key={quiz.id} quiz={quiz} />
      ))}
    </div>
  );
}
