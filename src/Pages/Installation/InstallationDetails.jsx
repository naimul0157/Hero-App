import { Star } from 'lucide';
import { DownloadIcon, StarCheck } from 'lucide-react';
import React from 'react';

const InstallationDetails = ({ result }) => {
    const { id, image, title, downloads, ratingAvg, size } = result;
    return (
        <div className='w-4/5 mx-auto mt-10 rounded-2xl bg-gray-200 px-5 py-5 flex gap-10'>
            <div className='w-1/5 p-2 rounded-2xl flex justify-center bg-white'>
                <img className='h-25' src={image} alt="" />
            </div>
            <div>
                <div>
                    <h1 className='font-bold text-xl'>{title}</h1>
                </div>
                <div className='mt-5 flex gap-10 font-bold'>
                    <div className='flex'>
                        <DownloadIcon stroke='green' fill='green'></DownloadIcon>
                        <h1>
                            {new Intl.NumberFormat("en", {
                                notation: "compact",
                                maximumFractionDigits: 1
                            }).format(downloads)}
                        </h1>
                    </div>
                    <div className='flex gap-2'>
                        <StarCheck fill='gold' stroke='gold'></StarCheck>
                        <h1>{ratingAvg}</h1>
                    </div>
                    <div>
                        {size}MB
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstallationDetails;