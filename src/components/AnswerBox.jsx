import ReactMarkdown from "react-markdown";

function AnswerBox({ answer }) {
  if (!answer) return null;

  return (
    <div className="mt-4 mx-auto">
      <div className="
        w-full 
        bg-[#1a1a1a]
        text-gray-200 
        border border-gray-700 
        rounded-xl 
        p-4 
        shadow-sm 
        leading-relaxed
        prose prose-invert max-w-none
      ">
        <ReactMarkdown>{answer}</ReactMarkdown>
      </div>
    </div>
  );
}

export default AnswerBox;
