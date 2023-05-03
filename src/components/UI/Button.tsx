type Props = {
    text?: string;
    handleOnClick: (e: any) => void;
}

export const Button = (props: Props) => {

    return (
        <>
            <button
                onClick={props.handleOnClick}
                className="px-8 w-52 py-0 rounded-full bg-yellow-400 transition-all hover:bg-yellow-300 hover:border-yellow-100 hover:scale-110 text-black font-bold text-xs sm:text-xl border-2 border-yellow-500">{props.text}
            </button>
        </>
    )
}