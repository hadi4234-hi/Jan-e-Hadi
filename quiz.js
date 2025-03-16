import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const questions = [
  { 
    question: "What is my favorite food?", 
    options: ["Biryani", "Pulao", "Daal-Chawal", "Hot Wings"], 
    answer: "Biryani", 
    praise: "Ahh, my foodie soulmate! You really know the way to my heart (and stomach)!", 
    tease: "Excuse me?! Have we even met before?!", 
    bg: "bg-food" 
  },
  { 
    question: "Which color do I like the most?", 
    options: ["Blue", "Red", "Green", "Yellow"], 
    answer: "Blue", 
    praise: "Yes! Just like the sky, my love for you is endless!", 
    tease: "You really think I’d pick red? I should paint a BIG BLUE HEART for you!", 
    bg: "bg-color" 
  },
  { 
    question: "What is my biggest weakness?", 
    options: ["I overthink too much", "I trust people too easily", "I get angry quickly", "I am too lazy sometimes"], 
    answer: "I overthink too much", 
    praise: "You know me so well… but luckily, you’re always there to calm my mind!", 
    tease: "Aww, that’s cute, but nope! My brain is a mess of overthinking!", 
    bg: "bg-weakness" 
  },
  { 
    question: "What is my dream vacation spot?", 
    options: ["Turkey", "Maldives", "Paris", "Australia"], 
    answer: "Turkey", 
    praise: "Yes! Imagine us there, walking the streets, making memories!", 
    tease: "Tempting, but no! I want history AND romance, not just beaches!", 
    bg: "bg-vacation" 
  },
  { 
    question: "Which sport do I enjoy the most?", 
    options: ["Cricket", "Volleyball", "Badminton", "Chess"], 
    answer: "Badminton", 
    praise: "Yes! Let’s play sometime—winner gets unlimited kisses!", 
    tease: "Nope! I love watching it, but playing? Nah!", 
    bg: "bg-sport" 
  },
  { 
    question: "What do I love doing in my free time?", 
    options: ["Reading", "Gaming", "Playing music", "Sketching"], 
    answer: "Gaming", 
    praise: "Yes! Wanna be my player two forever?", 
    tease: "I’d love to… but let’s be real, gaming wins!", 
    bg: "bg-hobby" 
  },
  { 
    question: "How many kids do I want?", 
    options: ["2", "3", "4", "12"], 
    answer: "4", 
    praise: "Yes! A little squad of mini-us running around!", 
    tease: "What do you think I am, a superhero?!", 
    bg: "bg-kids" 
  },
  { 
    question: "What is my favorite movie genre?", 
    options: ["Drama", "Comedy", "Action", "Horror"], 
    answer: "Comedy", 
    praise: "Yes! Because laughter is the best thing we share!", 
    tease: "Are you trying to give me nightmares?!", 
    bg: "bg-movie" 
  },
  { 
    question: "Which animal do I like the most?", 
    options: ["Dog", "Cat", "Lion", "Panda"], 
    answer: "Cat", 
    praise: "Yes! Just like me—sometimes playful, sometimes lazy!", 
    tease: "Pandas are adorable, but I’m a cat person at heart!", 
    bg: "bg-animal" 
  },
  { 
    question: "What is my biggest dream in life?", 
    options: ["To travel the world", "To become successful in my career", "To have a happy and peaceful life", "To help people and make a difference"], 
    answer: "To travel the world", 
    praise: "Yes! And my dream is to do it with you by my side!", 
    tease: "Aww, sweet! But let’s explore the world first!", 
    bg: "bg-dream" 
  }
];

export default function QuizRound1() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [correct, setCorrect] = useState(null);

  const handleAnswer = (option) => {
    const isCorrect = option === questions[currentQuestion].answer;
    setCorrect(isCorrect);
    setFeedback(isCorrect ? questions[currentQuestion].praise : questions[currentQuestion].tease);
    
    setTimeout(() => {
      setFeedback("");
      setCorrect(null);
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${questions[currentQuestion].bg}`}>
      {!showResult ? (
        <motion.div 
          className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.5 }}
        >
          <motion.h2 
            className="text-xl font-bold mb-4"
            initial={{ y: -10, opacity: 0 }} 
            animate={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.5 }}
          >
            {questions[currentQuestion].question}
          </motion.h2>

          {feedback && (
            <motion.p 
              className="text-center font-semibold mb-2"
              initial={{ scale: 0.8, opacity: 0 }} 
              animate={{ scale: 1, opacity: 1 }} 
              transition={{ duration: 0.3 }}
            >
              {feedback}
            </motion.p>
          )}

          <div className="grid gap-2">
            {questions[currentQuestion].options.map((option, index) => (
              <motion.button 
                key={index} 
                onClick={() => handleAnswer(option)} 
                className={`p-3 rounded-lg font-bold transition-colors ${correct === null ? "bg-blue-500 hover:bg-blue-600 text-white" : option === questions[currentQuestion].answer ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}
                whileTap={{ scale: 0.9 }}
              >
                {option}
              </motion.button>
            ))}
          </div>
        </motion.div>
      ) : (
        <motion.div className="text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl font-bold">Round 1 Completed!</h2>
          <p className="mt-2">Ready for the next round? 💕</p>
        </motion.div>
      )}
    </div>
  );
}
