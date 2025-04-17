import React from 'react';
import ThreeHundred from './ThreeHundred';
import ThreeThousand from './ThreeThousand';

const Three = () => {
    return (
        <div className='space-y-2 border p-5 rounded-lg'>
            <h3 className='font-bold text-2xl border rounded-lg p-5'>Three </h3>
            <span className='flex gap-5'>
                <ThreeHundred></ThreeHundred>
                <ThreeThousand></ThreeThousand>
            </span>
        </div>
    );
};

export default Three;