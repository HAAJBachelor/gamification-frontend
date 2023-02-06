
export const Title = (props: {title: string}) => {
    return (
        <h1 className="text-base sm:text-3xl underline underline-offset-[12px] text-white decoration-yellow-400 mb-8">{props.title}</h1>
    )
}