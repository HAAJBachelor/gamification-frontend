type Props = {
    text: string,
    bgcolor: string
}
export const Capsule = (props: Props) => {
    const capsule = "rounded-full font-semibold text-center max-w-none my-[2px] " + (props.bgcolor);

    return(
        <>
            <div className={capsule}>{props.text}</div>
        </>
    );
} 