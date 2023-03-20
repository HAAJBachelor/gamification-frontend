import {useState} from "react";


type Props = {
    text?: string | number,
    bgcolor: string,
    picture?: any
    index: number
    multiLineText?: string[]
    title?: string
    blur: boolean
    setBlur: (index: number, off?: boolean) => void
}
const Capsule = (props: Props) => {
    const [hover, setHover] = useState(false)
    const [height, setHeight] = useState(3)
    let over = false
    const delay = props.index == 1 ? "" : props.index === 2 ? "delay-100" : "delay-200";
    const ani = props.index == 1 ? "animate-[scaleupdownopacity_0.8s_ease-in-out_1]" : props.index == 2 ? "animate-[scaleupdownopacity_1s_ease-in-out_1]" : "animate-[scaleupdownopacity_1.2s_ease-in-out_1]"
    const capsule = `${ani} ${props.blur ? "blur-[1px]" : ""} group ${hover && "z-20"} flex items-center w-32 justify-center  h-12 rounded-full font-semibold text-center  p-2 my-[5px] relative group-hover:scale-110  duration-300  ${delay}`;
    const multiline = props.multiLineText && props.multiLineText.length > 1
    const maxHeight: number = props.multiLineText ? props.multiLineText.length * 1.5 + 3 : 3
    const handleMouseEnter = () => {
        over = true
        setTimeout(() => {
            if (!over)
                return
            props.setBlur(props.index - 1)
            setHeight(maxHeight)
            setHover(true)
        }, 300)
        console.log(props.multiLineText)
    }

    const handleMouseLeave = () => {
        over = false
        setHover(false)
        setHeight(3)
        props.setBlur(-1, true)
    }

    return (
        <>
            <div className={capsule} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {!props.multiLineText ?
                    <>
                        <p className={"z-20 w-full absolute "}>{props.text}</p>
                    </>
                    :
                    <div className={"absolute z-20"}>
                        {hover ?
                            <div className={"flex flex-col items-center justify-end w-full"}>
                                <p className={`w-full animate-blow-up underline`}>{props.title}</p>
                                {props.multiLineText.map((text, index) => {
                                    return <p key={index} className={`w-full animate-blow-up `}>{text}</p>
                                })}
                            </div>
                            :
                            <p className={`w-full`}>{props.text}</p>
                        }
                    </div>
                }
                <div
                    style={{height: height + "rem"}}
                    className={`border-4 ${hover && "shadow drop-shadow-2xl shadow-white"} group-hover:border-white w-full absolute rounded-full  z-10 transition-[all,height] ${props.bgcolor}`}></div>
                <div
                    className={"w-full h-full absolute rounded blur-md animate-pulse opacity-100 z-0 group-hover:translate-150 duration-300 transition-all " + props.bgcolor}></div>
            </div>

        </>
    );
}

export default Capsule;