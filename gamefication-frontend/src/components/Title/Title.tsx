
export const Title = (props: {title: string}) => {
    return (
        <h1 className="text-base sm:text-3xl underline-offset-[12px] text-white mb-8 rounded-md shadow-md shadow-yellow-400">{props.title}</h1>
    )
}