import Question from "./Question";

type Props = {

}
const Questions: React.FC<Props> = (props) => {


    return (
        <div className="flex flex-wrap justify-center">
            <Question />
            <Question />
            <Question />
        </div>
    );
}

export default Questions;