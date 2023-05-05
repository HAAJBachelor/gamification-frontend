import score from '../../image/score.png';
import {useEffect, useState} from 'react';

type Props = {
    scores: number
}
const Scores = (props: Props) => {
    const [scores, setScore] = useState(0);
    useEffect(() => {
        setScore(props.scores)
    }, [props.scores])

    return (
        <div className='flex flex-row items-center justify-center gap-2'>
            <img className="w-[32px] h-[32px]" src={score} alt={"oxx logo"}/>
            <span className={"whitespace-nowrap"}> X</span>
            <div className=''>
                <span className={"whitespace-nowrap text-2xl"}> {scores}</span>
            </div>
        </div>
    );
}

export default Scores;