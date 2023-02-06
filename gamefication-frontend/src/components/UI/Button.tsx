type Props = {
    text:string;
}
export const Button: React.FC<Props> = (props) => {

    return (
        <>
            <button

                    className="mt-12 px-8 py-0 rounded-full bg-yellow-400 text-black font-bold">{props.text}

            </button>
        </>
    )
}