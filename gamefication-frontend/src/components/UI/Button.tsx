type Props = {
    text:string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}
export const Button: React.FC<Props> = (props) => {

    return (
        <>
            <button
                    onClick={props.onClick}
                    className="mt-12 px-8 py-0 rounded-full bg-yellow-400 text-black font-bold">{props.text}

            </button>
        </>
    )
}