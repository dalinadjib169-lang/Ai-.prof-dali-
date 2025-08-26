import { useState } from "react";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt }),
    });
    const data = await res.json();
    setResponse(data.result);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-blue-200">
        <h1 className="text-2xl font-bold">Prof Dali Nadjib</h1>
        <select className="p-2 rounded border">
          <option>AR</option>
          <option>FR</option>
          <option>EN</option>
        </select>
      </header>

      {/* Main Dashboard */}
      <main className="p-6 grid grid-cols-2 gap-6 md:grid-cols-4">
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center">
          <span className="text-4xl">📚</span>
          <p className="mt-2 font-semibold">الدروس</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center">
          <span className="text-4xl">📝</span>
          <p className="mt-2 font-semibold">الاختبارات</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center">
          <span className="text-4xl">🎒</span>
          <p className="mt-2 font-semibold">المذكرات</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center">
          <span className="text-4xl">👩‍🏫</span>
          <p className="mt-2 font-semibold">نصائح الأستاذ</p>
        </div>
      </main>

      {/* OpenAI Chat Section */}
      <section className="p-6">
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="اكتب سؤالك هنا..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="flex-1 p-3 border rounded"
          />
          <button type="submit" className="bg-blue-400 text-white p-3 rounded hover:bg-blue-500">
            أرسل
          </button>
        </form>
        {response && (
          <div className="mt-4 p-4 bg-white rounded shadow">{response}</div>
        )}
      </section>

      {/* Footer */}
      <footer className="p-4 bg-blue-300 text-center text-white">
        © 2025 Prof Dali Nadjib
      </footer>
    </div>
  );
}
