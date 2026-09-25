import React, { use } from 'react';
import TrendingAppDetail from './TrendingAppDetail/TrendingAppDetail';
import { NavLink } from 'react-router';

const TrendingAppDetails = ({ PromiseData }) => {
    const TrendingData = use(PromiseData).slice(0, 9);
    
    // console.log(TrendingData);
    return (
        <div>
            <div className='grid md:grid-cols-3 gap-5 w-4/5 mx-auto'>
                {
                    TrendingData.map(data => <TrendingAppDetail key={data.id} data={data}></TrendingAppDetail>)
                }
            </div>
            <div className='flex justify-center w-full mt-5 mb-5'>
                <NavLink to={'/apps'}><button className='btn btn-primary'>Show More </button></NavLink>
            </div>
        </div>
    );
};

export default TrendingAppDetails;