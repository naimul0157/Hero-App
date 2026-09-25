import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts';

const Barchart = ({ ratings, description }) => {
    const data = ratings;
    return (
        <div className='mb-10'>
            <div>
                <div className='w-7/8 mx-auto font-bold text-2xl mb-5'>
                    Ratings
                </div>
                <div className='w-4/5 mx-auto'>
                    <BarChart width='full' height='50vw'
                        data={ratings}
                        layout="vertical"
                        
                    >
                        <CartesianGrid strokeDasharray='3 3'></CartesianGrid>
                        {/* Review count */}
                        <XAxis
                            type="number"
                            axisLine={false}
                            tickLine={false}
                        />

                        {/* Star names */}
                        <YAxis
                            type="category"
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            width={55}
                            reversed
                        />

                        <Tooltip />

                        <Bar
                            dataKey="count"
                            fill="#FF8811"
                            barSize={30}
                        />

                    </BarChart>
                </div>
            </div>
            <div className='w-7/8 mx-auto mt-10'>
                <h1 className='font-bold text-2xl mb-3'>
                    Description
                </h1>
                <h1 className='text-gray-500'>
                    {description}
                </h1>
            </div>
        </div>
    );
};

export default Barchart;