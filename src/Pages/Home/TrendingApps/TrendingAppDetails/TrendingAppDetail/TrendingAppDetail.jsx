import { Star } from 'lucide';
import React from 'react';
import { CiStar } from 'react-icons/ci';
import { FaRegStar } from 'react-icons/fa';
import { IoMdDownload } from 'react-icons/io';
import { Link } from 'react-router';

const TrendingAppDetail = ({ data }) => {
    const { image, title, ratingAvg, downloads, id } = data;

    return (
        <div className='border rounded-2xl py-5 border-gray-400'>
            <Link to={`/${id}`}>
                <div className='w-4/5 mx-auto border flex justify-center rounded-2xl border-gray-300'>
                    <img className='h-50 py-5 px-5 w-3/5 overflow-hidden' src={image} alt="" />
                </div>
                <div className='w-4/5 mx-auto'>
                    <h1 className='font-bold mt-3 text-xl'>
                        {title}
                    </h1>
                </div>
                <div className='w-4/5 mx-auto flex justify-between'>
                    <h1 className='flex items-center'>
                        <IoMdDownload></IoMdDownload>
                        {new Intl.NumberFormat("en", {
                            notation: "compact",
                            maximumFractionDigits: 1
                        }).format(downloads)}
                    </h1>
                    <h1 className='flex items-center gap-2'>
                        <FaRegStar fill='gold'></FaRegStar> {ratingAvg}
                    </h1>
                </div>
            </Link>
        </div>
    );
};

export default TrendingAppDetail;