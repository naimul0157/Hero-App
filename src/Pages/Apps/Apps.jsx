import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import TrendingAppDetails from '../Home/TrendingApps/TrendingAppDetails/TrendingAppDetails';
import TrendingAppDetail from '../Home/TrendingApps/TrendingAppDetails/TrendingAppDetail/TrendingAppDetail';
import { Search } from 'lucide-react';

const Apps = () => {
    const fetchData = useLoaderData();

    const [searchText, setsearchText] = useState('');
    const searchData = fetchData.filter(data => data.title.toLowerCase().includes(searchText.toLowerCase()) || data.companyName.toLowerCase().includes(searchText.toLowerCase()));
    const natigate = useNavigate();

   const handleNavigation = ()=>{
        natigate(-1);
   }
    return (
        <div>
            <div className='font-bold w-4/5 mx-auto mt-10 flex justify-between items-center'>
                <h1>
                    ({searchData.length})Apps Found
                </h1>
                <div>
                    <div className='flex border border-blue-500 p-2 rounded-2xl outline-none'>
                        <Search></Search>
                        <input className='outline-none' onChange={(e)=> setsearchText(e.target.value)}   type="text" placeholder='Search Text' />
                    </div>
                </div>
            </div>
            <div  className='grid md:grid-cols-3 gap-10 w-4/5 mx-auto my-5'>
                {
                    searchData == ''?<div className='col-span-3 flex flex-col w-1/2 mx-auto'>
                        <h1 className=' text-red-400 text-3xl text-center font-bold'>Nothing Found</h1>
                        <button className='btn btn-primary mx-55 mt-3 col-span-3' onClick={handleNavigation}>Go back</button>
                    </div>:searchData.map(data => <TrendingAppDetail data={data}></TrendingAppDetail>)
                }
            </div>
        </div>
    );
};

export default Apps;