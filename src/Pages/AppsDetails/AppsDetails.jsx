
import { Download, DownloadCloud } from 'lucide';
import { ArrowDownToLine, DownloadIcon, Star, ThumbsUp } from 'lucide-react';
import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Barchart from './Barchart/Barchart';
import { addinstallationData, getinstallationData } from '../../Utility/AddDb';


const AppsDetails = () => {
    const number = useParams().id;
    const FetchData = useLoaderData();
    const result = FetchData.find(data => number == data.id);
    const { image, title, companyName, downloads, ratingAvg, reviews, size, ratings, description, id } = result;
    const [installed, setinstalled] = useState(false);

    const handleInstalled = () => {
        setinstalled(!installed);
        addinstallationData(id);
    }
    console.log(ratings);
    return (
        <div >
            <div className='mt-10 mx-10 md:flex gap-10'>
                <div className='md:w-2/5 flex justify-center'>
                    <img className='md:h-100 h-60' src={image} alt="" />
                </div>
                <div className='md:w-3/5'>
                    <h1 className='font-bold text-3xl mb-2'>
                        {title}
                    </h1>
                    <h1>
                        <span className='text-gray-400'>Dveloped By:</span> <span className='text-blue-600'>{companyName}</span>
                        <div className='border border-gray-500 mt-3'></div>
                    </h1>
                    <div className='flex md:gap-20 gap-5 mt-5'>
                        <div>

                            <DownloadIcon size={'5vw'} stroke='green'></DownloadIcon>
                            <h1>
                                Downloads
                            </h1>
                            <h1 className='font-bold text-3xl'>
                                {new Intl.NumberFormat("en", {
                                    notation: "compact",
                                    maximumFractionDigits: 1
                                }).format(downloads)}
                            </h1>
                        </div>
                        <div>
                            <Star size={'5vw'} fill='gold' stroke='gold'></Star>
                            <h1>Ratings</h1>
                            <h1 className='font-bold text-3xl'>{ratingAvg}</h1>
                        </div>
                        <div>
                            <ThumbsUp size={'5vw'} fill='blue' stroke='black'></ThumbsUp>
                            <h1>Total Reviews</h1>
                            <h1 className='font-bold text-3xl'>
                                {new Intl.NumberFormat("en", {
                                    notation: "compact",
                                    maximumFractionDigits: 1
                                }).format(reviews)}
                            </h1>
                        </div>

                    </div>
                    <div className='mt-5'>
                        <button className='btn bg-green-300' disabled={installed} onClick={handleInstalled}>{!installed ? `Install Now(${size}MB) ` : `Installed`}</button>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
               <Barchart ratings={ratings} description={description}></Barchart>
            </div>
        </div>
    );
};

export default AppsDetails;