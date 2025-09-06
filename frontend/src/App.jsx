import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import QuizList from "./pages/QuizList";
import AddQuiz from "./pages/AddQuiz";
import EditQuiz from "./pages/EditQuiz";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/quizzes" element={<QuizList />} />
        <Route path="/quizzes/add" element={<AddQuiz />} />
        <Route path="/quizzes/edit/:id" element={<EditQuiz />} />
      </Routes>
    </div>
  );
}

