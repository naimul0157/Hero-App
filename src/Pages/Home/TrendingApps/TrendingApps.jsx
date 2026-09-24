import React, { Suspense } from 'react';
import { IoMdTrendingUp } from 'react-icons/io';
import { IoTrendingUpOutline } from 'react-icons/io5';
import TrendingAppDetails from './TrendingAppDetails/TrendingAppDetails';

const TrendingApps = () => {
    const PromiseData = fetch('trending.json').then(res => res.json());
    return (
        <div>
            <div>
                <h1 className='font-bold text-3xl flex justify-center gap-2 mb-2'>
                    <span>Trending Apps</span><IoMdTrendingUp fill='green'></IoMdTrendingUp>
                </h1>
                <small className='text-sm font-bold flex justify-center mb-8'>
                    Explore All Trending Apps on the Market developed by us
                </small>
            </div>
            <Suspense>
                <TrendingAppDetails PromiseData={PromiseData}></TrendingAppDetails>
            </Suspense>
        </div>
    );
};

export default TrendingApps;