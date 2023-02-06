import rocket from '../../image/rocket.png'

export const Liv = () => {
    return(
        <div className='inline-flex absolute right-0 '>Liv: 
            <img className="w-[25px] h-[25px] ml-[8px]" src={rocket} alt='yellow rocket'/>
            <img className="w-[25px] h-[25px]" src={rocket} alt='yellow rocket'/>
            <img className="w-[25px] h-[25px]" src={rocket} alt='yellow rocket'/>
        </div>
    );        
}