type Props = {
    text: string,
    bgcolor: string,
}
const Capsule = (props: Props) => {
    const capsule = "rounded-full font-semibold text-center max-w-none h-8 my-[5px] " + (props.bgcolor);

    return(
        <>
            <div className={capsule}>{props.text}</div>
        </>
    );
} 

export default Capsule;