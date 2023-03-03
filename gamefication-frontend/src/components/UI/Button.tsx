export const Button = (props: any) => {

    return (
        <>
            <button
                onClick={props.handleOnClick}
                className="px-8 py-0 rounded-full bg-yellow-400 hover:bg-yellow-300 hover:border-yellow-100 hover:scale-110 text-black font-bold text-xs sm:text-xl border-2 border-yellow-500 group-hover:animate-bounce">{props.text}
            </button>
        </>
    )
}