
export const Title = (props: {title: string}) => {
    return (
        <div className={'flex flex-col justify-center items-center'}>
        <h1 className="sm:text-3xl text-white mb-4 ">{props.title}</h1>
        <p className={'border-b-8 w-96 text-center border-yellow-500 rounded-xl mb-8'}></p>
    </div>
    )
}