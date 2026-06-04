import { createContext, useContext, useState } from "react";

const QuizContext = createContext();

export function QuizProvider({ children }) {
	const [score, setScore] = useState(0);
	const [time, setTime] = useState(5);
	return (
		<QuizContext.Provider
			value={{
				score,
				setScore,
				time,
				setTime,
			}}>
			{children}
		</QuizContext.Provider>
	);
}

// 3. Create a custom hook to use the context easily
export function useQuiz() {
	return useContext(QuizContext);
}
