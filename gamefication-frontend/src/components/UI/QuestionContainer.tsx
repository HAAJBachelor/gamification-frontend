type Props = {
    children: React.ReactNode;
    onClick: () => void;

}

const QuestionContainer= (props: Props) => {
    
    return(
        <div className="rounded-lg w-32 h-32 p-1 bg-[#57585B] m-2 cursor-pointer"
             onClick={props.onClick}>{props.children}</div>
    );
}

export default QuestionContainer;