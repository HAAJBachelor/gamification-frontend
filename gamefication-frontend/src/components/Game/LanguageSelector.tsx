import React from 'react';

const LanguageSelector = () => {
    return (
        <div className='bg-gameComps'>

            <select className='bg-gray-500'>
                <option value="fruit">Fruit</option>

                <option value="vegetable">Vegetable</option>

                <option value="meat">Meat</option>

            </select>

        </div>
    );
};

export default LanguageSelector;