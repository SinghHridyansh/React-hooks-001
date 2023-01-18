import QuizOption from "./QuizOption";

function QuizQuestion({ dataq, QestionNo, totalQuestion, CheckAnswer, color }) {
  const { question, options } = dataq;
  return (
    <div className="QuizQuestion-container">
      <h2>
        Question {QestionNo} out of {totalQuestion}
      </h2>
      <h4>{question}</h4>
      {options.map((item, index) => {
        return (
          <QuizOption value={item} key={index} CheckAnswer={CheckAnswer} />
        );
      })}
    </div>
  );
}
export default QuizQuestion;
