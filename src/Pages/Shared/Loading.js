import React from 'react';
import ReactLoading from 'react-loading';
const Loading = ({ type, color }) => {
    return (
        <div style={{ minHeight: "100%" }} className='d-flex align-items-center justify-content-center '>
            <ReactLoading type={type} color={color} height={170} width={100} />
        </div>
    );
};

export default Loading;