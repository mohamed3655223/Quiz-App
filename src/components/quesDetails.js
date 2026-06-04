import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useQuiz } from "../contexts/quizContext";

const liStyle = {
	marginBottom: "12px",
	fontSize: "30px",
	fontWeight: "500",
	color: "#333",
};

export default function QuesDetails() {
	const {setTime} = useQuiz()
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				minHeight: "100vh",
			}}>
			<ul style={{ marginLeft: "50px" }}>
				<li style={liStyle}>Title : General Knowledge Quiz</li>
				<li style={liStyle}>Topic : General Knowledge</li>
				<li style={liStyle}>Total Questions : 10</li>
				<li style={liStyle}>Format : Multiple Choice</li>
			</ul>

			<Link to="/questions">
				<Button
					onClick={() => setTime(5)}
					variant="contained"
					style={{ padding: "15px 40px", fontSize: "20px" }}>
					Start
				</Button>
			</Link>
		</div>
	);
}
