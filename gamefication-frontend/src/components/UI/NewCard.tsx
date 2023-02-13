import React from 'react';

const NewCard = (props: any) => {
    const classes = 'card ' + props.className;
    return (
        <div className='text-center mx-52 my-10 overflow-visible'>
            <div
                className={classes + 'mx-auto rounded-3xl border-4 border-yellow-400 relative py-10'}>{props.children}
            </div>
        </div>
    );
};
export default NewCard;