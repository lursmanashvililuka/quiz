import React, { useState } from "react";
import "./App.css";




function App() {
  const [showFinalResults, setFinalResults] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);


  const questions = [
    {
      text: "სად მდებარეობს 47-ე საჯარო სკოლა?",
      options: [
        { id: 0, text: "აი ოპერასთან რო აუხვევ", isCorrect: true},
        { id: 1, text: "ჩიტაძეზე", isCorrect: false },
        { id: 2, text: "სოლოლაკში", isCorrect: false },
        { id: 3, text: "მთაწმინდაზე", isCorrect: false },
      ],
    },
    {
      text: "რამდენი წლისაა ლონდარიძე ლორა?",
      options: [
      
        { id: 1, text: "ათასოთხმოცი", isCorrect: false },
        { id: 2, text: "180", isCorrect: false },
        { id: 3, text: "97-ის მერე არ ითვლის", isCorrect: false },
        { id: 0, text: "ყველა", isCorrect: true },
      ], 
    },
    {
      text: "რატომ აქვს დალი ყარალაშვილს წითელი თმები?",
      options: [
        { id: 0, text: "უნდა და მაგიტო", isCorrect: true },
        { id: 1, text: "გენში აქვს", isCorrect: false },
        { id: 2, text: "ელექსირი საკუთახ თავზე გამოსცადა", isCorrect: false },
        { id: 3, text: "პრესტიჟის ამბავია", isCorrect: false },
      ],
    },
    {
      text: "რატომ გაძვირდა ფასები ბუFეტში?",
      options: [
        { id: 0, text: "ცხოვრებამ მოიტანა", isCorrect: false },
        { id: 1, text: "დირექტორის მანქანა მოძველდა", isCorrect: true },
        { id: 2, text: "იხდიან და...", isCorrect: false },
        { id: 3, text: "რამე პრობლემაა?", isCorrect: false },
      ],
    },
    {
      text: "რას უნდა აწვებოდეს მოსწავლე?",
      options: [
        { id: 0, text: "თამაშს", isCorrect: false },
        { id: 1, text: "რაც გაუსწორდება", isCorrect: true },
        { id: 2, text: "სწავლას და რამე", isCorrect: true },
        { id: 3, text: "ცხოვრებას", isCorrect: false },
      ],
    },
  ];

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
     
    } else {
      setFinalResults(true);
    }
  };
  const restartGame=()=>{
    setScore(0);
    setCurrentQuestion(0);
    setFinalResults(0);
  }


  return (
    <div className="App">
      <h1>QUIZ</h1>
      

      <h2> სწორი პასუხი: {score}</h2>

      {showFinalResults ? (
        <div className="finalresults">
          <h1>საბოლოო შედეგები</h1>
          <h2>{score} სწორი პასუხი {questions.length}-დან = ({(score/questions.length)*100}%) </h2>
          <h3 className="tag">#სხვაგზაარაგაქთორეშენცგადახვიდოდი</h3>
          <button onClick={()=> restartGame()}>RESTART</button>
        </div>
      ) : (
        <div className="questioncard">
          <h2>
            კითხვა {currentQuestion + 1}    
          </h2>
          <h3 className="questiontext">{questions[currentQuestion].text}</h3>
          
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  onClick={() => optionClicked(option.isCorrect)}
                  key={option.id}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
