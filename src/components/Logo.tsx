import { useNavigate } from 'react-router-dom';
import oxx from '../image/OXX_LOGO.png'

export const Logo = () => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate('/')
    }
    
    return (
        <>
            <div className='bg-black'>
                <img src={oxx} onClick={handleOnClick} className='object-scale-down h-16 w-16 cursor-pointer' alt='No images'/>
            </div>
        </>
    );
}