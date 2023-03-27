const NewCard = (props: any) => {
    //md:mx-52 sm:mx-46
    return (
        <div
            className='text-center min-w-fit px-16 my-10 overflow-visible mx-1 rounded-3xl border-4 border-yellow-400 relative py-10 shadow-xl shadow-yellow-700'>
            {props.children}
        </div>
    );
};
export default NewCard;