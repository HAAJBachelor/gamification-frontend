import { GameTask } from "../models";
import Capsule from "../UI/Capsule";
import QuestionContainer from "../UI/QuestionContainer";

type Props = {
    onClick: (id: number) => void;
    id: number;
    problemsList: GameTask[];
    
}
const Question = (props: Props) => {    
    const onCLick = () => {
        props.onClick(props.id)
    }

    return (
        <QuestionContainer onClick={onCLick}>
            {props.problemsList.map(problem => 
            <Capsule bgcolor="bg-yellow-400" text={problem.difficulty.toUpperCase()} />
            )}
            {/*<Capsule bgcolor="bg-yellow-400" text={props.problemsList[0].description}/>
            <Capsule bgcolor="bg-yellow-400" text="EASY"/>
            <Capsule bgcolor="bg-yellow-400" text="3 min"/>*/}
        </QuestionContainer>
    );
}
export default Question;