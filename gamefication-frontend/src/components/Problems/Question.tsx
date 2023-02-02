import { Problem } from "../models";
import { Capsule } from "../UI/Capsule";
import QuestionContainer from "../UI/QuestionContainer";

const Question = () => {
    return (
        <QuestionContainer>
            <Capsule bgcolor="bg-yellow-400" text="EASY"/>
            <Capsule bgcolor="bg-yellow-400" text="EASY"/>
            <Capsule bgcolor="bg-yellow-400" text="EASY"/>
        </QuestionContainer>
    );
}

export default Question;