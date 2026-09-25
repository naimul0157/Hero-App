import React from 'react';
import { BiLogoPlayStore } from 'react-icons/bi';
import { FaAppStoreIos } from 'react-icons/fa';
import playstore from '../../../assets/playstore.png'
import { Link } from 'react-router';
import BannerImage from '../../../assets/hero.png'
import TrendingApps from '../TrendingApps/TrendingApps';

const Banner = () => {
    return (
        <div className='mt-10'>
            <div className='w-5/6 mx-auto md:w-full'>
                <div className='md:text-center mb-5'>
                    <h1 className='text-center font-bold text-5xl mb-5'>
                        We Build <br /> <span className='text-blue-900'>Productive</span> Apps
                    </h1>
                    <small>
                        At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.
                    </small>
                </div>
                <div className='flex flex-wrap gap-5 justify-center mb-10'>
                    <Link to={'https://play.google.com/store/apps?hl=en'}><button className='btn'><img src={playstore} alt="" />Play Store </button></Link>
                    <Link to={'https://apps.apple.com/us/app/imposter-game-spy-fakeit/id6749012623'}><button className='btn'><FaAppStoreIos fill='#0073F6' className='text-4xl'></FaAppStoreIos>App Store </button></Link>
                </div>
                <div className='flex justify-center'>
                    <img src={BannerImage} alt="" />
                </div>
            </div>
            <div className='text-center bg-linear-to-bl from-blue-400 to-blue-800 py-10 mb-10'>
                <h1 className='font-bold text-3xl text-white mb-5'>
                    Trusted By Millions, Built For You
                </h1>
                <div className='flex justify-center text-white md:gap-10 gap-4'>
                    <div>
                        <h1>
                            Total Downloads
                        </h1>
                        <h1 className='font-bold text-3xl'>
                            29.6M
                        </h1>
                        <h1>
                            21% More Than Last Month
                        </h1>
                    </div>
                    <div>
                        <h1>
                            Total Reviews
                        </h1>
                        <h1 className='font-bold text-3xl'>
                            906K
                        </h1>
                        <h1>
                            40% More Than Last Month
                        </h1>
                    </div>
                    <div>
                        <h1>
                            Active Apps
                        </h1>
                        <h1 className='font-bold text-3xl'>
                            132+
                        </h1>
                        <h1>
                            31% More Than Last Month
                        </h1>
                    </div>
                </div>
            </div>
            <TrendingApps></TrendingApps>
        </div>
    );
};

export default Banner;