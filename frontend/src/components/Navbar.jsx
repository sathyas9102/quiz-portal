import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="font-bold text-xl">Quiz Portal</h1>
      <div className="space-x-4">
        <h2 className="text-2xl font-bold mb-4">My Dashboard</h2>

        <Link to="/">Dashboard</Link>
        <Link to="/quizzes">Quizzes</Link>
        <Link to="/quizzes/add">Add Quiz</Link>
      </div>
    </nav>
  );
}
