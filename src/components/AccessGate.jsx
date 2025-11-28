import { useState } from "react";

function AccessGate({ children }) {
  const [pass, setPass] = useState("");
  const [allowed, setAllowed] = useState(false);

  const correctKey = import.meta.env.VITE_ACCESS_KEY;

  const handleEnter = () => {
    if (pass === correctKey) {
      setAllowed(true);
    } else {
      alert("Wrong password!");
    }
  };

  if (allowed) return children;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white gap-4">
      <h2 className="text-xl font-semibold">Enter Access Password</h2>

      <input
        type="password"
        className="p-2 rounded bg-gray-800 w-64 text-center"
        placeholder="Enter password..."
        value={pass}
        onChange={(e) => setPass(e.target.value)}
      />

      <button
        onClick={handleEnter}
        className="px-4 py-2 bg-gray-800 rounded hover:bg-blue-500"
      >
        Enter
      </button>
    </div>
  );
}

export default AccessGate;
