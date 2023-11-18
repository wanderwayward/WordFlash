import {Box} from "@mui/material";

const QuestionBox = ({ question, setQuestion, handleSubmit }) => {
    return(
        <Box>
            <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask a question"
            />
            <button type="submit">Ask</button>
            </form>
        </Box>

    )
}

export default QuestionBox;