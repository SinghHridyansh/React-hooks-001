function QuizOption({ value, CheckAnswer }) {
  const onClickHandle = () => {
    CheckAnswer(value);
  };
  return (
    <div className="QuizOption-container">
      <h4 onClick={onClickHandle}>{value}</h4>
    </div>
  );
}
export default QuizOption;
