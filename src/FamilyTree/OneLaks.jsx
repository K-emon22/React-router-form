import React, { use } from 'react';
import { MyMoney } from './FamilyTree';

const OneLaks = () => {


const [value,setValue]=use(MyMoney)


    return (
        <div>
            <h1>emon {value}</h1>

            <button onClick={()=>setValue(value+1)} className='btn btn-primary'> add value </button>
        </div>
    );
};

export default OneLaks;