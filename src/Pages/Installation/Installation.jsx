import React from 'react';
import { useLoaderData } from 'react-router';
import { getinstallationData } from '../../Utility/AddDb';
import InstallationDetails from './InstallationDetails';

const Installation = () => {
    const getdata = getinstallationData();
    const fetchData = useLoaderData().reverse();
    const resultData = fetchData.filter(data => getdata.includes(data.id))
    return (
        <div>
            <div className='w-4/5 mx-auto mt-5 font-bold'>
                <h1>
                    Total Installed apps: ({resultData.length})
                </h1>
            </div>
            <div>
                {
                    resultData.map(result=> <InstallationDetails key={result.id} result={result}></InstallationDetails>)
                }
            </div>
        </div>
    );
};

export default Installation;