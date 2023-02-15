import React from 'react';
import TestCase from "./TestCase";

const TestCases = () => {
    return (
        <div className='overflow-auto overflow-x-hidden h-2/2 max-h-[400px] w-auto'>
            <div className='text-white shadow-2xl bg-gameComps p-4 ml-2 mt-2 w-[800px] hover:bg-hover'><TestCase nr='01'
                                                                                                                 title='TestCase'/>
            </div>
            <div className='text-white shadow-2xl bg-gameComps p-4 ml-2 mt-2 w-[800px] hover:bg-hover'><TestCase nr='01'
                                                                                                                 title='TestCase'/>
            </div>
            <div className='text-white shadow-2xl bg-gameComps p-4 ml-2 mt-2 w-[800px] hover:bg-hover'><TestCase nr='01'
                                                                                                                 title='TestCase'/>
            </div>
            <div className='text-white shadow-2xl bg-gameComps p-4 ml-2 mt-2 w-[800px] hover:bg-hover'><TestCase nr='01'
                                                                                                                 title='TestCase'/>
            </div>
            <div className='text-white shadow-2xl bg-gameComps p-4 ml-2 mt-2 w-[800px] hover:bg-hover'><TestCase nr='01'
                                                                                                                 title='TestCase'/>
            </div>
            <div className='text-white shadow-2xl bg-gameComps p-4 ml-2 mt-2 w-[800px] hover:bg-hover'><TestCase nr='01'
                                                                                                                 title='TestCase'/>
            </div>
        </div>
    );
};

export default TestCases;