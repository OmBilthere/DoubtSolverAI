import { useEffect, useState } from "react";
import { databases, DB_ID, COLLECTION_ID } from "../service/appwrite";

function HistoryPage() {
  const [history, setHistory] = useState([]);

  // Fetch all history
  const getHistory = async () => {
    try {
      const res = await databases.listDocuments(DB_ID, COLLECTION_ID);
      setHistory(res.documents.reverse());
    } catch (err) {
      console.error("Error fetching history:", err);
    }
  };

  // Delete single record
  const handleDelete = async (id) => {
    try {
      await databases.deleteDocument(DB_ID, COLLECTION_ID, id);
      setHistory((prev) => prev.filter((item) => item.$id !== id));
    } catch (err) {
      console.error("Delete Error:", err);
    }
  };

  // Delete ALL history
  const handleClearAll = async () => {
    const sure = window.confirm("Are you sure you want to delete ALL history?");
    if (!sure) return;

    try {
      // Delete each doc
      for (const item of history) {
        await databases.deleteDocument(DB_ID, COLLECTION_ID, item.$id);
      }

      // Clear UI
      setHistory([]);
    } catch (err) {
      console.error("Clear All Error:", err);
    }
  };

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <div className="mt-4 max-w-3xl mx-auto px-2">

      {/* HEADER + CLEAR BUTTON */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-200">History</h1>

        <button
          onClick={handleClearAll}
          className="
            px-4 py-1.5 
            bg-red-600 
            text-white 
            rounded-md 
            text-sm
            hover:bg-red-700 
            transition
            hover:scale-105
            active:scale-95
          "
        >
          Clear All
        </button>
      </div>

      {history.length === 0 ? (
        <p className="text-gray-500 text-sm">No doubts asked yet.</p>
      ) : (
        <div className="space-y-4">
          {history.map((item) => (
            <div
              key={item.$id}
              className="p-4 bg-[#1a1a1a] border border-gray-700 rounded-xl shadow-sm relative"
            >
              {/* Delete Single */}
              <button
                onClick={() => handleDelete(item.$id)}
                className="
                  absolute top-3 right-3 
                  text-red-400 
                  hover:text-red-500 
                  transition 
                  text-lg 
                  font-bold
                  hover:scale-110
                  active:scale-95
                  hover:drop-shadow-[0_0_6px_rgba(255,0,0,0.7)]
                "
                title="Delete"
              >
                ✖
              </button>

              <p className="text-gray-300 font-semibold">
                <span className="text-green-400 mr-1">●</span>
                {item.question}
              </p>

              <div className="mt-3 text-gray-400 text-sm leading-relaxed whitespace-pre-line border-l-2 border-gray-600 pl-3">
                {item.answer}
              </div>

              <p className="text-[11px] text-gray-600 mt-3">
                {new Date(item.$createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default HistoryPage;
