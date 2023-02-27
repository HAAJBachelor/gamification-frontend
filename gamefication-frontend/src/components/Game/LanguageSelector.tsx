import React from 'react';

const LanguageSelector = () => {
    return (
        <div>

            <select className='bg-gameComps text-yellow-500 border-2 border-background'>

                <option value="java">Java</option>

                <option value="csharp">C#</option>
            </select>

        </div>
    );
};

export default LanguageSelector;