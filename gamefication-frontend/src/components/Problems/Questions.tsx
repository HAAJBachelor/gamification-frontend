import { useState } from "react";
import { Problem } from "../models";
import Question from "./Question";

type Props = {
    //data: Array<Problem>
}
const Questions: React.FC<Props> = (props) => {

    const [questionList, setQuestionList] = useState(null);
    
    return (
        <div className="flex flex-wrap justify-center">
            <Question />
            <Question />
            <Question />
        </div>
    );
}

export default Questions;