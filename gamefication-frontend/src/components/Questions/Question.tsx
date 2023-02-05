import { Capsule } from "../UI/Capsule";
import QuestionContainer from "../UI/QuestionContainer";

const Question = () => {
    const handleOnClick = () => {
        alert("hei");
    }

    return (
        <QuestionContainer onClick={handleOnClick}>
            <Capsule bgcolor="bg-yellow-400" text="< />"/>
            <Capsule bgcolor="bg-yellow-400" text="EASY"/>
            <Capsule bgcolor="bg-yellow-400" text="3 min"/>
        </QuestionContainer>
    );
}

export default Question;