import {useEffect, useState} from 'react';
import rocket from '../../image/rocket.png';

type Props = {
    skips: number
}

export const Liv = (props: Props) => {
    const [lives, setLives] = useState(0);
    useEffect(() => {
        setLives(props.skips)
    }, [props.skips])

    return (
        <>
            <div className='flex flex-row items-center justify-center gap-2'>
                <img className="w-[40px] h-[40px]" src={rocket} alt='yellow rocket'/>
                <span className={"whitespace-nowrap"}> X</span>
                <div className=''>
                    <span className={"whitespace-nowrap text-2xl"}> {lives}</span>
                </div>
            </div>

        </>
    );
}