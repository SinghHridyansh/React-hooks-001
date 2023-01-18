import QuizQuestion from "./QuizQuestion";
import React, { useState, useEffect } from "react";

function Quiz() {
  let setData = [
    {
      question: "What is the name of the toy cowboy in Toy Story?",
      options: ["Buzz Lightyear", "Tin Tin", "Woody", "Nemo"],
      answer: "Woody",
      score: -1,
    },
    {
      question: "Whose nose grew longer every time he lied?",
      options: ["Bob The builder", "Pinnochio", "Alex", "Nathan"],
      answer: "Pinnochio",
      score: -1,
    },
    {
      question: "If you freeze water, what do you get?",
      options: ["Vapour", "Juice", "Plasma", "Ice"],
      answer: "Ice",
      score: -1,
    },
    {
      question: "How many planets are in our solar system?",
      options: ["Eight", "Nine", "Seven", "Ten"],
      answer: "Eight",
      score: -1,
    },
    {
      question: "Where does Santa Claus live?",
      options: ["North Pole", "Alaska", "Ladakh", "South Pole"],
      answer: "North Pole",
      score: -1,
    },
  ];
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  useEffect(() => {
    shuffle(setData);
    setCurrentQues({
      data: setData[0],
      s_no: 1,
    });
    console.log(setData);
  }, []);

  const [currentQues, setCurrentQues] = useState({
    data: {
      question: "How many planets are in our solar system?",
      options: ["North Pole", "Alaska", "Ladakh", "South Pole"],
      answer: "North Pole",
      score: -1,
    },
    s_no: 1,
  });
  const CheckAnswer = (value) => {
    setTimeout(() => {
      if (currentQues.data.answer === value) {
        alert("your answer is correct");
        setScore((preValue) => preValue + 5);

        setSubmition((preValue) => {
          preValue.push(true);
          return preValue;
        });
      } else {
        alert("your answer is incorrect");

        setSubmition((preValue) => {
          preValue.push(true);
          return preValue;
        });
      }
      if (currentQues.s_no === setData.length) {
        setQuizStatus(0);
      }
      setCurrentQues((preValue) => {
        return {
          data: setData[preValue.s_no],
          s_no: preValue.s_no + 1,
        };
      });
    }, 1000);
  };

  const [score, setScore] = useState(0);
  const [submition, setSubmition] = useState([]);
  const [quizStatus, setQuizStatus] = useState(1);

  return (
    <div className="Quiz-container">
      <h2>React Quiz</h2>
      <p>Current Score : {score}</p>
      {quizStatus ? (
        <QuizQuestion
          dataq={currentQues.data}
          QestionNo={currentQues.s_no}
          totalQuestion={setData.length}
          CheckAnswer={CheckAnswer}
        />
      ) : (
        <div>Quize ended</div>
      )}
    </div>
  );
}
export default Quiz;
