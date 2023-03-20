const NewCard = (props: any) => {
    return (
        <div
            className='text-center min-w-fit min-h-fit px-20 my-10 md:mx-52 sm:mx-46 overflow-visible mx-auto rounded-3xl border-4 border-yellow-400 relative py-10 shadow-xl shadow-yellow-700'>
            {props.children}
        </div>
    );
};
export default NewCard;