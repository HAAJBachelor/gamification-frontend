

type Props = {
    text: string | number,
    bgcolor: string,
    picture?: any
}
const Capsule = (props: Props) => {
    const capsule = "rounded-full font-semibold text-center max-w-none h-8 my-[5px] " + (props.bgcolor);

    return(
        <>
            <div className={capsule}>{props.text}{props.picture}</div>
            
        </>
    );
} 

export default Capsule;