import data from "../data/questions.json";
import "../App.css";
import {
	Card,
	CardContent,
	Typography,
	Button,
	Box,
	Stack,
	LinearProgress,
} from "@mui/material";
import { useState, useEffect , useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../contexts/quizContext";

export default function Questions() {
	const { score, setScore , time, setTime } = useQuiz();
	// ======= STATES =========
	const [quseNumber, setQuesNumber] = useState(data.questions[0].id);
	const [currentques, setCurrentQues] = useState(data.questions[0].question);
	const [answers, setAnswers] = useState(data.questions[0].options);
	const [selected, setSelected] = useState("");
	//========= STATES =========//
	const navigate = useNavigate();
	const progress = (quseNumber / data.questions.length) * 100;
	//====== FUCTIONS =========//
	const nextQuestion = useCallback(() => { 
		if (data.questions.length !== quseNumber) {
			setQuesNumber(quseNumber + 1);
			setCurrentQues(data.questions[quseNumber].question);
			setAnswers(data.questions[quseNumber].options);
			setSelected("");
			setTime(5);
		} else {
			navigate("/finalScore");
		}
} , [quseNumber , setTime , navigate])

	

	useEffect(() => {
		if (time <= 0) {
			if (quseNumber < data.questions.length) {
				nextQuestion();
			}
			return;
		}

		const timer = setTimeout(() => {
			setTime((prev) => prev - 1);
		}, 1000);

		return () => clearTimeout(timer);
	}, [time, quseNumber, nextQuestion ,  setTime]);
	
	function calcScore(option) {
		setSelected(option);
		if (option === data.questions[quseNumber - 1].correct_answer) {
			setScore((prev) => prev + 1);
		}
	}

	function getButtonColor(option) {
		if (selected !== option) {
			return "#fbc02d";
		}
		if (option === data.questions[quseNumber - 1].correct_answer) {
			return "green";
		}
		return "red";
	}
	//====== FUCTIONS =========//

	return (
		<div>
			<Box
				sx={{
					minHeight: "100vh",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					background: "linear-gradient(135deg, #ffe082 0%, #29b6f6 100%)",
				}}>
				<Box sx={{ width: "90%", mb: 2 }}>
					<LinearProgress variant="determinate" value={progress} />
				</Box>
				<Typography variant="h6">{Math.round(progress)}%</Typography>
				<Card
					sx={{
						width: 500,
						borderRadius: 5,
						boxShadow: 5,
						overflow: "hidden",
						position: "relative",
					}}>
					<Typography
						variant="h6"
						sx={{
							ml: 2,
							mt: 2,
							fontWeight: "bold",
						}}>
						Score: {score}
					</Typography>
					<Typography
						variant="h6"
						sx={{
							ml: 2,
							mt: 2,
							fontWeight: "bold",
						}}>
						Time-Lefted : {time}
					</Typography>
					{/* Question */}
					<CardContent>
						<Box
							sx={{
								backgroundColor: "#fbc02d",
								width: "fit-content",
								px: 2,
								py: 0.5,
								borderRadius: 2,
								fontWeight: "bold",
								mb: 2,
							}}>
							Q{quseNumber}
						</Box>

						<Typography
							variant="h6"
							sx={{
								mb: 4,
								lineHeight: 1.5,
							}}>
							{currentques}
						</Typography>

						<Stack spacing={2}>
							<Button
								variant="contained"
								className={selected !== "" ? "choice-disabled" : ""}
								sx={{
									backgroundColor: getButtonColor("A"),
									color: "white",
									borderRadius: 3,
									py: 1.5,
									fontSize: 16,
								}}
								onClick={() => calcScore("A")}>
								{answers.A}
							</Button>

							<Button
								variant="contained"
								className={selected !== "" ? "choice-disabled" : ""}
								sx={{
									backgroundColor: getButtonColor("B"),
									color: "white",
									borderRadius: 3,
									py: 1.5,
									fontSize: 16,
								}}
								onClick={() => calcScore("B")}>
								{answers.B}
							</Button>

							<Button
								variant="contained"
								className={selected !== "" ? "choice-disabled" : ""}
								sx={{
									backgroundColor: getButtonColor("C"),
									color: "white",
									borderRadius: 3,
									py: 1.5,
									fontSize: 16,
								}}
								onClick={() => calcScore("C")}>
								{answers.C}
							</Button>

							<Button
								variant="contained"
								className={selected !== "" ? "choice-disabled" : ""}
								sx={{
									backgroundColor: getButtonColor("D"),
									color: "white",
									borderRadius: 3,
									py: 1.5,
									fontSize: 16,
								}}
								onClick={() => calcScore("D")}>
								{answers.D}
							</Button>
						</Stack>
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
							onClick={nextQuestion}>
							{quseNumber < data.questions.length ? "Next" : "Result"}
						</Button>
						<Box
							sx={{
								display: "flex",
								justifyContent: "space-between",
								mt: 3,
								color: "#0288d1",
								fontSize: 14,
							}}></Box>
					</CardContent>
				</Card>
			</Box>
		</div>
	);
}
