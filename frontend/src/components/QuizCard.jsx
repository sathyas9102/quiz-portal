export default function QuizCard({ quiz }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <h3 className="font-bold text-lg">{quiz.title}</h3>
      <p className="text-gray-400">{quiz.description}</p>
    </div>
  );
}
