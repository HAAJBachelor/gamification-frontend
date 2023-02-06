type Props = {
    text:string
}
export const Button: React.FC<Props> = (props) => {

    return (
        <>
            <button                    
                    className="mt-12 px-8 py-0 rounded-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-xs sm:text-xl">{props.text}

            </button>
        </>
    )
}