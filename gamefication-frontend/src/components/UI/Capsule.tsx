

type Props = {
    text: string | number,
    bgcolor: string,
    picture?: any
    index: number
}
const Capsule = (props: Props) => {
    const delay = props.index == 1 ? "" : props.index === 2 ? "delay-100" : "delay-200";
    const ani = props.index == 1 ? "animate-[scaleupdownopacity_0.8s_ease-in-out_1]" : props.index == 2 ? "animate-[scaleupdownopacity_1s_ease-in-out_1]" : "animate-[scaleupdownopacity_1.2s_ease-in-out_1]"
    const capsule = ani + " items-center rounded-full font-semibold text-center max-w-none h-8 my-[5px] flex relative group-hover:scale-110 transition-all duration-300 " + delay;
    return (
        <>
            <div className={capsule}>
                <p className={"z-20 w-full"}>{props.text}</p>
                <div
                    className={"border-2 group-hover:border-white w-full h-full bg-red-500 absolute rounded-full z-10 " + props.bgcolor}></div>
                <div
                    className={"w-full h-full bg-red-500 absolute rounded blur-md animate-pulse opacity-75 z-0 group-hover:animate-bounce " + props.bgcolor}></div>
            </div>

        </>
    );
}

export default Capsule;