type Props = {
    children: React.ReactNode;
    onClick: () => void;

}

const QuestionContainer= (props: Props) => {
    
    return(
        <div
            className="shadow shadow-inner shadow-black hover:shadow-yellow-500 hover:shadow-inner animate-scale-up-down rounded-lg w-36 flex flex-col justify-between items-center h-fit p-1 bg-[#57585B] m-2 cursor-pointer group hover:scale-105 transition-all hover:shadow-lg hover:shadow-amber-900"
            onClick={props.onClick}>{props.children}</div>
    );
}

export default QuestionContainer;