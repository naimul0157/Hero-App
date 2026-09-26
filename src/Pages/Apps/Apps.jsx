import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import TrendingAppDetails from '../Home/TrendingApps/TrendingAppDetails/TrendingAppDetails';
import TrendingAppDetail from '../Home/TrendingApps/TrendingAppDetails/TrendingAppDetail/TrendingAppDetail';

const Apps = () => {
    const fetchData = useLoaderData();

    const [searchText, setsearchText] = useState('');
   const searchData = fetchData.filter(data => data.title.toLowerCase().includes(searchText.toLowerCase()) || data.companyName.toLowerCase().includes(searchText.toLowerCase()));
    return (
        <div>
            <div className='font-bold w-4/5 mx-auto mt-10 flex justify-between items-center'>
                <h1>
                    ({fetchData.length})Apps Found
                </h1>
                <div>
                    <input onChange={(e)=> setsearchText(e.target.value)} className='border p-2 rounded-2xl' type="text" placeholder='Search Text' />
                </div>
            </div>
            <div  className='grid md:grid-cols-3 gap-10 w-4/5 mx-auto my-5'>
                {
                    searchData.map(data => <TrendingAppDetail data={data}></TrendingAppDetail>)
                }
            </div>
        </div>
    );
};

export default Apps;