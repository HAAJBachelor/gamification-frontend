export const Button = (props: any) => {

    return (
        <>
            <button
                onClick={props.handleOnClick}
                className="px-8 py-0 rounded-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-xs sm:text-xl">{props.text}
            </button>
        </>
    )
}