import React from 'react';
import { useLoaderData } from 'react-router';
import TrendingAppDetails from '../Home/TrendingApps/TrendingAppDetails/TrendingAppDetails';
import TrendingAppDetail from '../Home/TrendingApps/TrendingAppDetails/TrendingAppDetail/TrendingAppDetail';

const Apps = () => {
    const fetchData = useLoaderData();
    return (
        <div className='grid md:grid-cols-3 gap-10 w-4/5 mx-auto my-10'>
            {
                fetchData.map(data => <TrendingAppDetail data={data}></TrendingAppDetail>)
            }
        </div>
    );
};

export default Apps;