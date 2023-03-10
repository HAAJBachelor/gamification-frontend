
export const Title = (props: {title: string}) => {
    return (
        <h1 className="sm:text-3xl underline-offset-[10px] decoration-4 text-white mb-8 underline-yellow-500 underline decoration-yellow-400">{props.title}</h1>
    )
}