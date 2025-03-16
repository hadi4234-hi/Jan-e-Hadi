const { useState } = React;

function QuizApp() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [feedback, setFeedback] = useState("");
    const [showResult, setShowResult] = useState(false);

    const questions = [
        { question: "What is my favorite food?", options: ["Biryani", "Pulao", "Daal-Chawal", "Hot Wings"], answer: "Biryani" },
        { question: "Which color do I like the most?", options: ["Blue", "Red", "Green", "Yellow"], answer: "Blue" },
        { question: "What is my biggest weakness?", options: ["I overthink too much", "I trust people too easily", "I get angry quickly", "I am too lazy sometimes"], answer: "I overthink too much" },
        { question: "What is my dream vacation spot?", options: ["Turkey", "Maldives", "Paris", "Australia"], answer: "Turkey" },
        { question: "Which sport do I enjoy the most?", options: ["Cricket", "Volleyball", "Badminton", "Chess"], answer: "Badminton" },
        { question: "What do I love doing in my free time?", options: ["Reading", "Gaming", "Playing music", "Sketching"], answer: "Gaming" },
        { question: "How many kids do I want?", options: ["2", "3", "4", "12"], answer: "4" },
        { question: "What is my favorite movie genre?", options: ["Drama", "Comedy", "Action", "Horror"], answer: "Comedy" },
        { question: "Which animal do I like the most?", options: ["Dog", "Cat", "Lion", "Panda"], answer: "Cat" },
        { question: "What is my biggest dream in life?", options: ["To travel the world", "To become successful in my career", "To have a happy and peaceful life", "To help people and make a difference"], answer: "To travel the world" }
    ];

    const handleAnswer = (option) => {
        if (option === questions[currentQuestion].answer) {
            setFeedback("Correct! ??");
        } else {
            setFeedback("Oops! ?");
        }

        setTimeout(() => {
            setFeedback("");
            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
            } else {
                setShowResult(true);
            }
        }, 1000);
    };

    return (
        <div className="quiz-container">
            {!showResult ? (
                <div>
                    <h2>{questions[currentQuestion].question}</h2>
                    <div className="options">
                        {questions[currentQuestion].options.map((option, index) => (
                            <button key={index} onClick={() => handleAnswer(option)}>{option}</button>
                        ))}
                    </div>
                    <p>{feedback}</p>
                </div>
            ) : (
                <h2>Quiz Completed! ??</h2>
            )}
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<QuizApp />);