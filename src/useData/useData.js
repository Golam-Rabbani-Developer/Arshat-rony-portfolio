import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Pages/Shared/Loading';

const useData = (text) => {
    console.log(text)
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     const url = text;
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(received => setData(received))
    // }, [])
    const { isLoading, data } = useQuery('servicedata', () =>
        fetch(`${text}`).then(res =>
            res.json()
        )
    )

    if (isLoading) {
        return <Loading type="spokes" color="#1C2648"></Loading>
    }
    console.log(data)
    return [data]
};

export default useData;