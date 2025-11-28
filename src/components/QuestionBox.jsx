function QuestionBox({ question, setQuestion, handleAsk }) {
  return (
    <div className="w-full sm:w-2/3 lg:w-1/2 mx-auto flex items-center gap-2 bg-[#1a1a1a] border border-gray-700 rounded-xl px-4 py-2 shadow-sm">

      <input
        type="text"
        placeholder="Message DoubtCracker..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="flex-1 bg-transparent text-gray-200 placeholder-gray-500 focus:outline-none text-sm sm:text-base"
      />

      <button
        onClick={handleAsk}
        className="
          p-2 rounded-xl
          bg-gray-800 
          hover:bg-gray-700 
          text-gray-300 
          hover:text-white 
          transition 
          shadow 
          hover:shadow-lg
          active:scale-95
        "
      >
        ➤
      </button>

    </div>
  );
}

export default QuestionBox;
