import React, { useEffect, useState } from 'react';

const useData = (text) => {
    const [data, setData] = useState([])
    useEffect(() => {
        const url = text;
        fetch(url)
            .then(res => res.json())
            .then(received => setData(received))
    }, [])
    return [data, setData]
};

export default useData;