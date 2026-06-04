import { Routes, Route } from "react-router-dom";

import QuesDetails from "./components/quesDetails";
import Questions from "./components/question";
import FinalScore from "./components/finalScore";
export default function App() {
	return (
		<Routes>
			<Route path="/" element={<QuesDetails />} />
			<Route path="/questions" element={<Questions />} />
			<Route path="/finalScore" element={<FinalScore />} />
		</Routes>
	);
}
