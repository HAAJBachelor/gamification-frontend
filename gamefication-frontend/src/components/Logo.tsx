import oxx from '../image/OXX_LOGO.png'

export const Logo = () => {
    return (
        <>
            <div className='bg-black'>
                <img src={oxx} className='object-scale-down h-16 w-16' alt='No images'/>
            </div>
        </>
    );
}