import { ID } from "appwrite"; 
import { useDispatch, useSelector } from "react-redux";
import { setQuestion, setAnswer } from "../redux/chatSlice";
import QuestionBox from "../components/QuestionBox";
import AnswerBox from "../components/AnswerBox";
import { askAI } from "../service/api";
import { databases, DB_ID, COLLECTION_ID } from "../service/appwrite";

function MainPage() {
  const dispatch = useDispatch();

  // Get values from Redux
  const question = useSelector((state) => state.chat.question);
  const answer = useSelector((state) => state.chat.answer);

  const handleAsk = async () => {
    if (!question.trim()) return;

    const res = await askAI(question);

    // Save answer in Redux
    dispatch(setAnswer(res.answer));

    // Save in Appwrite
    await databases.createDocument(DB_ID, COLLECTION_ID, ID.unique(), {
      question,
      answer: res.answer,
    });

    // Clear question
    dispatch(setQuestion(""));
  };

  return (
    <div className="max-w-3xl mx-auto mt-6 px-3 pb-10">
      <QuestionBox
        question={question}
        setQuestion={(q) => dispatch(setQuestion(q))}
        handleAsk={handleAsk}
      />

      <AnswerBox answer={answer} />
    </div>
  );
}

export default MainPage;
