const NewCard = (props: any) => {
    return (
        <div
            className='text-center md:mx-52 md:my-10 sm:mx-46 sm:my-10 overflow-visible mx-auto rounded-3xl border-4 border-yellow-400 relative py-10'>
            {props.children}
        </div>
    );
};
export default NewCard;