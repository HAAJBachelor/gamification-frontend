const NewCard = (props: any) => {
    return (
        <div
            className='text-center my-10 md:mx-52 sm:mx-46 overflow-visible mx-auto rounded-3xl border-4 border-yellow-400 relative py-10'>
            {props.children}
        </div>
    );
};
export default NewCard;