import {GameTask} from "../models";
import Capsule from "../UI/Capsule";

import QuestionContainer from "../UI/QuestionContainer";

import rocket from '../../image/rocket.png'
import {useState} from "react";

type Props = {
    onClick: (id: number) => void;
    id: number;
    problemsList: GameTask[];
}
const Question = (props: Props) => {
    const onCLick = () => {
        props.onClick(props.id)
    }

    const colors = {
        EASY: "bg-green-400 border-green-600",
        MEDIUM: "bg-yellow-400 border-yellow-600",
        HARD: "bg-red-400 border-red-600",
        INSANE: "bg-red-900 border-red-900",
        ERROR: "bg-magenta-500 border-magenta-200",
    }

    const backgroundColorDifficulty = (difficulty: string) => {
        switch (difficulty.toUpperCase()) {
            case "EASY":
                return colors.EASY;
            case "MEDIUM":
                return colors.MEDIUM;
            case "HARD":
                return colors.HARD;
            case "INSANE":
                return colors.INSANE;
            default:
                return colors.ERROR;
        }
    }

    const [blurs, setBlurs] = useState<boolean[]>([false, false, false])

    const setBlur = (index: number, off: boolean = false) => {
        if (off) {
            setBlurs([false, false, false])
            return
        }
        for (let i = 0; i < blurs.length; i++) {
            blurs[i] = i !== index;
        }
        console.log(blurs)
        setBlurs([...blurs])
    }
    const picture = <img className=" inline w-[25px] h-[25px] ml-[8px]" src={rocket} alt='yellow rocket'/>

    return (
        <>
            {(props.problemsList.length === 0) &&
                <>
                    <div
                        className="rounded-lg w-36  h-fit p-1 bg-[#57585B] m-2 cursor-pointer transition-all scale-75">
                        <div
                            className="items-center rounded-full max-w-none h-8 my-[5px] flex relative bg-gray-500 animate-pulse"></div>
                        <div
                            className="items-center rounded-full max-w-none h-8 my-[5px] flex relative bg-gray-500 animate-pulse delay-150"></div>
                        <div
                            className="items-center rounded-full max-w-none h-8 my-[5px] flex relative bg-gray-500 animate-pulse delay-300"></div>
                    </div>
                </>}
            {(props.problemsList.length !== 0) &&
                <>
                    <QuestionContainer onClick={onCLick}>
                        <Capsule
                            index={1}
                            bgcolor={backgroundColorDifficulty(props.problemsList[props.id].difficulty)}
                            text={props.problemsList[props.id].difficulty.toUpperCase()}
                            multiLineText={[props.problemsList[props.id].difficulty.toUpperCase()]}
                            title={"Difficulty"}
                            blur={blurs[0]}
                            setBlur={setBlur}
                        />
                        <Capsule
                            index={2}
                            bgcolor={"bg-blue-400 border-blue-600"}
                            multiLineText={[props.problemsList[props.id].rewards.time + " min", props.problemsList[props.id].rewards.lives + " liv"]}
                            picture={picture}
                            text={props.problemsList[props.id].rewards.time + " min | " +
                                props.problemsList[props.id].rewards.lives + " X"}
                            title={"Rewards"}
                            blur={blurs[1]}
                            setBlur={setBlur}
                        />
                        <Capsule index={3} bgcolor="bg-yellow-400 border-yellow-600"
                                 text={props.problemsList[props.id].category[0] + (props.problemsList[props.id].category.length > 1 ? "..." : "")}
                                 multiLineText={props.problemsList[props.id].category}
                                 title={props.problemsList[props.id].category && props.problemsList[props.id].category.length > 1 ? "Kategorier" : "Kategori"}
                                 blur={blurs[2]}
                                 setBlur={setBlur}
                        />
                    </QuestionContainer>
                </>
            }
        </>
    );
}
export default Question;