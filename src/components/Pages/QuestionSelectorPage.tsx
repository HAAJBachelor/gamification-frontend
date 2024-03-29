import Questions from '../Questions/Questions';
import Header from '../Header/Header';
import NewCard from '../UI/NewCard';
import {Title} from '../Title/Title';
import ProgressBar from '../ProgressBar';
import { GameTask } from '../models';

type Props = {
    onClick: (id: number) => void;    
    problemsList: GameTask[]
}
const QuestionSelectorPage = (props: Props) => {
    return (
        <>
            <Header/>
            <NewCard>
                <Title title="Velg neste utfordring"/>
                <Questions onClick={props.onClick} />
                <ProgressBar/>
            </NewCard>
        </>
    );
};

export default QuestionSelectorPage;