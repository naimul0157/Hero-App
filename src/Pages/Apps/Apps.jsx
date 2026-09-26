import React from 'react';
import { useLoaderData } from 'react-router';
import TrendingAppDetails from '../Home/TrendingApps/TrendingAppDetails/TrendingAppDetails';
import TrendingAppDetail from '../Home/TrendingApps/TrendingAppDetails/TrendingAppDetail/TrendingAppDetail';

const Apps = () => {
    const fetchData = useLoaderData();
    return (
        <div>
            <div className='font-bold w-4/5 mx-auto mt-10'>
                <h1>
                    ({fetchData.length})Apps Found
                </h1>
            </div>
            <div  className='grid md:grid-cols-3 gap-10 w-4/5 mx-auto my-5'>
                {
                    fetchData.map(data => <TrendingAppDetail data={data}></TrendingAppDetail>)
                }
            </div>
        </div>
    );
};

export default Apps;