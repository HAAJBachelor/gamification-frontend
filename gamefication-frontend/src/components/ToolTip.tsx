import React from 'react';

type Props = {
    message: string,
    children: React.ReactNode,
}

const ToolTip = (props: Props) => {
    return (
        <div className="group relative flex">
            {props.children}
            <span
                className="absolute bottom-20 scale-0 transition-all rounded bg-yellow-500 p-2 text-xs text-white group-hover:scale-100">{props.message}</span>
        </div>
    );
};

export default ToolTip;