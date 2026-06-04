import { Typography , Button } from "@mui/material";
import { useQuiz } from "../contexts/quizContext";
import { useNavigate } from "react-router-dom";
export default function FinalScore() {
	const {score , wrongAnswers} = useQuiz();
	const navigate = useNavigate();
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
			}}>
			<Typography
				variant="h2"
				sx={{
					ml: 2,
					mt: 5,
					fontWeight: "bold",
					color: "GrayText",
				}}>
				Quiz Completed!
			</Typography>
			<Typography
				variant="h3"
				sx={{
					ml: 2,
					mt: 10,
					fontWeight: "bold",
					color: score >= 5 ? "green" : "red",
				}}>
				Score: {score} / 10
			</Typography>
			<Button
				variant="contained"
				sx={{
					mt: 4,
					mr: 25,
					ml: 25,
					py: 1,
					fontSize: 18,
					borderRadius: 3,
				}}
				onClick={() => navigate("/")}>
				Restart The Quiz
			</Button>
		</div>
	);
}
