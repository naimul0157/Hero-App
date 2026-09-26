import React from 'react';
import errorimage from '../../assets/error-404.png'
import { useNavigate } from 'react-router';
const ErrorHandle = () => {
    const navigate = useNavigate();
    const navigation = ()=>{
        navigate(-1);
    }
    return (
        <div className='flex w-4/5 mx-auto justify-center'>
            <div>
                <img src={errorimage} alt="" />
                <div className='flex justify-center'>
                    <button onClick={navigation} className='btn btn-primary'>Go back</button>
                </div>
            </div>
        </div>
    );
};

export default ErrorHandle;